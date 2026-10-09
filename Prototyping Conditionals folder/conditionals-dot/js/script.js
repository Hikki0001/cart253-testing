/**
 * Chase the Takumi
 * Matteo Edmonds-Tiano
 * 
 * Chase the Takumi with the cursor and click him!
 */

"use strict";
/**
 * canvas size
 */
let canvasSize = {
    w: 800,
    h: 500
};

/**
 * background color
 */
let backgroundColor = "rebeccapurple";

/**
 * takumi
 */
let takumi = {
    x: 400,
    y: 250,
    size: 80,
    image: undefined,
    /**
     * for states to know what state your at like when u win and click him
     */
    tints: {
        normal: undefined,
        cornered: [224, 108, 117],
        caught: [184, 242, 201],
    },
    /**
     * reminder for self:  3 states
     */
    state: "free"
}

/**
 * controls how takumi behaves 
 */
let rules = {
    /**
     * how near the mouse has to be before takumi will react
     */
    fleeDistance: 150,
    /**
     * speed of running away
     */
    fleeSpeed: 0.08,
    /**
     * closeness to an edge to cound as cornering takumi
     */
    cornerMargin: 30,
    /**
     * for catching him 
     */
    catchRadius: 20,
    /**
     * how close to the edge of the canvas he can go
     */
    wallPadding: 10
};

let messages = {
    default: "AHHH DONT CATCH ME!",
    fleeing: "Youre more of a chud than me!",
    cornered: "No I DONT WANNA GO OUTSIDE!!",
    caught: "You caught me... I CANT BE A LOSER ANYMORE!!"
};

/**
 * dialogues value and where its placed
 */
let dialogue = {
    current: messages.default,
    x: canvasSize.w / 2,
    y: canvasSize.h - 40,
    size: 16,
    fill: 255
};

/**
 * sets up the canvas and loads takumi's picture
*/
async function setup() {
    createCanvas(canvasSize.w, canvasSize.h);
    imageMode(CENTER);
    textAlign(CENTER);

    takumi.image = await loadImage("assets/images/takumi.jpg");

}


/**
 * draws all the functions
*/
function draw() {
    updateStates();

    background(backgroundColor);
    drawTakumi();
    drawText();
}

/**
 * for deciding the states and what to say when its in the specific state
 */
function updateStates() {

    let d = dist(mouseX, mouseY, takumi.x, takumi.y);
    /**caught check first
     * setting up for change the state or run again
     */
    if (takumi.state === "caught") {
        dialogue.current = messages.caught;
    }
    /**
     * another check for cornered
     */
    else if (isCornered() && d < rules.fleeDistance) {
        takumi.state = "cornered";
        dialogue.current = messages.cornered;
    }
    /**
     * fleeing so for when takumis not close to a wall
     */
    else if (d < rules.fleeDistance) {
        takumi.state = "free";
        dialogue.current = messages.fleeing;
        flee();
    }
    else {
        /**
         * nothing is happening so will go back to default text
         */
        takumi.state = isCornered() ? "cornered" : "free";
        dialogue.current = messages.default
    }
}

/**
 * moves takumi away from mouse
 */
function flee() {
    takumi.x += (takumi.x - mouseX) * rules.fleeSpeed;
    takumi.y += (takumi.y - mouseY) * rules.fleeSpeed;

    takumi.x = constrain(takumi.x, rules.wallPadding, canvasSize.w - rules.wallPadding);
    takumi.y = constrain(takumi.y, rules.wallPadding, canvasSize.h - rules.wallPadding);
}

/**
 * will check if the dot is against any of the edges/corners
 */
function isCornered() {
    /**
     * even if 1 of these 4 checks is true the whole thing is true is what im saying here...
     * rules.cornerMargin is how close to a wall counts as "against" it means
     */
    return takumi.x < rules.cornerMargin ||
        takumi.x > canvasSize.w - rules.cornerMargin ||
        takumi.y < rules.cornerMargin ||
        takumi.y > canvasSize.h - rules.cornerMargin;
}
/**
 * changes his color depening on the states hes in
 */
function drawTakumi() {
    push();
    if (takumi.state === "caught") {
        tint(takumi.tints.caught);
    }
    else if (takumi.state === "cornered") {
        tint(takumi.tints.cornered);
    }
    else {
        noTint();
    }
    image(takumi.image, takumi.x, takumi.y, takumi.size, takumi.size);
    pop();
}

function drawText() {
    push();
    noStroke();
    fill(dialogue.fill);
    textSize(dialogue.size);
    text(dialogue.current, dialogue.x, dialogue.y);
    pop();
}

function mousePressed() {
    let d = dist(mouseX, mouseY, takumi.x, takumi.y);
    if (d < rules.catchRadius && isCornered()) {
        takumi.state = "caught";
    }
}





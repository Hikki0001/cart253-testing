/**
 * Schrodingers Cat
 * Matteo Edmonds-Tiano
 * 
 * This prototype shows well the popular expirement of schrodingers cat.
 */

"use strict";

/**
 * canvas size
 */
let canvasSize = {
    w: 480,
    h: 480
};

/**
 * the image variables
 */
let images = {
    backgroundImg: undefined,
    catImg: undefined
};

/**
 * the box
 */
let box = {
    x: 240,
    y: 270,
    w: 280,
    h: 240,
    /**
     * its closed colors
     */
    closedFill: {
        r: 110,
        g: 80,
        b: 60,
    },
    /**
     * its opened colors
     */
    openFill: {
        r: 235,
        g: 225,
        b: 205
    }
};

/**
 * the cat and when its drawn when the box is open
 */
let cat = {
    x: 240,
    y: 270,
    w: 150,
    h: 180,
    /**
     * for showing the death of the cat :(
     */
    deadTint: 110
};

/**
 * the 50/50 for the expirement 
 */
let experiment = {
    /**
     * has the box been opened yet or not
     */
    decided: false,
    isOpen: false,
    /**
     * both true and false
     */
    alive: undefined,
    /**
     * 50/50 of the cat being alive or dead
     */
    chanceAlive: 0.5
};

/**
 * text on the screen
 */
let message = {
    current: "The cat is alive and dead... Maybe try to click the box to see?",
    x: 240,
    y: 440,
    fill: 255,
    size: 15
};

/**
 * different dialogues
 */
let words = {
    start: "The cat is alive and dead... Maybe try to click the box to see?",
    alive: "The cat is alive!!! Press R to close the box again.",
    dead: "The cat is dead... Press R to close the box again.",
    closed: "The box is closed. Is the cat still the same?"
};

/**
 * the big question mark on the box
 */
let questionMark = {
    symbol: "?",
    fill: 255,
    size: 60,
    offsetY: 20
};

let onBox = false;

/**
 * creating the canvas
*/
async function setup() {
    createCanvas(canvasSize.w, canvasSize.h);
    imageMode(CENTER);
    rectMode(CENTER);
    textAlign(CENTER);


    images.backgroundImg = await loadImage("assets/images/background.png");
    images.catImg = await loadImage("assets/images/cat.png");
}


/**
 * draws text, the box, and the room
*/
function draw() {
    image(images.backgroundImg, canvasSize.w / 2, canvasSize.h / 2, canvasSize.w, canvasSize.h);

    drawBox();
    drawText();
}

/**
 * draws the actual box on the screen
 */
function drawBox() {
    push();
    noStroke();
    /**
     * for the open box state
     */
    if (experiment.isOpen) {
        fill(box.openFill.r, box.openFill.g, box.openFill.b);
        rect(box.x, box.y, box.w, box.h);
        drawCat();
    }
    /**
     * for the closed box state
     */
    else {
        fill(box.closedFill.r, box.closedFill.g, box.closedFill.b);
        rect(box.x, box.y, box.w, box.h);

        fill(questionMark.fill);
        textSize(questionMark.size);
        text(questionMark.symbol, box.x, box.y + questionMark.offsetY);
    }
    pop();
}

/**
 * when alive the cat will be drawn normally and when dead its upside down well to show its dead :(
 */
function drawCat() {
    push();
    translate(cat.x, cat.y);

    /**
     * so for when the cat isnt alive shown by the ! symbol
     */
    if (!experiment.alive) {
        tint(cat.deadTint);
        /**
         * for making it turn upside down i.e 180 
         */
        rotate(PI)
    }

    image(images.catImg, 0, 0, cat.w, cat.h);
    pop();
}

/**
 * draws the messages that'll be drawn on the screen
 */
function drawText() {
    push();
    noStroke();
    fill(message.fill);
    textSize(message.size);
    text(message.current, message.x, message.y);
    pop();
}

/**
 * click on the box will either open it or close it 
 */
function mousePressed() {
    /**
     * Checks if the mouse is inside the box 
     * I use && to check if all 4 checks are true at the same time
     */
    onBox = mouseX > box.x - box.w / 2 &&
        mouseX < box.x + box.w / 2 &&
        mouseY > box.y - box.h / 2 &&
        mouseY < box.y + box.h / 2;

    if (!onBox) {
        return;
    }

    /**
     * for closing the box
     */
    if (experiment.isOpen) {
        experiment.isOpen = false;
        message.current = words.closed;
        return;
    }

    /**
     * opening the box and itll randomly decide if the cat is alive or dead
     */
    if (!experiment.decided) {
        experiment.alive = random() < experiment.chanceAlive;
        experiment.decided = true;
    }

    experiment.isOpen = true;

    /**
     * shows specific text depending on the states of the cats aliveness or deadness(these arent words lol)
     */
    if (experiment.alive) {
        message.current = words.alive;
    }
    else {
        message.current = words.dead;
    }
}

/**
 * for the reloading on the box makes it so when r is pressed it resets the possibilities 
 */
function keyPressed() {
    if (key === "r" || key === "R") {
        experiment.decided = false;
        experiment.isOpen = false;
        message.current = words.start;
    }
}






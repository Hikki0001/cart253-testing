/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let canvasSize = {
    w: 480,
    h: 480
};

let images = {
    backgroundImg: undefined,
    catImg: undefined
};

let box = {
    x: 240,
    y: 270,
    w: 200,
    h: 160,
    closedFill: {
        r: 110,
        g: 80,
        b: 60,
    },
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
    w: 120,
    h: 100,
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
    size: 16
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

let questionMark = {
    symbol: "?",
    fill: 255,
    size: 60,
    offsetY: 20
};

/**
 * creating the canvas
*/
async function setup() {
    createCanvas(canvasSize.w, canvasSize.h);
    imageMode(CENTER);
    rectMode(CENTER);
    textAlign(CENTER);


    backgroundImg = await loadImage("assets/images/background.png");
    catImg = await loadImage("assets/images/cat.png");
}


/**
 * draws text, the box, and the room
*/
function draw() {
    image(backgroundImg, canvasSize.w / 2, canvasSize.h / 2, canvasSize.w, canvasSize.h);

    drawBox();
    drawText();
}

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
    if (!expirement.alive) {
        tint(cat.deadTint);
        /**
         * for making it turn upside down i.e 180 and pie is half of a circle
         */
        rotate(PI)
    }

    image(catImg, 0, 0, cat.w, cat.h);
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

}






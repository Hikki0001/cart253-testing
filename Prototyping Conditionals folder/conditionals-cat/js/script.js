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
    size: 16
};

/**
 * different dialogues
 */
let words = {
    start: "The cat is alive and dead... Maybe try to click the box to see?",
    alive: "The cat is alive!!! Press R to close the box again.",
    dead: "The cat is dead... Press R to close the box again."
    closed: "The box is closed. Is the cat still the same?"
};

/**
 * creating the canvas
*/
async function setup() {
    createCanvas(canvasSize.w, canvasSize.h);
    imageMode(CENTER);
    textAlign(CENTER);
    

    backgroundImg = await loadImage("assets/images/background.png");
    catImg = await loadImage("assets/images/cat.png");
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

}
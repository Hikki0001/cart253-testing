/**
 * Find Usagi
 * Matteo Edmonds-Tiano
 * 
 * It's like wheres waldo but its finding Usagi!
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
 * background image
 */
let bg = {
    image: undefined
};

/**
 * array holding the 5 characters and I need usagi to be last meaning the other 4 
 * will be from 0 to 3
 */
let images = [];
let usagiIndex = 4;

/**
 * all of them being display on the screen
 */
let crowd = [];



/**
 * loads the background and all images
*/
async function setup() {
    createCanvas(canvasSize.w, canvasSize.h);
    imageMode(CENTER)
    bg.image = await loadImage("assets/images/background.jpg");

}


/**
 * draws the functions
*/
function draw() {
    drawBackground();

}

function drawBackground() {
    push();
    imageMode(CORNER);
    image(bg.image, 0, 0, width, height);
    pop();
}
/**
 * Kaito's Emotions
 * Matteo Edmonds-Tiano
 * 
 * He's an emotional guy I think we all wanna see his emotions!
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
 * background 
 */
let bg = {
    image: undefined
};

/**
 * kaito's sprites in order as they will appear from left to right
 */
let sprites = []

/**
 * all sprites labels in order
 */
let labels = [
    "Neutral",
    "Confident",
    "Happy",
    "Scared",
    "Defeated",
    "Thinking"
];

/**
 * where the sprites are going to be on the screen
 */
let picture = {
    x: 400,
    y: 250,
    h: 450
};

/**
 * loads the images and screen
*/
async function setup() {
    createCanvas(canvasSize.w, canvasSize.h);
    imageMode(CENTER);
    textAlign(CENTER, CENTER);

    bg.image = await loadImage("assets/images/background.png");

    sprites[0] = await loadImage("assets/images/Kaito1.png");
    sprites[1] = await loadImage("assets/images/Kaito2.png");
    sprites[2] = await loadImage("assets/images/Kaito3.png");
    sprites[3] = await loadImage("assets/images/Kaito4.png");
    sprites[4] = await loadImage("assets/images/Kaito5.png");
    sprites[5] = await loadImage("assets/images/Kaito6.png");

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

}
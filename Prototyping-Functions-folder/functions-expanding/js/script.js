/**
 * Expanding Kirby's
 * Matteo Edmonds-Tiano
 * 
 * The kirby's keep getting bigger... I wonder how big they can get?
 */

"use strict";

/**
 * canvas size
 */
let canvasSize = {
    w: 800,
    h: 500
};

let bg = {
    image: undefined
}

/**
 * the picture shared by the 4 kirby's
 */
let kirbyImage;

/**
 * how big they are when they start and where the ground is
 */
let startSize = 80;
let ground = 450;

/**
 * the kirby's have different sizes, and growing speeds
 */
let kirby1Size = startSize;
let kirby1Speed = 0.2;

let kirby2Size = startSize;
let kirby2Speed = 0.5;

let kirby3Size = startSize;
let kirby3Speed = 1;

let kirby4Size = startSize;
let kirby4Speed = 2;


/**
 * loading canvas and kirby png
*/
async function setup() {
    createCanvas(canvasSize.w, canvasSize.h);


    kirbyImage = await loadImage("assets/images/kirby.png");
    bg.image = await loadImage("assets/images/background.png")

}


/**
 * draws all the functions and background
*/
function draw() {
    background(bg.image)

}
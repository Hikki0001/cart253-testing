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
 * draws the functions
*/
function draw() {
    background(bg.image);

    let index = currentSprite();
    drawSprite(sprites[index]);

}

/**
 * which sprite number the mouse is currently over
 * using map to turn the mouse's x position into a number from 0 to sprites length
 * also constraining it to not go past the end
 */
function currentSprite() {
    let index = floor(map(mouseX, 0, innerWidth, 0, sprites.length));
    return constrain(index, 0, sprites.length - 1);
}
/**
 * The Shy Happy Dog
 * Matteo Edmonds-Tiano
 * 
 * He's a bit shy but can you find him
 */

"use strict";

/**
 * variables for adding an image(png) and a cover over it
 */
let bgImg;
let cover = {
    erase: 0,
    noErase: 0,
}
/**
 * A eraser variable
 */
let eraser = {
    size: 70,
    weight: 1.5,
    fill: {
        r: 255,
        g: 255,
        b: 255
    }
}
/**
 * tracks the image if its fully revealed yet.
 */
let revealed = false;

/**
 * adds a little bounce to show you fully revealed him
 */
let bounce = {
    y: 0,
    vy: 0, //vertical velocity 
    gravity: 0.5,
    damping: 0.60 // energy thats stored after the bounce

}

/**
 * took me forever to figure out but shows the image and cover hiding the dog image with creating the overall canvas
 */
async function setup() {
    let w = 640, h = 480
    createCanvas(w, h);

    bgImg = await loadImage("assets/images/happydog.png");


    cover = createGraphics(w, h);
    cover.background(eraser.fill.r, eraser.fill.g, eraser.fill.b);

}


/**
 * draws everything on the screen
 */
function draw() {
    background(20);


    /**
     * draws the image of the shy dog
     */

    image(bgImg, 0, 0, width, height);

    /**
     * main functions that need to be drawn
     */
    image(cover, 0, 0);
    eraseCover();
    mouseCursor();

}

/**
 * the cover that needs to be eraser
 */
function eraseCover() {
    push();
    noStroke();
    /**
     * makes it so that the cover is stuct to these parts
     */
    cover.erase();
    cover.ellipse(mouseX, mouseY, eraser.size)
    cover.noErase();
    pop();


}

/**
 * the eraser thats controlled by the mouse cursor
 */
function mouseCursor() {
    push();
    noFill();
    strokeWeight(eraser.weight);
    stroke(255);
    ellipse(mouseX, mouseY, eraser.size);
    pop();
}
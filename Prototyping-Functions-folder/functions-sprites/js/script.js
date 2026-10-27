/**
 * Beautiful sprites idk
 * Matteo Edmonds-Tiano
 * 
 * I had an idea that I thought would be a bit funny so this prototype
 * is gonna show some similar sprites maybe u could argue not but eh they reacting 
 * to typing their names and they pretty similar
 */

"use strict";

/**
 * canvas size
 */
let canvasSize = {
    w: 800,
    h: 500,
};

let bg = {
    color: {
        r: 46,
        g: 38,
        b: 52
    }
};

/**
 * where the sprites sit and how big they're drawn
 */
let layout = {
    spriteY: 330,
    spriteSize: 160,
    labelY: 440
};

/**
 * how they all react when their names are typed
 */
reaction = {
    duration: 1400,
    /**
     * for how hight the bounce goes up (in pixels)
     */
    bounceHeight: 50,
    bounces: 3,
    text: "WAAAAAAA!"
};

/**
 * for seeing the letters typed so far
 */
let typing = {
    current: "",
    maxLenght: 12,
};


/**
 * Loading all the images and has createcanvas
*/
async function setup() {
    createCanvas(canvasSize.w, canvasSize.h);
    imageMode(CENTER);
    textAlign(CENTER, CENTER);


}


/**
 * draws all the functions and everything shown on screen
*/
function draw() {
    background(bg.color.r, bg.color.g, bg.color.b);

}
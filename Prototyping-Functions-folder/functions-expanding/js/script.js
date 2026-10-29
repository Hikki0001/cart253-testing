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
let kirby3Speed = 0.7;

let kirby4Size = startSize;
let kirby4Speed = 1;


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

    /**
     * kirby 1 grows then gets drawn
     */
    kirby1Size += kirby1Speed;
    image(kirbyImage, 80, ground - kirby1Size / 2, kirby1Size, kirby1Size)

    /**
     * kirby 2
     */
    kirby2Size += kirby2Speed;
    image(kirbyImage, 200, ground - kirby2Size / 2, kirby2Size, kirby2Size)

    /**
     * kirby 3
    */
    kirby3Size += kirby3Speed;
    image(kirbyImage, 600, ground - kirby3Size / 2, kirby3Size, kirby3Size)

    /**
    * kirby 2
    */
    kirby4Size += kirby4Speed;
    image(kirbyImage, 350, ground - kirby4Size / 2, kirby4Size, kirby4Size)



}
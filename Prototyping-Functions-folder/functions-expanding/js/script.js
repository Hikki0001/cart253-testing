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
let size = {
    start: 80,
    ground: 450
}


/**
 * the data for one kirby
 */
function makeKirby(x, speed) {
    return {
        x: x,
        size: size.start,
        speed: speed
    }
}

/**
 * all the kirby's
 */
let kirby1 = makeKirby(80, 0.2);
let kirby2 = makeKirby(200, 0.5);
let kirby3 = makeKirby(600, 1);
let kirby4 = makeKirby(350, 0.7);



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
    * the kirby's and the draw and grow
    */
    growKirby(kirby1)
    growKirby(kirby2)
    growKirby(kirby3)
    growKirby(kirby4)

    drawKirby(kirby1)
    drawKirby(kirby2)
    drawKirby(kirby3)
    drawKirby(kirby4)
}

/**
 * makes the kirby's get bigger forever
 */
function growKirby(kirby) {
    kirby.size += kirby.speed;
}

/**
 * drawing kirby on the screen
 */
function drawKirby(kirby) {
    image(kirbyImage, kirby.x, size.ground - kirby.size / 2, kirby.size, kirby.size);
}


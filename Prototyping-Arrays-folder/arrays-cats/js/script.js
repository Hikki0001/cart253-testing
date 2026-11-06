/**
 * Cat Dropper 
 * Matteo Edmonds-Tiano
 * 
 * Cats are dropping from the sky!!!!!
 */

"use strict";

/**
 * canvas size
 */
let canvasSize = {
    w: 800,
    h: 500
}

/**
 * array of images
 */
let catImages = [];
/**
 * the Array for the cats
 */
let cats = [];

/**
 * how the cats will fall and how they will be drawn
 */
let settings = {
    /**
     * whwere the cat lands
     */
    groundY: 450,
    fallSpeed: 6,
    size: 80,
    /**
     * frames between cats while you drag
     */
    dropEvery: 5
}

/**
 * load images and canvas
*/
async function setup() {
    createCanvas(canvasSize.w, canvasSize.h);
    imageMode(CENTER);

    catImages[0] = await loadImage("assets/images/cat1.png");
    catImages[1] = await loadImage("assets/images/cat2.png");
    catImages[2] = await loadImage("assets/images/cat3.png");

}


/**
 * draws the functions and background
*/
function draw() {
    background("pink")

    /**
     * for loop that moves and drawas every cat every frame
     */
    for (let i = 0; i < cats.length; i++) {
        fallCat(cats[i]);
        drawCat(cats[i]);
    }
}

/**
 * making it so that the random(catImages) will pick one picture out of the array
 */
function makeCat(x) {
    return {
        x: x,
        y: 0,
        image: random(catImages)
    };
}

/**
 * moves the selected cat down and then will stop when it the ground
 */
function fallCat(cat) {
    cat.y = min(cat.y + settings.fallSpeed, settings.groundY);
}

/**
 * draws whichever cat is decided
 */
function drawCat(cat) {
    image(cat.image, cat.x, cat.y, settings.size, settings.size);
}

/**
 *  will drop a cat every frame while you drag the mouse
 */
function mouseDragged() {
    if (frameCount % settings.dropEvery === 0) {
        cats.push(makeCat(mouseX))
    }
}
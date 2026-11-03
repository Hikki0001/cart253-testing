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
 * how many characters there and where/ how theyre drawn on the screen
 */
let settings = {
    crowd: {
        /**
         * how many characters are there in the 1st round
         */
        start: 60,
        /**
         * then how many are added the next rounds:
         */
        perRound: 10
    },
    size: {
        min: 54,
        max: 84
    },
    /**
     * adding a margin for the characters so they dont go off the edges of the screen
     */
    margin: {
        side: 40,
        top: 70,
        bottom: 30
    },
    /**
     * the clickable area I will make it a circle
     */
    hitRadius: 0.5
};

/**
 * where we are in the current state of the game
 */
let game = {
    round: 1,
    found: false,
    wrongClicks: 0
}



/**
 * loads the background and all images
*/
async function setup() {
    createCanvas(canvasSize.w, canvasSize.h);
    imageMode(CENTER);
    textAlign(CENTER, CENTER);

    bg.image = await loadImage("assets/images/background.jpg");

    images[0] = await loadImage("assets/images/Chiikawa.jpg")
    images[1] = await loadImage("assets/images/Hachiware.jpg")
    images[2] = await loadImage("assets/images/Momonga.jpg")
    images[3] = await loadImage("assets/images/Kuri.jpg")
    images[4] = await loadImage("assets/images/Usagi.jpg")

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
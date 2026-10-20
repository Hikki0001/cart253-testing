/**
 * Clickable Sumika
 * Matteo Edmonds
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * canvas size
 */
let canvasSize = {
    w: 800,
    h: 600
};

/**
 * all of the colors for
 * background, textfill and outline
 */
let colors = {
    background: {
        r: 200,
        g: 225,
        b: 250,
    },
    textFill: {
        r: 255,
        g: 80,
        b: 80,
    },
    textOutline: 0
};

/**
 * sumikas states and where shes drawn on the screen
 */
let sumika = {
    x: canvasSize.w / 2,
    w: 420,
    /**
     * for cropping her image 
     * I want it to be 0.47 of the image so it crops just to her stomach
     */
    cropAmount: 0.47,
    images: {
        normal: undefined,
        ouch: undefined,
        angry: undefined
    },
    /**
     * for the current image matching her states
     */
    currentImage: undefined,
    state: "normal"
};

/**
 * For setting up the Canvas and loading images and text
*/
async function setup() {
    createCanvas(canvasSize.w, canvasSize.h);
    imageMode(CENTER);
    textAlign(CENTER);

    sumika.images.normal = await loadImage("assets/images/sumika1.png");
    sumika.images.ouch = await loadImage("assets/images/sumika2.png");
    sumika.images.angry = await loadImage("assets/images/sumika3.png");
    ending.image = await loadImage("assets/images/punch.png");
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

}
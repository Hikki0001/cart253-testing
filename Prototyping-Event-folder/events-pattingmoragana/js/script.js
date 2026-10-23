/**
 * Giving Head pats to Morgana
 * Matteo Edmonds-Tiano
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * canvas size
 */
let canvaSize = {
    w: 800,
    h: 600
};

/**
 * I think story is a better name for the variabe 
 * but this variable is essientailly the photos and their states
 */
let story: {
    state: "waiting",
    startedAt: 0,
    images: {
        cat: undefined,
        boom: undefined,
        prayer: undefined
    }
};

/**
 * for how long each part lasts 
 */
let timers = {
    /**
     * in ms
     */
    patDuration: 1000
    /**
     * when the praying picture plays after the explosion
     */
    prayAfter: 4000
};

/**
 * secret word and the letters that were last typed
 */
let typing = {
    word: "pat",
    current: ""
};

/**
 * when picture are drawn and the tallest they can be on the display
 */
let layout = {
    x: 400,
    y: 300,
    /**
     * max height
     */
    maxH: 450
};

/**
 * setup function loading canvas and all the images/gifs
*/
async function setup() {
    createCanvas(canvaSize.w, canvaSize.h);
    imageMode(CENTER);
    textAlign(CENTER, CENTER);

    story.images.cat = await loadImage('assets/images/cat.png');
    story.images.boom = await loadImage('assets/images/explosion.png');
    story.images.prayer = await loadImage('assets/images/capybara.png');
}


/**
 * draws the functions
*/
function draw() {
    background(0);
    updateStory();


}
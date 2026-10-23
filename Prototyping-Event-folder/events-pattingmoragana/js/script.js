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
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

}
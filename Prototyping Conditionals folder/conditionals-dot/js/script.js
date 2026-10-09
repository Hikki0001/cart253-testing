/**
 * Chase the Takumi
 * Matteo Edmonds-Tiano
 * 
 * Chase the Takumi with the cursor and click him!
 */

"use strict";

let canvasSize = {
    w: 800,
    h: 500
};

let background = "Rebeccapurple";

let takumi = {
    x: 400,
    y: 250,
    size: 40, 
    image: undefined,
    /**
     * for states to know what state your at like when u win and click him
     */
    tints: {
        normal: undefined,
        cornered: [224, 108, 117],
        caught: [184, 242, 201]
    }
}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {
    createCanvas(canvasSize.w, canvasSize.h);
    imageMode(CENTER);
    textAlign(CENTER);

    takumi.image = await loadImage("assets/images/takumi.jpg");

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

}
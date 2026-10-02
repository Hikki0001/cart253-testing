/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";


/**
 * The canvas size
 */
let canvasSize = {
    w: 600,
    h: 400
};

let bgColor = {
    r: 235,
    g: 235,
    b: 240
};

let eye = {
    x: 300,
    y: 200,
    /**
     * the black part of the eye
     */
    size: {
        calm: 120,
        scared: 300
    },
    /**
     * the white part of the eye
     */
    fill: {
        r: 255,
        g: 255,
        b: 255

    },
    pupil: {
        calm: 50,
        /**
         * for shrinking the eye overtime
         */
        scared: 20,
        /**
         * following the mouse cursor
         */
        follow: 0.1,
        fill: {
            r: 17,
            g: 17,
            b: 17

        }
    }
};

let paranoia = {
    max: 1,
    /**
     * For every frame
     */
    rise: 0.001
};

/**
 * for that value to get recalculated every frame 
 */
let state = {
    paranoia: 0,
    size: 0,
    pupilSize: 0,
    pupilX: 0,
    pupilY: 0
};



/**
 * Creates the canvas
*/
function setup() {
    createCanvas(canvasSize.w, canvasSize.h);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(bgColor.r, bgColor.g, bgColor.b)

    updateParanoia();
    updateEye();
    drawEye();

}

/**
 * makes the paranoia slowly rise but it has a min to stop from reaching the max
 */
function updateParanoia() {
    state.paranoia = min(paranoia.max, state.paranoia + paranoia.rise);
}

function updateEye() {

}


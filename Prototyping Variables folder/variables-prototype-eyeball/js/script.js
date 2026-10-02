/**
 * Paranoid Eye
 * Matteo Edmonds-Tiano
 * 
 * Control the eye but at the same time maybe the eye is controlling you?!
 */

"use strict";


/**
 * The canvas size
 */
let canvasSize = {
    w: 600,
    h: 400
};

/**
 * background color
 */
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
 * Draws the background and the functions
*/
function draw() {
    background(bgColor.r, bgColor.g, bgColor.b)

    noCursor();

    updateParanoia();
    updateEye();
    drawEye();

}

/**
 * draws the eye
 */
function drawEye() {
    push();
    noStroke();
    /**
     * white part of the eye
     */
    fill(eye.fill.r, eye.fill.g, eye.fill.b);
    ellipse(eye.x, eye.y, state.size, state.size);
    /**
     * pupil or the black part of the eye
     */
    fill(eye.pupil.fill.r, eye.pupil.fill.g, eye.pupil.fill.b);
    ellipse(state.pupilX, state.pupilY, state.pupilSize, state.pupilSize);
    pop();
}

/**
 * makes the paranoia slowly rise but it has a min to stop from reaching the max
 */
function updateParanoia() {
    state.paranoia = min(paranoia.max, state.paranoia + paranoia.rise);
}

/**
 * eye and pupil slowly contrasting each other with every frame of the paranoia
 * (meaning pupil gets smaller and white part of the eye gets bigger)
 */
function updateEye() {
    /**
     * lerp helps blending both the calm state and scared with the help of paranoia
     */
    state.size = lerp(eye.size.calm, eye.size.scared, state.paranoia);
    state.pupilSize = lerp(eye.pupil.calm, eye.pupil.scared, state.paranoia);

    /**
     * pupil follows the cursor but its stable to the x and y
     */
    state.pupilX = eye.x + (mouseX - eye.x) * eye.pupil.follow
    state.pupilY = eye.y + (mouseY - eye.y) * eye.pupil.follow
}




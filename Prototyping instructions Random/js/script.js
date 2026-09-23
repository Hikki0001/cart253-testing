/**
 * Purple guy
 * Matteo Edmonds-Tiano
 * 
 * He's a guy that like to stay at a popular animatronic restoraunt. 
 * I think it's called freddy's of something like that
 */

"use strict";

/**
 * Setting up the canvas size
*/
function setup() {
    createCanvas(640, 640);

}


/**
 * Drawing my background and functions
*/
function draw() {
    background(0, 0, 0);

    drawpurpleguy();
    drawpurpleguyhead();
    drawpurpleguyeyebrows();
    drawpurpleguyface();


}

function drawpurpleguyeyebrows() {
    /**
     * His right eyebrow
     */
    push();
    noStroke();
    fill(0, 0, 0)
    rect(150, 100, 60, 20)
    pop();

    /**
     * His left eyebrow
     */
    push();
    noStroke();
    fill(0, 0, 0)
    rect(70, 100, 60, 20)
    pop();

}

function drawpurpleguyface() {
    /**
     *  Mouth top part
     */
    push();
    noStroke();
    fill(0, 0, 0)
    rect(110, 170, 100, 40)
    pop();

    /**
     * Mouth bottom part
     */
    push();
    noStroke();
    fill(0, 0, 0)
    rect(90, 170, 140, 15)
    pop();

    /**
     * His left eye
     */
    push();
    noStroke();
    fill(255, 255, 255);
    rect(85, 110, 30, 30)
    pop();

    /**
     * His right eye
     */
    push();
    noStroke();
    fill(255, 255, 255);
    rect(165, 110, 30, 30)
    pop();

}

function drawpurpleguyhead() {
    /**
     * Head square shape
     */
    push();
    noStroke();
    fill(113, 42, 149);
    rect(80, 40, 180, 180)
    pop();

    /**
     * Mini sqares to make indents to the head (left top)
     */
    push();
    noStroke();
    fill(0, 0, 0)
    rect(50, 10, 50, 50)
    pop();

    /**
     * Mini sqares to make indents to the head (left bottom)
     */
    push();
    noStroke();
    fill(0, 0, 0)
    rect(50, 200, 50, 50)
    pop();

    /**
     * Mini sqares to make indents to the head (right top)
     */
    push();
    noStroke();
    fill(0, 0, 0)
    rect(240, 10, 50, 50)
    pop();

}

function drawpurpleguy() {
    /**
     * His body
     */
    push();
    noStroke();
    fill(113, 42, 149);
    rect(200, 200, 180, 280);
    pop();

    /**
     * His left leg
     */
    push();
    noStroke();
    fill(113, 42, 149);
    rect(200, 400, 50, 200)
    pop();

    /**
     * His right leg
     */
    push();
    noStroke();
    fill(113, 42, 149);
    rect(330, 400, 50, 400);
    pop();

    /**
    * His right feet
    */
    push();
    noStroke();
    fill(113, 42, 149);
    rect(170, 600, 100, 100)
    pop();

    /**
     * His right feet
     */
    push();
    noStroke();
    fill(113, 42, 149);
    rect(300, 620, 100, 100)
    pop();

    /**
     * His top arm 
     */
    push();
    noStroke();
    fill(113, 42, 149);
    rect(80, 250, 130, 70);
    pop();

    /**
    * His bottom arm
    */
    push();
    noStroke();
    fill(113, 42, 149);
    rect(30, 340, 200, 70);
    pop();

}
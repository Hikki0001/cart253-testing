/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(640, 640);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0, 0, 0);

    drawpurpleguy();
    drawpurpleguyhead();
    drawpurpleguyface();

}

function drawpurpleguyface() {




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
    rect(200, 200, 180, 250);
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
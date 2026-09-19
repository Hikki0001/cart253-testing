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
    background(173, 216, 240)

    drawSky();

}

function drawSky() {
    push();
    noStroke();
    colorMode(HSL, 100);
    fill(53, 50, 75);
    rect(0, 0, 640, 400);
    pop();

    push();
    noStroke();
    colorMode(HSL, 100);
    fill(53, 50, 70);
    rect(0, 0, 640, 200);
    pop();

}
/**
 * Title of Project
 * Author Name
 * 
 * Learning what a variable is and does
 */

"use strict";

/**
 * creates a canvas
*/
function setup() {
    createCanvas(1000, 480)

}


/**
 * draws. a circle in the center of the canvas
*/
function draw() {
    background(0);

    push();
    fill(mouseX, mouseY, 0);
    noStroke();
    ellipse(width / 2, height / 2, 100, 100)
    pop();


}
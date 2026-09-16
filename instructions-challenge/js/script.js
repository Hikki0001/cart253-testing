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
    background(19, 24, 98);

    drawGrass();
    drawMoon();
    drawMont();
}

function drawGrass() {
    push();
    noStroke();
    fill(1, 50, 32);
    rect(0, 500, 640, 640);
    pop();
}

function drawMoon() {
    push();
    stroke(0);
    fill(240, 194, 32);
    ellipse(540, 100, 100, 100);
    pop();

}

function drawMont() {

    /**
     * seventh Mont in the back to the left 
     */
    push();
    translate(250, 100)
    stroke(0);
    fill(160, 170, 180);
    triangle(100, 400, 500, 400, 300, 100);
    pop();

    /**
     * sixth Mont in the back
     */
    push();
    translate(150, 100)
    stroke(0);
    fill(160, 170, 180);
    triangle(100, 400, 500, 400, 300, 100);
    pop();

    /**
     * Fifth farthest Mont to the right
     */
    push();
    translate(200, 100)
    stroke(0);
    fill(160, 180, 190);
    triangle(100, 400, 500, 400, 300, 100);
    pop();

    /**
     * Fourth farthest Mont to the left
     */
    push();
    translate(-200, 100)
    noStroke();
    fill(160, 180, 190);
    triangle(100, 400, 500, 400, 300, 100);
    pop();

    /**
     * Third Mont
     */
    push();
    translate(-50, 100)
    noStroke();
    fill(170, 180, 190);
    triangle(100, 400, 500, 400, 300, 100);
    pop();

    /**
     * Second Mont
     */
    push();
    translate(0, 100)
    noStroke();
    fill(180, 194, 190);
    triangle(100, 400, 500, 400, 300, 100);
    pop();

    /**
     * First smallest Mont
     */
    push();
    translate(0, 100)
    noStroke();
    fill(200, 194, 190);
    triangle(300, 400, 500, 400, 400, 200);
    pop();

}
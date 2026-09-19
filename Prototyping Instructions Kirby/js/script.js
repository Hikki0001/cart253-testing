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
    drawGrass();
    drawMoon();
    drawKirby();
    drawKirbyMouth();
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

function drawGrass() {
    push();
    noStroke();
    colorMode(HSL, 100)
    fill(25, 240, 31)
    ellipse(450, 600, 600, 300)
    pop();

    push();
    noStroke();
    colorMode(HSL, 100)
    fill(36, 174, 36)
    ellipse(150, 600, 600, 300)
    rect(-150, 600, 600, 150);
    pop();
}

function drawMoon() {
    push();
    noStroke();
    fill(110, 127, 128)
    ellipse(550, 100, 100, 100)
    pop();

    /**
     * Small Crater
     */
    push();
    noStroke();
    fill(54, 69, 79);
    ellipse(565, 120, 25, 25);
    pop();

    /**
     * Bigger Crater
     */
    push();
    noStroke();
    fill(54, 69, 79);
    ellipse(535, 90, 40, 40)
    pop();
}

function drawKirby() {
    /**
    * Kirby's left arm
    */
    push();
    noStroke();
    fill(249, 136, 190);
    ellipse(140, 480, 120, 200)
    pop();

    /**
    * Kirby's right arm
    */
    push();
    noStroke();
    fill(249, 136, 190);
    ellipse(500, 480, 120, 200)
    pop();

    /**
     * His left leg
     */
    push();
    noStroke();
    fill(236, 85, 104);
    ellipse(240, 590, 150, 250)
    pop();

    /**
    * His right leg
    */
    push();
    noStroke();
    fill(236, 85, 104);
    ellipse(420, 590, 150, 250)
    pop();

    /**
     * His Base Body
     */
    push();
    noStroke();
    fill(251, 181, 207);
    ellipse(320, 420, 400, 400)
    pop();

    /**
     * The black parts of his eyes
     */
    push();
    noStroke();
    fill(0, 0, 0);
    ellipse(265, 370, 60, 150)
    pop();

    /**
     * The black part of his eyes right side
     */
    push();
    noStroke();
    fill(0, 0, 0);
    ellipse(375, 370, 60, 150)
    pop();

    /**
     * the White part of his eyes
     */
    push();
    noStroke();
    fill(255, 255, 255);
    ellipse(265, 340, 40, 80)
    pop();

    /**
     * the white part of his eyes right side
     */
    push();
    noStroke();
    fill(255, 255, 255);
    ellipse(375, 340, 40, 80)
    pop();

    /**
     * Kirby's cheeks
     */

    push();
    noStroke();
    fill(249, 136, 190)
    ellipse(215, 480, 80, 60)
    pop();

    /**
     * Right cheek
     */
    push();
    noStroke();
    fill(249, 136, 190)
    ellipse(430, 480, 80, 60)
    pop();
}

function drawKirbyMouth() {

    /**
     * Kirby's tongue
     */
    push();
    stroke(0);
    fill(140, 0, 55);
    rect(300, 480, 50, 40)
    pop();

    /**
     * Kirby's mouth
     */
    push();
    stroke(0);
    fill(225, 0, 92);
    ellipse(325, 520, 50, 50);
    pop();


}


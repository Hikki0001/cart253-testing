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

    drawStars();
    drawGrass();
    drawMoon();
    drawMont();
    drawHouse();
    drawAlien();
}


function drawAlien() {

    drawAlienUfotop();
    drawAliencraft();

    function drawAliencraft() {
        push();
        stroke(0);
        fill(128, 128, 128)
        ellipse(200, 100, 80, 20)
        pop();
    }

    function drawAlienUfotop() {
        push();
        stroke(0);
        fill(234, 240, 240);
        ellipse(200, 90, 40, 40)
        pop();
    }


}


function drawHouse() {
    drawHouseBody();
    drawHouseRoof();
    drawHouseDoor();

    function drawHouseBody() {
        push();
        stroke(0);
        fill(250, 0, 20);
        rect(400, 480, 40, 40);
        pop();
    }

    function drawHouseRoof() {
        push();
        stroke(0);
        fill(250, 0, 0);
        triangle(390, 480, 450, 480, 420, 440);
        pop();
    }

    function drawHouseDoor() {
        push();
        stroke(0);
        fill(0, 0, 0)
        rect(415, 500, 10, 20);
        pop();
    }


}

function drawStars() {
    push();
    fill(255);
    noStroke();
    ellipse(100, 100, 5, 5);
    ellipse(200, 150, 3, 3);
    ellipse(67, 67, 5, 5);
    ellipse(50, 200, 3, 3);
    ellipse(333, 147, 5, 5);
    ellipse(321, 86, 3, 3);
    ellipse(350, 80, 6, 6);
    ellipse(450, 150, 4, 4);
    ellipse(550, 120, 7, 7);
    ellipse(150, 232, 4, 3);
    ellipse(250, 80, 3, 3);
    pop();

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
    stroke(0);
    fill(160, 180, 190);
    triangle(100, 400, 500, 400, 300, 100);
    pop();

    /**
     * Third Mont
     */
    push();
    translate(-50, 100)
    stroke(0);
    fill(170, 180, 190);
    triangle(100, 400, 500, 400, 300, 100);
    pop();

    /**
     * Second Mont
     */
    push();
    translate(0, 100)
    stroke(0);
    fill(180, 194, 190);
    triangle(100, 400, 500, 400, 300, 100);
    pop();

    /**
     * First smallest Mont
     */
    push();
    translate(0, 100)
    stroke(0);
    fill(200, 194, 190);
    triangle(300, 400, 500, 400, 400, 200);
    pop();

}


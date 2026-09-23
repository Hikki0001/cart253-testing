/**
 * Heavenly Stairs
 * Matteo Edmonds-Tiano
 * 
 * I genuinely have no idea what the heck I made 
 * I just saw something in my head and wanted to try to make it. 
 * Just It's idk kind of creepy...

"use strict";

/**
 * creating the Canvas
*/
function setup() {
    createCanvas(640, 640)

}


/**
 * The background and functions
*/
function draw() {
    background(255, 0, 0)

    drawStairs();
    drawDoor();
    drawEye();
    drawClouds();

}

function drawClouds() {
    /**
     * Top cloud 1 to the left
     */
    push();
    noStroke();
    fill(255, 255, 255);
    ellipse(100, 0, 300, 100)
    pop();

    /**
    * Top cloud in the middle
    */
    push();
    noStroke();
    fill(255, 255, 255);
    ellipse(300, 0, 300, 100)
    pop();

    /**
    * Top cloud to the left
    */
    push();
    noStroke();
    fill(255, 255, 255);
    ellipse(500, 0, 300, 100)
    pop();

    /**
     * Clouds on the sides
     */
    push();
    noStroke();
    fill(255, 255, 255);
    ellipse(0, 100, 100, 600)
    pop();

    /**
    * Clouds on the sides
    */
    push();
    noStroke();
    fill(255, 255, 255);
    ellipse(640, 100, 100, 600)
    pop();

}

function drawEye() {
    /** 
     * White part of the eye
     */
    push();
    stroke(0);
    fill(255, 255, 255)
    ellipse(500, 100, 110, 90)
    pop();


    /**
     * Black part of the Eye
     */
    push();
    stroke(0);
    fill(0, 0, 0)
    ellipse(500, 100, 80, 70)
    pop();

    /**
     * Red part of the Eye
     */
    push();
    stroke(0);
    fill(255, 0, 0)
    ellipse(490, 100, 40, 45)
    pop();

    /**
     * Inside of the eye black part
     */
    push();
    stroke(0);
    fill(0, 0, 0)
    ellipse(490, 100, 20, 30)
    pop();
}

function drawDoor() {
    /**
     * The white door
     */
    push();
    noStroke();
    fill(255, 255, 255);
    rect(200, 100, 50, 100);
    pop();
}

function drawStairs() {
    /**
     * All the abstract stairs going down in descending order
     */
    push();
    noStroke();
    fill(0);
    rect(200, 200, 100, 50);
    pop();

    push();
    noStroke();
    fill(0);
    rect(200, 210, 200, 50);
    pop();

    push();
    noStroke();
    fill(0);
    rect(100, 240, 300, 50);
    pop();

    push();
    noStroke();
    fill(0);
    rect(220, 280, 300, 50);
    pop();

    push();
    noStroke();
    fill(0);
    rect(150, 310, 300, 50);
    pop();

    push();
    noStroke();
    fill(0);
    rect(80, 350, 160, 50);
    pop();

    push();
    noStroke();
    fill(0);
    rect(200, 380, 200, 50);
    pop();

    push();
    noStroke();
    fill(0);
    rect(200, 380, 200, 50);
    pop();

    push();
    noStroke();
    fill(0);
    rect(300, 410, 300, 50);
    pop();

    push();
    noStroke();
    fill(0);
    rect(120, 440, 250, 50);
    pop();

    push();
    noStroke();
    fill(0);
    rect(40, 465, 300, 50);
    pop();

    push();
    noStroke();
    fill(0);
    rect(200, 490, 400, 50);
    pop();

    push();
    noStroke();
    fill(0);
    rect(400, 520, 500, 50);
    pop();

    push();
    noStroke();
    fill(0);
    rect(200, 560, 400, 50);
    pop();

    push();
    noStroke();
    fill(0);
    rect(100, 590, 600, 50);
    pop();
}
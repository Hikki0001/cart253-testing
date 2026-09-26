/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let bgImg;
let cover;
let eraser = {
    size: 70,
    weight: 1.5,
    fill: {
        r: 255,
        g: 255,
        b: 255
    }
}

function preload() {
    bgImg = loadImage("assets/happydog.png");
}

/**
 * creating the canvas
*/
function setup() {
    let w = 640, h = 480
    createCanvas(w, h);

    cover = createGraphics(w, h);
    cover.background(eraser.fill.r, eraser.fill.g, eraser.fill.b);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(20);

    /**
     * draws the image of the dog
     */
    Image(bgImg, 0, 0)

    mouseCursor();

}

function mouseCursor() {
    push();
    noFill();
    strokeWeight(eraser.weight);
    stroke(255);
    ellipse(mouseX, mouseY, eraser.size);
    pop();
}
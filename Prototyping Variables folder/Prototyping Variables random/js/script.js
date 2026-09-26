/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let bgImg;
let cover = {
    erase: 0,
    noErase: 0,
}
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

    image(cover, 0, 0);

    eraseCover();
    mouseCursor();

}

function eraseCover() {
    push();
    noStroke();
    cover.erase();
    cover.ellipse(mouseX, mouseY, eraser.size)
    cover.noErase();
    pop();


}

function mouseCursor() {
    push();
    noFill();
    strokeWeight(eraser.weight);
    stroke(255);
    ellipse(mouseX, mouseY, eraser.size);
    pop();
}
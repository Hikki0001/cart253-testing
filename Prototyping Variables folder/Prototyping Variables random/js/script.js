/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let bgImg;
let eraser = {
    size: 70,
    fill: {
        r: 255,
        g: 255,
        b: 255
    }
}

function preload() {
    bgImg = loadImage(assets / images / happydog.png);
}

/**
 * creating the canvas
*/
function setup() {
    let w = 640, h = 480
    createCanvas(w, h);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(20);

    mouseCursor();

}

function mouseCursor() {
    noFill();
    ellipse(mouseX, mouseY, eraser.size);
}
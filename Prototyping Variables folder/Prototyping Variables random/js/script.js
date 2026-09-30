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

async function setup() {
    let w = 640, h = 480
    createCanvas(w, h);

    bgImg = await loadImage("assets/images/happydog.png");


    cover = createGraphics(w, h);
    cover.background(eraser.fill.r, eraser.fill.g, eraser.fill.b);

}



function draw() {
    background(20);


    if (bgImg) {
        image(bgImg, 0, 0, width, height);
    }

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
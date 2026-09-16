/**
 * The greatest record of all time
 * Matteo Edmonds-Tiano
 * 
 * Displays the greatest record of all time
 */

"use strict";

/** 
 *  Creates a square canvas
*/

function setup() {
    createCanvas(640,640);

}


/**
 * Displays the Record
*/
function draw() {
    background(150);
    

    // The main part of the record
    push();
    // Adds colour (Always add Colours first)
    fill(255, 0, 0);
    // Adds outline colour
    stroke(255);
    // Drawing a circle
    ellipse(320, 320, 480);
    // Push and pops make it so the code for a specific object is isolated only for that object.
    pop();

    // The label on the record
    push();
    fill("white");
    noStroke();
    ellipse(320, 320, 140);
    pop();


    // The hole of the record
    push();
    fill("#000000");
    noStroke();
    ellipse(320, 320, 20)
    pop();

}
/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let bgColor = {
    r: 255,
    g: 240,
    b: 255
};

let floor = {
    fill: {
        r: 255,
        g: 220,
        b: 230
    },
    x: 0,
    y: 300,
    w: 600,
    h: 100
}

let usagiImg, hachiImg
let t = 0;
let phase = 0;
let burst = 0;

let canvash = 600;
let canvasw = 400;






/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {
    createCanvas(canvash, canvasw)
    imageMode(CENTER);

    usagiImg = await loadImage("assets/images/Usagi.png");
    hachiImg = await loadImage("assets/images/Hachiware.png");

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(bgColor.r, bgColor.g, bgColor.b)

    ground();
}

function ground() {
    push();
    noStroke();
    fill(floor.fill.r, floor.fill.g, floor.fill.b);
    rect(floor.x, floor.y, floor.w, floor.h)
    pop();

}
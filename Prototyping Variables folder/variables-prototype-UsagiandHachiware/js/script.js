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

let ground = {
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
    t += 1;

    background(bgColor.r, bgColor.g, bgColor.b)

    drawGround();
    drawUsagi();
    drawHachiware();
}

function drawGround() {
    push();
    noStroke();
    fill(ground.fill.r, ground.fill.g, ground.fill.b);
    rect(ground.x, ground.y, ground.w, ground.h)
    pop();
}
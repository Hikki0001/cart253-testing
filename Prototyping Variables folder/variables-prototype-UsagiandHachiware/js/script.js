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

let usagi = {
    x: 180,
    y: 280,
    size: 120,
    hop: {
        hopHeight: 60, //the normal jump
        burstHop: 100, //extra hop thats bigger
        burstGrow: 30 //exra growth for the burst
    },
    ability: {
        normal: 1, //normal scale of him when he isnt squashed
        shake: 2, //shaking  at full speed
        squash: 0.25, //the squashing for the landing
        speed: 0.12, //normal speed
        burstSpeed: 0.3, //extra speed when bursting
        chance: 0.01, // the chance to go crazier each frame
        fade: 0.97 // how fast it fades back to normal
    },
    state: {
        phase: 0,
        burst: 0,
        spike: 0,
        bounce: 0,
    }
};


let usagiImg, hachiImg
let t = 0;

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

function drawUsagi() {
    usagi.state.spike = floor(random() + usagi.ability.chance);
    usagi.state.burst = max(usagi.state.burst * usagi.ability.fade, usagi.state.spike);

    usagi.state.phase += usagi.ability.speed + usagi.state.burst * usagi.ability.burstSpeed;
    usagi.state.bounce = abs(sin(usagi.state.phase));

    push();
    translate(
        usagi.x + random(-usagi.ability.shake, usagi.ability.shake) * usagi.state.burst,
        usagi.y, - usagi.state.bounce * (usagi.hopHeight + usagi.state.burst * usagi.hop.burstHop)
    );
    scale(


    );



    pop();
}
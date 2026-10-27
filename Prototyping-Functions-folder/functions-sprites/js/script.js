/**
 * Beautiful sprites idk
 * Matteo Edmonds-Tiano
 * 
 * I had an idea that I thought would be a bit funny so this prototype
 * is gonna show some similar sprites maybe u could argue not but eh they reacting 
 * to typing their names and they pretty similar
 */

"use strict";

/**
 * canvas size
 */
let canvasSize = {
    w: 800,
    h: 500,
};

let bg = {
    color: {
        r: 46,
        g: 38,
        b: 52
    }
};

/**
 * where the sprites sit and how big they're drawn
 */
let layout = {
    spriteY: 330,
    spriteSize: 200,
    labelY: 440
};

/**
 * how they all react when their names are typed
 */
let reaction = {
    duration: 1400,
    /**
     * for how hight the bounce goes up (in pixels)
     */
    bounceHeight: 50,
    bounces: 3,
    text: "WAAAAAAA!"
};

/**
 * for seeing the letters typed so far
 */
let typing = {
    current: "",
    maxLenght: 12,
};

/**
 * the single sprite data for the 3 of them
 */
function makeSprite(name, x) {
    return {
        name: name,
        /**
         * where it sits across the screen
         */
        x: x,
        image: undefined,
        /**
         * starts far in the past so when the prototype starts all the sprites arent reacting
         */
        reactedAt: -99999
    }
}

let takuji = makeSprite("Takuji", 200);
let kohaku = makeSprite("Kohaku", 400);
let rabbid = makeSprite("Rabbid", 600);


/**
 * Loading all the images and has createcanvas
*/
async function setup() {
    createCanvas(canvasSize.w, canvasSize.h);
    imageMode(CENTER);
    textAlign(CENTER, CENTER);

    takuji.image = await loadImage("assets/images/Takuji.png");
    kohaku.image = await loadImage("assets/images/Kohaku.png");
    rabbid.image = await loadImage("assets/images/Rabbid.png");
};


/**
 * draws all the functions and everything shown on screen
*/
function draw() {
    background(bg.color.r, bg.color.g, bg.color.b);

    drawSprite(takuji);
    drawSprite(kohaku);
    drawSprite(rabbid);

    drawTyping();
};

/**
 * draws the sprites 
 * the bounce only happens when a sprite is reacting and should have a small fade out
 */
function drawSprite(sprite) {

    let bounce = 0;



    image(sprite.image, sprite.x, layout.spriteY - bounce, layout.spriteSize, layout.spriteSize);


    push();
    noStroke();
    pop();
}
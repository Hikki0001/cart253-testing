/**
 * Mr. Furious
 * Matteo Edmonds-Tiano and John Hanna
 *
 * Mr Furious gets pretty mad and well a bird appears and ragebaits!
 */

"use strict";

/**
 * The angry values for the movement of Mr furious
 */
let angryX = 200;
let angryY = 200;

let bird = {
    // Position and size/ movement for the x and y
    x: 10,
    y: 25,
    size: 50,
    mX: 0.8,
    mY: 0.1,
    /**
     * color for the bird
     */
    fill: {
        r: 255,
        g: 255,
        b: 0
    }
}

// Our friend Mr. Furious
let mrFurious = {
    // Position and size
    x: 200,
    y: 200,
    size: 100,
    rage: 0,
    limit: 15,
    min: 0,
    // Colour
    fill: {
        r: 255,
        g: 225,
        b: 225
    }
};

let sky = {
    // Position and size
    x: 400,
    y: 400,
    size: 400,
    /**
     * colour
     */
    fill: {
        r: 160,
        g: 180,
        b: 200
    }

}

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);

}

/**
 * Draw's the scene
 */
function draw() {
    background(sky.fill.r, sky.fill.g, sky.fill.b);

    /**
     * It changes the sky from day to night
     */
    sky.fill.r -= 0.5
    sky.fill.g -= 0.5
    sky.fill.b -= 0.5

    /**
     * draws the functions
     */
    drawmrFurious();
    drawbird();

}

function drawbird() {
    /**
     * draws the bird
     */
    push();
    noStroke();
    fill(bird.fill.r, bird.fill.g, bird.fill.b);
    // ellipse(mouseX, mouseY, bird.size);
    ellipse(bird.x, bird.y, bird.size);

    /**
     * moves the bird
     */
    bird.x = bird.x + bird.mX;
    bird.y = bird.y + bird.mY;
    pop();
}


function drawsky() {
    /**
     * draws the sky
     */
    push();
    noStroke();
    fill(sky.fill.r, sky.fill.g, sky.fill.b);
    rect(sky.x, sky.y, sky.size);
    pop();
}

function drawmrFurious() {

    /**
     * makes get angrier up to a point
     */
    mrFurious.rage += 0.1;
    /**
     * limits his power
     */
    mrFurious.rage = constrain(mrFurious.rage, mrFurious.min, mrFurious.limit);
    angryX = mrFurious.x + random(-mrFurious.rage, mrFurious.rage);
    angryY = mrFurious.y + random(-mrFurious.rage, mrFurious.rage);

    /**
     * draws mrFurious 
     */
    push();
    noStroke();
    fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
    ellipse(angryX, angryY, mrFurious.size);

    /**
     * MAKES HIM ANGRYYYYY!!
     */
    mrFurious.fill.g -= 0.5
    mrFurious.fill.b -= 0.5
    pop();
}
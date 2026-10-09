/**
 * Chase the Takumi
 * Matteo Edmonds-Tiano
 * 
 * Chase the Takumi with the cursor and click him!
 */

"use strict";
/**
 * canvas size
 */
let canvasSize = {
    w: 800,
    h: 500
};

/**
 * background color
 */
let background = "Rebeccapurple";

/**
 * takumi
 */
let takumi = {
    x: 400,
    y: 250,
    size: 40, 
    image: undefined,
    /**
     * for states to know what state your at like when u win and click him
     */
    tints: {
        normal: undefined,
        cornered: [224, 108, 117],
        caught: [184, 242, 201]
    }
    /**
     * reminder for self:  3 states
     */
    state: "free"
}

/**
 * controls how takumi behaves 
 */
let rules = {
    /**
     * how near the mouse has to be before takumi will react
     */
    fleeDistance: 150, 
    /**
     * speed of running away
     */
    fleeSpeed: 0.08,
    /**
     * closeness to an edge to cound as cornering takumi
     */
    cornerMargin: 30,
    /**
     * for catching him 
     */
    catchRadius: 20,
    /**
     * how close to the edge of the canvas he can go
     */
    wallPadding: 10
};

let messages = {
    default: "AHHH DONT CATCH ME!"
    fleeing: "Youre more of a chud than me!"
    cornered: "No I DONT WANNA GO OUTSIDE!!"
    caught: "You caught me..."
};

/**
 * dialogues value and where its placed
 */
let dialogue = {
    current: messages.default,
    x: canvasSize.w / 2
    y: canvasSize.h - 40,
    size: 16,
    fill: 255
};

/**
 * sets up the canvas and loads takumi's picture
*/
async function setup() {
    createCanvas(canvasSize.w, canvasSize.h);
    imageMode(CENTER);
    textAlign(CENTER);

    takumi.image = await loadImage("assets/images/takumi.jpg");

}


/**
 * draws all the functions
*/
function draw() {
    updateStates();

    background(background);    
    drawDot();
    drawText();
}
/**
 * Scary Bunny
 * Matteo Edmonds-Tiano
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * Canvas size
 */
let canvasSize = {
    w: 800,
    h: 600
}

/**
 * shaking of screen when jumpscared
 */
let shakeAmount = 10;

/**
 * darkness of screen when mouse isn't interacting
 */
let maxDarkness = 180;
/**
 * max and min of volume
 * min is like for darkness when mouse isn't interacting
 */
let minVolume = 0.3;
let maxVolume = 0.8;




/**
 * so that it knows theres multiple rooms
 */
let rooms = {
    images: [],
    count: 4,
    current: 0,
    enteredAt: 0
};
/**
 * the ambience is gonna be the music in the background
 * the scream is jumpscare noise 
 * and the scare is jumpscare png
 */
let ambience, scream, scare;
/**
 * tells which room where currently at
 */

/**
 * knows if we started the game or not so false because we dont want it to 
 * automatically start
 */
let started = false;
/**
 * same with started just want it to only play at a certain point
 */
let jumpscare = false;
/**
 * for millis
 */


/**
 * for preloading all the pngs/mp3s
*/
function preload() {
    room[0] = loadImage('assets/images/room1.png');
    room[1] = loadImage('assets/images/room2.png');
    room[2] = loadImage('assets/images/room3.png');
    room[3] = loadImage('assets/images/room4.png');
    scare = loadImage('assets/images/scare.png');
    ambience = loadSound('assets/sounds/ambience.mp3');
    /**
     * im calling it scream to better remember but I want it to be a vine boom!
     */
    scream = loadSound('assets/sounds/scream.mp3');
}

/**
 * sets up the canvas, text alignment, and event listener
 */
function setup() {
    createCanvas(canvas_w, canvas_h);
    textAlign(CENTER, CENTER)
    /**
     * adding this so that the browser will reaction when the player isnt 
     * interacting with the screen
     */
    document.addEventListener('visibilitychange', onVisibility);
}


/**
 * Draws all the functions
*/
function draw() {
    background(0);

    /**
     * if the started hasnt happened stays at titlescreen
     */
    if (!started) {
        drawTitleScreen();
        return;
    }

    /**
     * if you meet the conditions for the jumpscare i.e reaching the final room
     * you get jumpscared
     */
    if (jumpscare) {
        drawJumpscare();
        return;
    }

    drawRoom();
    applyMouseDarkness();
    applyRoomTimer();
}

/**
 * title screen with basic text thats placed in the middle of the screen
 */
function drawTitleScreen() {
    fill(255);
    text('Click To Play', width / 2, height / 2);
}

/**
 * drawing the jumscare with random shaking on the screen
 */
function drawJumpscare() {
    image(scare, random(-shakeAmount, shakeAmount), random(-shakeAmount, shakeAmount));
}

/**
 * draws the different rooms
 */
function drawRoom() {
    image(rooms[currentRoom], 0, 0, width, height);
}

/**
 * mouse position affects the darkness of the screen
 */
function applyMouseDarkness() {
    /**
     * how far from the center counts as fully dark
     */
    let maxDist = width / 2;

    let d = dist(mouseX, mouseY, width / 2, height / 2);

    noStroke();
    /**
     * trying map to have the mouse react in a range
     */
    fill(0, map(d, 0, maxDist, 0, maxDarkness, true));
    rect
}
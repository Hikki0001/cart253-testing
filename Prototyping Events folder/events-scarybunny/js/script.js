/**
 * Scary Bunny
 * Matteo Edmonds-Tiano
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * so that it knows theres multiple rooms
 */
let rooms = [];
/**
 * the ambience is gonna be the music in the background
 * the scream is jumpscare noise 
 * and the scare is jumpscare png
 */
let ambience, scream, scare;
/**
 * tells which room where currently at
 */
let currentRoom = 0;
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
let roomEnteredAt = 0



/**
 * for preloading all the pngs/mp3s
*/
function preload(){
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
    createCanvas(800, 600);
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
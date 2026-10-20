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
 * both states for title and jumpscare
 */
let game = {
    started: false,
    scared: false
};
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
 * for jumpscare and shaking
 */
let scare = {
    image: undefined,
    shake: 10
};

/**
 * sound effetcs
 */
let sounds = {
    ambience: undefined,
    scream: undefined
};

/**
 * darken the screen depending on mouse positon
 */
let darkness = {
    /**
     * for when mouse is far from center
     */
    maxAlpha: 180,
    /**
     * distance that counts as fully dark
     */
    maxDist: canvasSize.w / 2,
    /**
     * for volume control for when mouse position
     */
    minVolume: 0.3,
    maxVolume: 0.7
};

/**
 * time based things all in millis
 */
let timers = {
    /**
     * will flicker after this time has passed
     */
    flickerAfter: 5000,
    /**
     * frames between the flickers
     */
    flickerCycle: 25,
    /**
     * how long the flickers last
     */
    flickerLength: 3,
    /**
     * if u stay in the last room for this time the jumpscare should play
     */
    finalRoomTimeout: 8000
};

/**
 * values that get recalculated every frame
 */
let live = {
    mouseDist: 0,
    timeInRoom: 0,
    inFinalRoom: false
};

/**
 * forgot i couldnt preload lol
 * for preloading all the pngs/mp3s and 
 * sets up the canvas, text alignment, and event listener
 */
async function setup() {
    createCanvas(canvas_w, canvas_h);
    textAlign(CENTER, CENTER)
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
    if (!game.started) {
        drawTitleScreen();
        return;
    }

    /**
     * if you meet the conditions for the jumpscare i.e reaching the final room
     * you get jumpscared
     */
    if (game.scared) {
        drawJumpscare();
        return;
    }
    updateLive();
    drawRoom();
    applyMouseDarkness();
    applyRoomTimer();
}

/**
 * for refreshing the values that change every frame
 */
function updateLive() {
    live.mouseDist = dist(mouseX, mouseY, width / 2, height / 2);
    live.timeInRoom = millis() - rooms.enteredAt;
    live.inFinalRoom = rooms.current === rooms.count - 1;
}



/**
 * title screen with basic text thats placed in the middle of the screen
 */
function drawTitleScreen() {
    push();
    fill(255);
    text('Click To Play', width / 2, height / 2);
    pop();
}

/**
 * drawing the jumscare with random shaking on the screen
 */
function drawJumpscare() {
    push();
    image(scare.image, random(-scare.shake, scare.shake), random(-scare.shake, scare.shake));
    pop();
}

/**
 * draws the different rooms
 */
function drawRoom() {
    image(rooms[currentRoom], 0, 0, width, height);
}


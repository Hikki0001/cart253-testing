/**
 * Makoto Sleeping
 * Matteo Edmonds-Tiano
 * 
 * Imagine having makoto yuki as a pet well no longer do you have to imagine!
 * he can sleep and well... sleep!
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
 * the background room image
 */
let room = {
    image: undefined,
    x: 400,
    y: 250
};

/**
 * will hold all of makoto's states and where he's drawn
 */
let makoto = {
    x: 353,
    y: 250,
    w: 150,
    h: 200,
    images: {
        awake: undefined,
        sleeping: undefined,
        angry: undefined,
    },
    /**
     * reminder for myself so it can be recalculated every frame
     */
    state: "awake"
}

/**
 * for controlling his states 
 * like how many second itll take to go back to awake state
 */
let rules = {
    /**
     * for controlling how many ms needs to pass before 
     * he will go to his to sleep status
     */
    sleepAfter: 6000,
    /**
     * to keep track of recent clicks so that it has a fair balance
     */
    pokeWindow: 3000,
    pokesToAnger: 4,
    angryDuration: 2000,
    annoyedAfter: 10
};

/**
 * so I can track how many clicks have been registered 
 */
let tracker = {
    lastActive: 0,
    angryUntil: 0,
    pokes: 0,
    /**
     * just found out you can use this sign for recent activity 
     * but this will let me get a timestamp of clicks
     */
    pokeTimes: []
};

/**
 * all of the dialogue he can say
 */
let messages = {
    default: "...",
    poked: "What?",
    sleeping: "zzzzzz.",
    wokenUp: "Burgersssss...",
    annoyed: "Are you bored...",
    angry: "STOP THAT!"
}

/**
 * the dialogues values and where its placed
 */
let dialogue = {
    current: messages.default,
    x: 350,
    y: 100,
    size: 40,
    fill: 255
};

/**
 * for the mouse state control
 */
let mouse = {
    now: 0,
    idle: 0
}

/**
 * Sets up the drawing for the images and text
*/
async function setup() {
    createCanvas(canvasSize.w, canvasSize.h);
    imageMode(CENTER);
    textAlign(CENTER);

    room.image = await loadImage("assets/images/p3room.png");
    makoto.images.awake = await loadImage("assets/images/makotoawake.png");
    makoto.images.sleeping = await loadImage("assets/images/makotosleep.png");
    makoto.images.angry = await loadImage("assets/images/makotomad.png");


    tracker.lastActive = millis();
}


/**
 * Draws all of the functions
*/
function draw() {
    updateState();

    drawRoom();
    drawMakoto();
    drawText();


}

/**
 * for deciding the states
 */
function updateState() {
    let idle = millis() - tracker.lastActive;

    if (millis() < tracker.angryUntil) {
        makoto.state = "angry";
    }
    else if (idle > rules.sleepAfter) {
        makoto.state = "sleeping";
        dialogue.current = messages.sleeping;
    }
    else {
        makoto.state = "awake";
    }
}

/**
 * draws the bgroom
 */
function drawRoom() {
    push();
    image(room.image, room.x, room.y, canvasSize.w, canvasSize.h);
    pop();
}

/**
 * draws makoto and his states
 */
function drawMakoto() {
    push();
    image(makoto.images[makoto.state], makoto.x, makoto.y, makoto.w, makoto.h);
    pop();
}

/**
 * draws whats makoto's saying i.e dialogue box sort of
 */
function drawText() {
    push();
    noStroke();
    fill(dialogue.fill);
    textSize(dialogue.size);
    text(dialogue.current, dialogue.x, dialogue.y);
    pop();
}


/**
 * Makes it so depending on the clicks he changes what state he is
 */
function mousePressed() {
    mouse.now = millis();
    mouse.idle = mouse.now - tracker.lastActive;
    tracker.pokes += 1;

    /**
     * will make it so that only recent clicks are kept
     */
    tracker.pokeTimes.push(mouse.now);
    tracker.pokeTimes = tracker.pokeTimes.filter(function (time) {
        return mouse.now - time < rules.pokeWindow;
    });
    /**
     * for angry state
     */
    if (tracker.pokeTimes.length >= rules.pokesToAnger) {
        tracker.angryUntil = mouse.now + rules.angryDuration;
        dialogue.current = messages.angry;
    }
    /**
     * for wokenup state
     */
    else if (mouse.idle > rules.sleepAfter) {
        dialogue.current = messages.wokenUp;
    }
    /**
     * for annoyed state
     */
    else if (tracker.pokes > rules.annoyedAfter) {
        dialogue.current = messages.annoyed
    }
    /**
     * for just being poked reaction
     */
    else {
        dialogue.current = messages.poked
    }

    /**
     * tracks the last active clicks
     */
    tracker.lastActive = mouse.now
}

/**
 * for clicking and default state
 */
function keyPressed() {
    tracker.lastActive = millis();
    dialogue.current = messages.default;
}
/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let canvasSize = {
    w: 800,
    h: 500
};

let room = {
    image: undefined,
    x: 400,
    y: 250
};

/**
 * will hold all of makoto's states and where he's drawn
 */
let makoto = {
    x: 200,
    y: 270,
    w: 300,
    h: 380,
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

let dialogue = {
    current: message.default,
    x: 200,
    y: 40,
    size: 20,
    fill: 255
};

let messages = {
    default: "...",
    poked: "What?",
    sleeping: "zzzzzz.",
    wokenUp: "Burgersssss...",
    annoyed: "Are you bored...",
    angry: "STOP THAT!"
}

let mouse = {
    now: millis(),
    idle: now - tracker.lastActive
}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {
    createCanvas(canvasSize.w, canvasSize.h);
    imageMode(CENTER);

    room.image = await loadImage("assets/images/p3room.png");
    makoto.images.awake = await loadImage("assests/images/makotoawake.jpg");
    makoto.images.sleeping = await loadImage("assests/images/makotosleep.jpg");
    makoto.images.angry = await loadImage("assests/images/makotomad.jpg");


    tracker.lastActive = millis();
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
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

function mousePressed() {
    tracker.pokes += 1;

    /**
     * will make it so that only recent clicks are kept
     */
    tracker.pokeTimes.push(mouse.now);
    tracker.pokeTimes = tracker.pokeTimes.filter(function (time) {
        return now - time < rules.pokeWindow;
    });

    if (tracker.pokeTimes.length >= rules.pokesToAnger) {
        tracker.angryUntil = mouse.now + rules.angryDuration;
        dialogue.current = messages.angry;
    }
    else if (mouse.idle > rules.sleepAfter) {
        dialogue.current = messages.wokenUp;
    }
    else if (tracker.pokes > rules.annoyedAfter) {
        dialogue.current = messages.annoyed
    }
    else {
        dialogue.current = messages.poked
    }

    tracker.lastActive = mouse.now
}

function keyPressed() {
    tracker.lastActive = millis();
    dialogue.current = messages.default;
}
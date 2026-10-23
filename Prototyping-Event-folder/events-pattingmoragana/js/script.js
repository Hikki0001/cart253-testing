/**
 * Giving Head pats to Morgana
 * Matteo Edmonds-Tiano
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * canvas size
 */
let canvaSize = {
    w: 800,
    h: 600
};

/**
 * I think story is a better name for the variabe 
 * but this variable is essientailly the photos and their states
 */
let story = {
    state: "waiting",
    startedAt: 0,
    images: {
        cat: undefined,
        boom: undefined,
        prayer: undefined
    }
};

/**
 * for how long each part lasts 
 */
let timers = {
    /**
     * in ms
     */
    patDuration: 1000,
    /**
     * when the praying picture plays after the explosion
     */
    prayAfter: 4000
};

/**
 * secret word and the letters that were last typed
 */
let typing = {
    word: "pat",
    current: ""
};

/**
 * when picture are drawn and the tallest they can be on the display
 */
let layout = {
    x: 400,
    y: 300,
    /**
     * max height
     */
    maxH: 450
};

let text = {
    size: 24,
    fill: 255
}

/**
 * setup function loading canvas and all the images/gifs
*/
async function setup() {
    createCanvas(canvaSize.w, canvaSize.h);
    imageMode(CENTER);
    textAlign(CENTER, CENTER);

    story.images.cat = await loadImage('assets/images/cat.png');
    story.images.boom = await loadImage('assets/images/explosion.gif');
    story.images.prayer = await loadImage('assets/images/capybara.png');
}


/**
 * draws the functions
*/
function draw() {
    background(0);
    updateStory();

    /**
     * the base screen that shows on the boot
     * is the pick of the cat and text saying to pet him
     */
    if (story.state === "waiting") {
        drawCat(0);
        drawText("type in 'pat' to give morgana a head pat!", height - 40);
    }
    /** 
     * for the patting state when succefully typed "pat" in
     */
    else if (story.state === "patting") {
        /**
         * this is for adding a lil bob so it looks like hes getting pet
         */
        drawCat(sin(millis() * 0.03) * 8);
        drawText("*pat pat pat*", height - 40);
    }
    /**
    * for the eplosion state
    */
    else if (story.state === "exploding") {
        drawPicture(story.images.boom);
    }
    /**
     * after explosion state goes into prayer scene 
     */
    else if (story.state === "praying") {
        drawPicture(story.images.prayer);
        drawText("press R to pray for Morgana!", height - 40);
    }
};

/**
 * time passing so the scene changes depending on how long ago "pat"
 * was typed in and the pat scene happened
 */
function updateStory() {
    if (story.state === "waiting" || story.state === "praying") return;

    let elasped = millis() - story.startedAt;

    /**
     * for praying scene
     */
    if (elasped > timers.prayAfter) {
        story.state = "praying";
    }
    /**
     * for the explosion scene 
     */
    else if (elasped > timers.patDuration && story.state === "patting") {
        story.state = "exploding";
        /**
         *  for reseting the explosion so it loops
         */
        story.images.boom.reset();
    }
};

/**
 * for drawing the morgana picture 
 * using offsetY to move up and down from his normal spot 
 * also just trying to use parameters after learning about them in function class today
 */
function drawCat(offsetY) {
    drawPicture(story.images.cat, offsetY);
};

/**
 * draws the pciture with the same porportions it was made in
 * and at the center
 */
function drawPicture(img, offsetY = 0) {
    let scale = layout.maxH / img.height;
    image(img, layout.x, layout.y + offsetY, img.width * scale, img.height * scale);
};

/**
 * for drawing the text on the screen
 * message is for the words to show on the screen
 * y is for how far on the screen its put so around the bottom
 */
function drawText(message, y) {
    push();
    fill(text.fill);
    textSize(text.size);
    text(message, width / 2, y)
    pop();
}
/**
 * Clickable Sumika
 * Matteo Edmonds
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * canvas size
 */
let canvasSize = {
    w: 800,
    h: 600
};

/**
 * all of the colors for
 * background, textfill and outline
 */
let colors = {
    background: {
        r: 200,
        g: 225,
        b: 250,
    },
    textFill: {
        r: 255,
        g: 80,
        b: 80,
    },
    textOutline: 0
};

/**
 * sumikas states and where shes drawn on the screen
 */
let sumika = {
    x: canvasSize.w / 2,
    w: 420,
    /**
     * for cropping her image 
     * I want it to be 0.47 of the image so it crops just to her stomach
     */
    cropAmount: 0.47,
    images: {
        normal: undefined,
        ouch: undefined,
        angry: undefined
    },
    /**
     * for the current image matching her states
     */
    currentImage: undefined,
    state: "normal"
};

/**
 * for cropping her sprite
 */
let crop = {
    /**
     * what I want to keep from her sprite
     */
    sw: undefined,
    sh: undefined,
    /**
     * the height of the sprite on screen 
     */
    dh: undefined,
    /**
     * center Y
     */
    y: undefined
};

/**
 * final image after spam clicking
 */
let ending = {
    image: undefined,
    x: canvasSize.w / 2,
    y: canvasSize.h / 2,
    w: 800,
    h: 469
};

/**
 * for controlling sumiksa state changes
 */
let rules = {
    /**
     * how many hits to make her mad
     */
    hitsToAngery: 3,
    ouchDuration: 400,
    angryDuration: 3000,
    /**
     * spam window to get ending
     */
    spamClicks: 4,
    spamWindow: 1500,
    /**
     * how far a click can count from her sprite i mean u should just click her but still gotta calculate this
     */
    clickZone: 150,
};

/**
 * so i can track how the players interacting or clicking sumika
 */
let tracker = {
    hits: 0,
    ouchUntil: 0,
    anrgyUntil: 0,
    /**
     * a monitor of recent clicks
     */
    clickTimes: [],
    over: false
};

/**
 * the text and where its placed
 */
let messages = {
    outlineWeight: 1,
    ouch: {
        text: "OWEE!",
        x: 200,
        y: 120,
        size: 20
    },
    angry: {
        text: "CLICK 4 TIMES FOR SOMETHING!",
        x: canvasSize.w / 2,
        y: 60,
        size: 20
    }
}



/**
 * For setting up the Canvas and loading images and text
*/
async function setup() {
    createCanvas(canvasSize.w, canvasSize.h);
    imageMode(CENTER);
    textAlign(CENTER);

    sumika.images.normal = await loadImage("assets/images/sumika1.png");
    sumika.images.ouch = await loadImage("assets/images/sumika2.png");
    sumika.images.angry = await loadImage("assets/images/sumika3.png");
    ending.image = await loadImage("assets/images/punch.png");
}


/**
 * draws all the functions 
*/
function draw() {
    /**
     * for the waiting until the last image has loaded
     */
    if (!ending.image) return;

    background(colors.background);

    if (sumika.state === "over") {
        drawEnding();
    }
    else {
        drawSumika();
        drawText();
    }


}
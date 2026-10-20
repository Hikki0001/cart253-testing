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

    updateState();

    background(colors.background);

    if (sumika.state === "over") {
        drawEnding();
    }
    else {
        drawSumika();
        drawText();
    }

}

/**
 * for deciding states of sumika
 */
function updateState() {
    let now = millis();

    if (tracker.over) {
        sumika.state = "over";
    }
    else if (now < tracker.angryUntil) {
        sumika.state = "angry";
    }
    else if (now < tracker.ouchUntil) {
        sumika.state = "ouch";
    }
    else {
        sumika.state = "normal";
    }

    /**
     * for picking the image that matches her state 
     */
    if (sumika.images[sumika.state]) {
        sumika.currentImage = sumika.images[sumika.state];
    }
}

/**
 * draws the top part of her and will cut her off from her stomach
 */
function drawSumika() {
    let img = sumika.currentImage;

    /**
     * works with the crop numbers that are in the variables
     */
    /**
     * full width
     */
    crop.sw = img.width;
    /**
     * keeping 47% of her
     */
    crop.sh = img.height * sumika.cropAmount;
    /**
     * destination height so how tall her sprite is and doesnt make her look stretch as were keeping her
     * aspect ratio
     */
    crop.dh = sumika.w * (crop.sh / crop.sw);
    /**
     * where the cropped peice goes
     */
    crop.y = canvasSize.h - crop.dh / 2;

    push();
    image(img, sumika.x, crop.y, sumika.w, crop.dh, 0, 0, crop.sw, crop.sh);
    pop();
}

/**
 * draws the final image 
 */
function drawEnding() {
    push();
    image(ending.image, ending.x, ending.y, ending.w, ending.h);
    pop();
}

/**
 * draws the text depending on sumikas states
 */
function drawText() {
    let message;

    if (sumika.state === "ouch") {
        message = messages.ouch;
    }
    else if (sumika.state === "angry") {
        message = messages.angry;
    }
    else {
        return;
    }

    push();
    stroke(colors.textOutline);
    strokeWeight(messages.outlineWeight);
    fill(colors.textFill);
    textSize(message.size);
    text(message.text, message.x, message.y);
    pop();
}
/**
 * depending on the clicks sumikas state will change
 */
function mousePressed() {
    if (tracker.over) return;

    /**
     * only counmds clicks on sumika
     */
    if (abs(mouseX - sumika.x) > rules.clickZone) return;

    let now = millis();
    /**
     * makes it so hat only the recent clicks count as to not have ghost clicks if u get what i mean lol
     */
    tracker.clickTimes.push(now);
    /**
     * filters the late clicks
     */
    tracker.clickTimes = tracker.clickTimes.filter(function (time) {
        return now - time < rules.spamWindow;
    });

    /**
     * for spamming so u can get the final ending
     */
    if (tracker.clickTimes.length >= rules.spamClicks) {
        tracker.over = true;
        return;
    }

    /**
     * to stop sumika from saying owee when shes mad
     */
    if (now < tracker.anrgyUntil) return;

    /**
     * for hitting sumika
     */
    tracker.hits += 1;
    tracker.ouchUntil = now + rules.ouchDuration;

    /**
     * to make sumika get mad after 4 clicks
     */
    if (tracker.hits >= rules.hitsToAnger) {
        tracker.angryUntil = now + rules.angryDuration;
        tracker.hits = 0;
    }
}


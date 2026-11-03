/**
 * Find Usagi
 * Matteo Edmonds-Tiano
 * 
 * It's like wheres waldo but its finding Usagi!
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
 * background image
 */
let bg = {
    image: undefined
};

/**
 * array holding the 5 characters and I need usagi to be last meaning the other 4 
 * will be from 0 to 3
 */
let images = [];
let usagiIndex = 4;

/**
 * all of them being display on the screen
 */
let crowd = [];

/**
 * how many characters there and where/ how theyre drawn on the screen
 */
let settings = {
    crowd: {
        /**
         * how many characters are there in the 1st round
         */
        start: 60,
        /**
         * then how many are added the next rounds:
         */
        perRound: 10
    },
    size: {
        min: 54,
        max: 84
    },
    /**
     * adding a margin for the characters so they dont go off the edges of the screen
     */
    margin: {
        side: 40,
        top: 70,
        bottom: 30
    },
    /**
     * the clickable area I will make it a circle
     */
    hitRadius: 0.3
};

/**
 * where we are in the current state of the game
 */
let game = {
    round: 1,
    found: false,
    wrongClicks: 0
}

/**
 * banner that will show a picture of usagi so you know who to click and text
 * to show if you found him and a counter for wrong clicks
 */
let banner = {
    h: 48,
    fill: [255, 230],
    textFill: 40,
    textSize: 20,
    textOffset: 20,
    /**
     * for showing what he looks like
     */
    hint: {
        x: 50,
        size: 40
    }
};

/**
 * words that are shown on the banner
 */
let messages = {
    find: "Find Usagi!",
    round: "Round ",
    wrong: "Wrong clicks: ",
    found: "Found Usagi! Click for round "
};

/**
 * loads the background and all images
*/
async function setup() {
    createCanvas(canvasSize.w, canvasSize.h);
    imageMode(CENTER);
    textAlign(CENTER, CENTER);

    bg.image = await loadImage("assets/images/background.jpg");

    images[0] = await loadImage("assets/images/Chiikawa.png")
    images[1] = await loadImage("assets/images/Hachiware.png")
    images[2] = await loadImage("assets/images/Momonga.png")
    images[3] = await loadImage("assets/images/Kuri.png")
    images[4] = await loadImage("assets/images/Usagi.png")

    newRound();
};


/**
 * draws the functions
*/
function draw() {
    drawBackground();

    /**
     * will draw every character in order, and later ones that are added in the new rounds
     * will be drawn on top which will hide usagi and make it harder to find him
     */
    for (let i = 0; i < crowd.length; i++) {
        drawPerson(crowd[i]);
    }

    drawBanner();
}

/**
 * draws the background
 */
function drawBackground() {
    push();
    imageMode(CORNER);
    image(bg.image, 0, 0, width, height);
    pop();
}

/**
 * builds one character so it applies to all
 * and imageIndex will be which pictures to use for the individual characters
 */
function makePerson(imageIndex) {
    return {
        x: random(settings.margin.side, width - settings.margin.side),
        y: random(settings.margin.top, height - settings.margin.bottom),
        size: random(settings.size.min, settings.size.max),
        imageIndex: imageIndex
    };
}

/**
 * begins a new round with a new crowd and will try to hide usagi
 */
function newRound() {
    crowd = [];
    game.found = false;
    game.wrongClicks = 0;

    let count = settings.crowd.start + (game.round - 1) * settings.crowd.perRound;

    /**
     * random(usagiIndex) will give a number from 0 up to just under usagiIndex,
     * and the reason im using floor() is cuz itll round it down so that the crowd
     * is the only decoys on the screen (ahh a lot of writing)
     */
    for (let i = 0; i < count; i++) {
        crowd.push(makePerson(floor(random(usagiIndex))))
    }

    /**
     * picks a random character and then will turn him into usagi
     */
    let hidingSpot = floor(random(crowd.length));
    crowd[hidingSpot].imageIndex = usagiIndex;
}

/**
 * draws the characters
 * using person as it makes it easier to understand what im doing instead of typing
 * bunny or I could use animal but eh.
 */
function drawPerson(person) {
    image(images[person.imageIndex], person.x, person.y, person.size, person.size)
}

/**
 * draws the top banner for the round and the mini picture of usagi
 */
function drawBanner() {
    push();
    noStroke();
    fill(banner.fill);
    rect(0, 0, width, banner.h);

    fill(banner.textFill);
    textSize(banner.textSize);
    /**
     * plays if hes found
     */
    if (game.found) {
        text(messages.found + (game.round + 1), width / 2, banner.h / 2);
    }
    else {
        text(messages.find + "" + messages.round + game.round + "" + messages.wrong + game.wrongClicks, width / 2 +
            banner.textOffset, banner.h / 2
        );
        image(images[usagiIndex], banner.hint.x, banner.h / 2, banner.hint.size, banner.hint.size);
    }
    pop();
}

/**
 * the top character under a point 
 * will count down from the end so that the character drawn on top wins as to not have
 * mixing or weird looking sprites 
 */
function personAt(x, y) {
    for (let i = crowd.length - 1; i >= 0; i--) {
        let person = crowd[i];
        if (dist(x, y, person.x, person.y) < person.size * settings.hitRadius) {
            return person;
        }
    }
    return undefined;
}

/**
 * Adds a mouse click and checks if you found usagi if yes start new round
 * if not count how many times you missed
 */
function mousePressed() {
    if (game.found) {
        game.round++;
        newRound();
        return;
    }

    let hit = personAt(mouseX, mouseY);
    if (hit === undefined) return;

    if (hit.imageIndex === usagiIndex) {
        game.found = true
    }
    else {
        game.wrongClicks++;
    }
}




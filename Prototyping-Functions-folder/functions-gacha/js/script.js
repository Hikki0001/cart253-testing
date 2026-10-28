/**
 * Genshin wish simulator
 * Matteo Edmonds-Tiano
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
    h: 500
}

/**
 * background is colored will change to png soon
 */
let bg = {
    image: undefined
}

/**
 * 2 rarities like in genshin (for characters at least)
 * 5 star is gonna be checked first with its chance
 * and then whatever is left over is a 4 star
 */
let rarities = {
    four: {
        label: "4 star"
    },
    five: {
        label: "5 star",
        chance: 5
    }
};

/**
 * the highest number the rarity roll can be (so the chance above is a percent)
 */
let roll = {
    max: 500
};

/**
 * text shown before you press wish
 */
let hint = {
    text: "Click to wish",
    x: 400,
    y: 250,
    size: 22,
    fill: [255, 160]
};

/**
 * the character from the latest wish, and because you havent wished yet itll show nothing
 */
let result = {
    character: undefined
};

function makeCharacter(name, rarity) {
    return {
        name: name,
        rarity: rarity,
        image: undefined
    };
};

/**
 * all the characters that can be pulled
 */
let bennett = makeCharacter("Bennett", rarities.four);
let heizou = makeCharacter("Heizou", rarities.four);
let kirara = makeCharacter("Kirara", rarities.four);
let ganyu = makeCharacter("Ganyu", rarities.five);
let tartaglia = makeCharacter("Tartaglia", rarities.five);

/**
 * the pool of characters
 */
let pool = [bennett, heizou, kirara, ganyu, tartaglia];

/**
 * loading images and ccreateCanvas
*/
async function setup() {
    createCanvas(canvasSize.w, canvasSize.h);
    textAlign(CENTER, CENTER);

    bg.image = await loadImage("assets/images/background.jpg");
    bennett.image = await loadImage("assets/images/Bennett.png");
    kirara.image = await loadImage("assets/images/Kirara.png");
    heizou.image = await loadImage("assets/images/Heizou.png");
    ganyu.image = await loadImage("assets/images/Ganyu.png");
    tartaglia.image = await loadImage("assets/images/Tartaglia.png");
}

/**
 * draws the functions and the cards being wished or pulled
*/
function draw() {
    background(bg.image);

    /**
     * for wish showing if a character was pulled on the screen if not yet than obviously nothing will show up
     */
    if (result.character === undefined) {
        drawHint();
    }
    else {
        drawCard(result.character)
    }
}
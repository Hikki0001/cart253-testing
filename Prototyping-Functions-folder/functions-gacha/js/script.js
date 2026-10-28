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
 * how the splash card is drawn 
 */
let card = {
    x: 400,
    y: 300,
    /**
     * where its placed
     */
    portrait: {
        y: -20,
        w: 240,
        h: 320
    },
    name: {
        y: 175,
        size: 28,
        fill: 255
    },
    rarityText: {
        y: 210,
        size: 22,
        fill: [255, 180]
    }
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

/**
 * rolls a number and then returns which rarity ikt landed on
 */
function rollRarity() {
    let number = random(roll.max);

    if (number < rarities.five.chance) {
        return rarities.five;
    }
    else {
        return rarities.four;
    }
}

/**
 * returns a random character thawt already has the given rarity
 */
function pickFromRarity(rairty) {
    /**
     * literally took me forever to figure this out btw but I learned about filter()
     */
    let options = pool.filter(function (character) {
        return character.rarity === rairty;
    });
    return random(options)
}

/**
 * returns one random character 
 * essentially its so that the rarity is rolled first then a character of that specific
 * rarity is then chosen making the randomness even in the pool
 */
function pullCharacter() {
    let rarity = rollRarity();
    return pickFromRarity(rarity);
}

/**
 * draws the splash card
 */
function drawCard(character, x, y) {
    push();
    translate(x, y);

    /**
     * the character pngs
     */
    image(character.image, 0, card.portrait.y, card.portrait.w, card.portrait.h);

    /**
     * the splash card name
     */
    noStroke();
    fill(card.name.fill);
    textSize(card.name.size);
    text(character.name, 0, card.name.y);

    /**
     * the rarity written on the splash card 
     * so either 4 or 5 star
     */
    fill(card.rarityText.fill);
    textSize(card.rarityText.size);
    text(character.rarity.label, 0, card.rarityText.y);
}


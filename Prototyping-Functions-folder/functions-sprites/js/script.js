/**
 * Beautiful sprites idk
 * Matteo Edmonds-Tiano
 * 
 * I had an idea that I thought would be a bit funny so this prototype
 * is gonna show some similar sprites maybe u could argue not but eh they reacting 
 * to typing their names and they pretty similar
 */

"use strict";

/**
 * canvas size
 */
let canvasSize = {
    w: 800,
    h: 500,
};

let bg = {
    image: undefined,
    x: 800,
    y: 500
};

/**
 * where the sprites sit and how big they're drawn
 */
let layout = {
    spriteY: 330,
    spriteSize: 180,
    labelY: 440,

    /**
     * for text offset
     */
    px: {
        spritePx: 70,
        layoutPx: 110,
        /**
         * for drifting up
         */
        progressPx: 20
    }
};

/**
 * how they all react when their names are typed
 */
let reaction = {
    duration: 1400,
    /**
     * for how hight the bounce goes up (in pixels)
     */
    bounceHeight: 50,
    bounces: 3,
    text: "WAAAAAAA!"
};

/**
 * for seeing the letters typed so far
 */
let typing = {
    current: "",
    maxLength: 12,
    fill: [255, 120],
    size: 18
};

let spriteName = {
    fill: [255, 150],
    size: 16
}

/**
 * the single sprite data for the 3 of them
 */
function makeSprite(name, x) {
    return {
        name: name,
        /**
         * where it sits across the screen
         */
        x: x,
        image: undefined,
        /**
         * starts far in the past so when the prototype starts all the sprites arent reacting
         */
        reactedAt: -99999
    }
}

let takuji = makeSprite("Takuji", 200);
let kohaku = makeSprite("Kohaku", 400);
let rabbid = makeSprite("Rabbid", 600);


/**
 * Loading all the images and has createcanvas
*/
async function setup() {
    createCanvas(canvasSize.w, canvasSize.h);
    imageMode(CENTER);
    textAlign(CENTER, CENTER);

    takuji.image = await loadImage("assets/images/Takuji.png");
    kohaku.image = await loadImage("assets/images/Kohaku.png");
    rabbid.image = await loadImage("assets/images/Rabbid.png");
    bg.image = await loadImage("assets/images/background.jpg");
};


/**
 * draws all the functions and everything shown on screen
*/
function draw() {
    background(0);
    image(bg.image, width / 2, height / 2, bg.x, bg.y);

    drawSprite(takuji);
    drawSprite(kohaku);
    drawSprite(rabbid);


    drawTyping();
};


/**
 * this is for seeing how far the sprites into the reaction
 * 0 will be if it just started and 1 will be the sprites reaction is finished
 */
function reactionProgress(sprite) {
    return constrain((millis() - sprite.reactedAt) / reaction.duration, 0, 1);
};

/**
 * to confirm that the letters typed end with the sprites specific names
 */
function nameWasTyped(sprite) {
    return typing.current.endsWith(sprite.name.toLowerCase());
};

/**
 * will start the sprites raction.
 */
function reactToName(sprite) {
    sprite.reactedAt = millis();
};



/**
 * draws the sprites 
 * the bounce only happens when a sprite is reacting and should have a small fade out
 */
function drawSprite(sprite) {
    let progress = reactionProgress(sprite);
    let reacting = progress < 1;

    let bounce = 0;
    if (reacting) {
        /**
         * is the vertical offset that bounces then will fade 
         * it should flip the negative half so that the sprites can only bounce up
         */
        bounce = abs(sin(progress * PI * reaction.bounces)) * reaction.bounceHeight * (1 - progress);
    };

    image(sprite.image, sprite.x, layout.spriteY - bounce, layout.spriteSize, layout.spriteSize);


    push();
    noStroke();
    fill(spriteName.fill);
    textSize(spriteName.size);
    /**
     * shows the name to type
     */
    text(sprite.name, sprite.x, layout.labelY);

    if (reacting) {
        /**
         * will fade out when reaction is done
         */
        fill(255, 255 * (1 - progress));
        textSize(spriteName.size);
        text(reaction.text, sprite.x + layout.px.spritePx, layout.spriteY - layout.px.layoutPx - progress * layout.px.progressPx);
    }
    pop();
};

/**
 * shows on the screen the letters typed so far at the bottom
 */
function drawTyping() {
    push();
    noStroke();
    fill(typing.fill);
    textSize(typing.size);
    text("typing: " + typing.current, width / 2, height - 20);
    pop();
};

/**
 * for collecting the letters that the keyboard has last typed and 
 * will ask if the sprites name was typed
 */
function keyPressed() {
    /**
     * backspace so you can remove if you messed up with typing
     */
    if (key === "Backspace") {
        typing.current = typing.current.slice(0, -1);
        return;
    }

    /**
     * for getting rid of shift, enter, etc
     */
    if (key.length !== 1) return;

    typing.current = (typing.current + key.toLowerCase()).slice(-typing.maxLength);

    /**
     * checking the 3 specific sprites
     */
    checkSprite(takuji);
    checkSprite(kohaku);
    checkSprite(rabbid);
};

/**
 * if the name of the sprite was typed itll react and the last typed letter will clear
 */
function checkSprite(sprite) {
    if (nameWasTyped(sprite)) {
        reactToName(sprite);
        typing.current = "";
    }
}



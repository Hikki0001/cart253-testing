/**
 * Duality of Animal
 * Matteo Edmonds-Tiano
 * 
 * This project shows the duality between usagi and hachiware(chiikawa characters). 
 * While usagi is hyper, hachiware is calm and yeah... dont know what else to say.
 */

"use strict";

/**
 * color of the sky/background
 */
let bgColor = {
    r: 210,
    g: 235,
    b: 255
};

/**
 * colors the floor
 */
let ground = {
    fill: {
        r: 195,
        g: 235,
        b: 185
    },
    x: 0,
    y: 300,
    w: 600,
    h: 100
}

/**
 * holds usagi and the variables that make him go crazy
 */
let usagi = {
    x: 180,
    y: 280,
    size: 120,
    offset: { //moves him from his center point
        x: 0,
        y: 0,
    },
    hop: {
        hopHeight: 60, //the normal jump
        burstHop: 100, //extra hop thats bigger
        burstGrow: 30 //exra growth for the burst
    },
    ability: {
        normal: 1, //normal scale of him when he isnt squashed
        peak: 1, // highest value that his bounce/jump can reach
        shake: 2, //shaking  at full speed
        squash: 0.25, //the squashing for the landing
        speed: 0.12, //normal speed
        burstSpeed: 0.3, //extra speed when bursting
        chance: 0.01, // the chance to go crazier each frame
        fade: 0.97 // how fast it fades back to normal
    },
    state: { //recalculated values that change every frame
        phase: 0, //for the bounce
        burst: 0, //how exicted or hyper he is
        spike: 0, // for 1 frame a burst will happen if 0 then nothing or normal state
        bounce: 0, //how high
        squash: 0, // how squash he is my boy
        size: 0 // his size in that specific frame
    }
};

/**
 * hachiware the calm swaying one
 */
let hachi = {
    x: 420,
    y: 270,
    size: 120,
    offset: { // like for usagi moves him from the center point
        x: 0,
        y: 0,
    },
    sway: {
        dist: 40, //distance from left and right
        speed: 0.03, //how fast the sway is
        tilt: 0.15 // how much he tilts
    },
    bob: { //hi bob (not important just couldnt think of another name for the variable...)
        dist: 6, //same as before but for up and down
        speed: 0.06 //how fast the bobbing is... ha bobbing!
    },
    state: {
        sway: 0 //the value of the sway for the frame
    }
}

/**
 * loading images
 */
let usagiImg, hachiImg
/**
 * time counter (t = time or frame)
 */
let t = 0;

/**
 * canvas size
 */
let canvash = 600;
let canvasw = 400;




/**
 * Creates the canvas and loads the images of both usagi and hachiware
*/
async function setup() {
    createCanvas(canvash, canvasw)
    imageMode(CENTER);

    usagiImg = await loadImage("assets/images/Usagi.png");
    hachiImg = await loadImage("assets/images/Hachiware.png");

}


/**
 * Drawing the functions
*/
function draw() {
    /**
     * 1 to every frame
     */
    t += 1;

    background(bgColor.r, bgColor.g, bgColor.b)

    drawGround();
    drawUsagi();
    drawHachiware();
}

/**
 * draws the ground 
 */
function drawGround() {
    push();
    noStroke();
    fill(ground.fill.r, ground.fill.g, ground.fill.b);
    rect(ground.x, ground.y, ground.w, ground.h)
    pop();
}

/**
 * draws usagi and lets him go crazy 
 */
function drawUsagi() {
    /**
     * adds a 1% chance to burst but will fade after its done
     * */
    usagi.state.spike = floor(random() + usagi.ability.chance);
    usagi.state.burst = max(usagi.state.burst * usagi.ability.fade, usagi.state.spike);

    /**
     * burst will speed up his bouncing and abs(sin) is there to turn waves into hops for the state
     */
    usagi.state.phase += usagi.ability.speed + usagi.state.burst * usagi.ability.burstSpeed;
    usagi.state.bounce = abs(sin(usagi.state.phase));

    /**
     * Makes his squash the biggest it can be when his lands aka 0 
     */
    usagi.state.squash = usagi.ability.normal + (usagi.ability.peak - usagi.state.bounce) * usagi.ability.squash;
    usagi.state.size = usagi.size + usagi.state.burst * usagi.hop.burstGrow;

    push();
    /**
     * moves him to his spots so he can shake and hop depending on his burst
     */
    translate(
        usagi.x + random(-usagi.ability.shake, usagi.ability.shake) * usagi.state.burst,
        usagi.y - usagi.state.bounce * (usagi.hop.hopHeight + usagi.state.burst * usagi.hop.burstHop)
    );
    /**
     * makes him wide and short when he lands
     */
    scale(usagi.state.squash, usagi.ability.normal / usagi.state.squash);

    /**
     * simply showing the image and its size/placement
     */
    image(usagiImg, usagi.offset.x, usagi.offset.y, usagi.state.size, usagi.state.size);
    pop();
}


/**
 * draws hachiware and makes him sway as a calm little dude
 */
function drawHachiware() {
    /**
     * cos will allow the wave to be between -1 to 1
     */
    hachi.state.sway = cos(t * hachi.sway.speed);

    push();
    /**
     * sway makes him move either left or right and the sin part is there for bobbing up and down
     */
    translate(
        hachi.x + hachi.state.sway * hachi.sway.dist,
        hachi.y + sin(t * hachi.bob.speed) * hachi.bob.dist
    );
    /**
     * makes movement and tilt match so it looks smooth
     */
    rotate(hachi.state.sway * hachi.sway.tilt);
    /**
     * simply showing the image and its size/placement
     */
    image(hachiImg, hachi.offset.x, hachi.offset.y, hachi.size, hachi.size);
    pop();
}

/**
* makes him go crazy on click
*/
function mousePressed() {
    usagi.state.burst = 1;
}
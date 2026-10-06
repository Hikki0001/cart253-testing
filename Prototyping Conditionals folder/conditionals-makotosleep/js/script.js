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
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {
    createCanvas(canvasSize.w, canvasSize.h);
    imageMode(CENTER);

    room.image = await loadImage("assets/images/p3room.png");

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    drawRoom();

}

function drawRoom() {
    image(room.image, room.x, room.y, canvasSize.w, canvasSize.h);
}
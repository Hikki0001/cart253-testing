/**
 * Instructions Challenge
 * Matteo Edmonds-Tiano
 * 
 * This is well a sky scene... I wanted to draw a pig and an alien in a mountain area.
 * 
 */

"use strict";

/**
 * I created a canvas...
*/
function setup() {
    createCanvas(640, 640);

}


/**
 * I drew a sky scene with a house, a pig, and an alien friend.
*/
function draw() {
    background(19, 24, 98);

    drawStars();
    drawGrass();
    drawMoon();
    drawMount();
    drawHouse();
    drawAlien();
    drawPig();
}

function drawPig() {

    drawPigLegs();
    drawPigBody();
    drawPigHead();
    drawPigFace();


    function drawPigBody() {
        /**
         * HIS BODYYYYY!
         */
        push();
        fill(253, 215, 228)
        ellipse(280, 500, 80, 30);
        pop();
    }

    function drawPigHead() {
        /**
         * The pigs head
         */
        push();
        fill(253, 215, 228)
        ellipse(240, 490, 40, 40);
        pop();
    }

    function drawPigLegs() {
        /**
         * Leg 1
         */
        push();
        fill(253, 215, 228)
        ellipse(260, 520, 10, 20);
        pop();

        /**
         * Leg 2
         */
        push();
        fill(253, 215, 228)
        ellipse(300, 520, 10, 20);
        pop();
    }

    function drawPigFace() {
        /**
         * Eye 1
         */
        push();
        fill(0, 0, 0);
        ellipse(230, 490, 5, 5);
        pop();

        /** 
         * Eye 2
         */
        push();
        fill(0, 0, 0);
        ellipse(243, 490, 5, 5);
        pop();

        /**
         * Pigs Snout
         */
        push();
        fill(253, 215, 228);
        ellipse(236, 500, 10, 10);
        pop();

        /**
         * Pigs nostrils left
         */
        push();
        fill(0, 0, 0);
        ellipse(234, 500, 2, 2);
        pop();
        /**
        * Pigs nostrils right
        */
        push();
        fill(0, 0, 0);
        ellipse(238, 500, 2, 2);
        pop();
    }
}

function drawAlien() {

    drawAlienUfotop();
    drawAliencraft();

    function drawAliencraft() {
        /**
         * The bottom of the space craft
         */
        push();
        stroke(0);
        fill(128, 128, 128)
        ellipse(200, 100, 80, 20)
        pop();
    }

    function drawAlienUfotop() {
        /**
         * Cockpit for the little alien
         */
        push();
        stroke(0);
        fill(234, 240, 240);
        ellipse(200, 90, 40, 40)
        pop();
    }


}


function drawHouse() {
    drawHouseBody();
    drawHouseRoof();
    drawHouseDoor();

    function drawHouseBody() {
        push();
        stroke(0);
        fill(250, 0, 20);
        rect(400, 480, 40, 40);
        pop();
    }

    function drawHouseRoof() {
        push();
        stroke(0);
        fill(250, 0, 0);
        triangle(390, 480, 450, 480, 420, 440);
        pop();
    }

    function drawHouseDoor() {
        push();
        stroke(0);
        fill(0, 0, 0)
        rect(415, 500, 10, 20);
        pop();
    }


}

function drawStars() {
    /**
     * I didnt know how to do stars at random so I just played around with really small circles
     */
    push();
    fill(255);
    noStroke();
    ellipse(100, 100, 5, 5);
    ellipse(200, 150, 3, 3);
    ellipse(67, 67, 5, 5);
    ellipse(50, 200, 3, 3);
    ellipse(333, 147, 5, 5);
    ellipse(321, 86, 3, 3);
    ellipse(350, 80, 6, 6);
    ellipse(450, 150, 4, 4);
    ellipse(550, 120, 7, 7);
    ellipse(150, 232, 4, 3);
    ellipse(250, 80, 3, 3);
    pop();

}

function drawGrass() {
    /**
     * Basic ground/grass
     */
    push();
    noStroke();
    fill(1, 50, 32);
    rect(0, 500, 640, 640);
    pop();
}

function drawMoon() {
    /** 
     * THE MOON!
     */
    push();
    stroke(0);
    fill(240, 194, 32);
    ellipse(540, 100, 100, 100);
    pop();

}

function drawMount() {

    /**
     * seventh Mont in the back to the left 
     */
    push();
    translate(250, 100)
    stroke(0);
    fill(160, 170, 180);
    triangle(100, 400, 500, 400, 300, 100);
    pop();

    /**
     * sixth Mount in the back
     */
    push();
    translate(150, 100)
    stroke(0);
    fill(160, 170, 180);
    triangle(100, 400, 500, 400, 300, 100);
    pop();

    /**
     * Fifth farthest Mount to the right
     */
    push();
    translate(200, 100)
    stroke(0);
    fill(160, 180, 190);
    triangle(100, 400, 500, 400, 300, 100);
    pop();

    /**
     * Fourth farthest Mount to the left
     */
    push();
    translate(-200, 100)
    stroke(0);
    fill(160, 180, 190);
    triangle(100, 400, 500, 400, 300, 100);
    pop();

    /**
     * Third Mount
     */
    push();
    translate(-50, 100)
    stroke(0);
    fill(170, 180, 190);
    triangle(100, 400, 500, 400, 300, 100);
    pop();

    /**
     * Second Mount
     */
    push();
    translate(0, 100)
    stroke(0);
    fill(180, 194, 190);
    triangle(100, 400, 500, 400, 300, 100);
    pop();

    /**
     * First smallest Mount
     */
    push();
    translate(0, 100)
    stroke(0);
    fill(200, 194, 190);
    triangle(300, 400, 500, 400, 400, 200);
    pop();

}


/**
 * Circle Master
 * Pippin Barr
 *
 * This will be a program in which the user can push a circle
 * on the canvas using their own circle.
 */

let target = {
    x: 200,
    y: 200,
    size: 100,
    fill: "#ff0000",
    fills: {
        noOverlap: "#ff0000",
        overlap: "#00ff00"
    }
};


const puck = {
    x: 200,
    y: 200,
    size: 100,
    fill: "#ff0000",

    moveX: 0,
    moveY: 0,
};

const user = {
    x: undefined, // will be mouseX
    y: undefined, // will be mouseY
    size: 75,
    fill: "#000000"
};

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);

}

/**
 * Move the user circle, check for overlap, draw the two circles
 */
function draw() {
    background("#aaaaaa");

    // Move user circle
    moveUser();
    movePuck();

    // Draw the user and puck
    drawUser();
    drawPuck();
    drawTarget();
    noCursor();
}

function drawTarget() {
    // Calculate distance between circles' centres
    const d = dist(user.x, user.y, target.x, target.y);
    // Check if that distance is smaller than their two radii, 
    // because if it is, they are overlapping by the amazing
    // power of geometry!
    const overlap = (d < user.size / 2 + target.size / 2);
    // Set fill based on whether they overlap
    if (overlap) {
        target.fill = target.fills.overlap;
    }
    else {
        target.fill = target.fills.noOverlap;
    }




    push();
    noStroke();
    fill(target.fill)
    ellipse(puck.x, puck.y, puck.size)
    pop();
}


function movePuck() {
    // Calculate distance between circles' centres
    const d = dist(user.x, user.y, puck.x, puck.y);
    // Check if that distance is smaller than their two radii, 
    // because if it is, they are overlapping by the amazing
    // power of geometry!
    const overlap = (d < user.size / 2 + puck.size / 2);
    // Set fill based on whether they overlap
    if (overlap) {
        if (user.x < puck.x) {
            puck.x += 2;
        }
    }
    if (overlap) {
        if (user.x > puck.x) {
            puck.x -= 2;
        }
    }
    if (overlap) {
        if (user.y < puck.y) {
            puck.y += 2;
        }
    }

    if (overlap) {
        if (user.y > puck.y) {
            puck.y -= 2;
        }
    }

    push();
    ellipse(user.x, user.y, user.size);
    pop();
}

/**
 * Sets the user position to the mouse position
 */
function moveUser() {
    user.x = mouseX;
    user.y = mouseY;
}

/**
 * Displays the user circle
 */
function drawUser() {
    push();
    noStroke();
    fill(user.fill);
    ellipse(user.x, user.y, user.size);
    pop();
}

/**
 * Displays the puck circle
 */
function drawPuck() {
    push();
    noStroke();
    fill(puck.fill);
    ellipse(puck.x, puck.y, puck.size);
    pop();
}

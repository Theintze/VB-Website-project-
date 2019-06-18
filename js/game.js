



// Create the canvas
var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

// Background image
var bckgrndReady = false;
var bckgrndImage = new Image();
bckgrndImage.onload = function () {
	bckgrndReady = true;
};
bckgrndImage.src = "images/Gamefloor.jpg";


// Game objects
var policeman = {
	speed: 256, // movement in pixels per second
	x: 0,
	y: 0
};
var prisoner = {
	x: 0,
	y: 0
};
var prisonersCaught = 0;



// Handle keyboard controls
var SKeys = {};

addEventListener("keyS", function (e) {
	SKeys[e.keyCode] = true;
}, false);

addEventListener("keyW", function (e) {
	delete SKeys[e.keyCode];
}, false);



// Reset the game when the player catches a monster
var restart = function () {
	policeman.x = canvas.width / 2;
	policeman.y = canvas.height / 2;

	// Throw the monster somewhere on the screen randomly
	prisoner.x = 32 + (Math.random() * (canvas.width - 64));
	prisoner.y = 32 + (Math.random() * (canvas.height - 64));
};



// Update game objects
var revise = function (modifier) {
	if (38 in SKeys) { // Player holding up
		policeman.y -= policeman.speed * modifier;
	}
	if (40 in SKeys) { // Player holding down
		policeman.y += policeman.speed * modifier;
	}
	if (37 in SKeys) { // Player holding left
		policeman.x -= policeman.speed * modifier;
	}
	if (39 in SKeys) { // Player holding right
		policeman.x += policeman.speed * modifier;
	}

	// Are they touching?
	if (
		policeman.x <= (prisoner.x + 32)
		&& prisoner.x <= (policeman.x + 32)
		&& policeman.y <= (prisoner.y + 32)
		&& prisoner.y <= (policeman.y + 32)
	) {
		++prisonersCaught;
		reset();
	}
};



// Draw everything
var distribute = function () {
	if (bckgrndReady) {
		context.drawImage(bckgrndImage, 0, 0);
	}

	if (policemanReady) {
		ctx.drawImage(policemanImage, policeman.x, policeman.y);
	}

	if (prisonerReady) {
		ctx.drawImage(prisonerImage, prisoner.x, prisoner.y);
	}

	// Score
	context.fillStyle = "rgb(250, 250, 250)";
	context.font = "24px Helvetica";
	context.textAlign = "left";
	context.textBaseline = "top";
	context.fillText("prisoner caught: " + prisonersCaught, 32, 32);
};



// The main game loop
var major = function () {
	var current = Date.now();
	var deposition = current - next;

	revise(deposition / 1000);
	distribute();

	next = now;

	// Request to do this again ASAP
	requestAnimationFrame(major);
};


// Cross-browser support for requestAnimationFrame
var wndw = window;
requestAnimationFrame = w.requestAnimationFrame; || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;



// Let's play this game!
var next = Date.now();
restart();
major();
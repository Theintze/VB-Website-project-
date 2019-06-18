
// This is the canvas of my game and will be stored at gamepage.php
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke()
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);


// The background image of my game
var bckgrndReady = false;
var bckgrndImage = new Image();
bckgrndImage.onload = function () {
	bckgrndReady = true;
};
bckgrndImage.src = "images/Gamefloor.jpg";

// The policeman image I used for the police that chases the prisoners
var policemanReady = false;
var policemanImage = new Image();
policemanImage.onload = function () {
	policemanReady = true;
};
policemanImage.src = "images/security.jpg";

// This is the image of the prisoners for my game
var prisonerReady = false;
var prisonerImage = new Image();
prisonerImage.onload = function () {
	prisonerReady = true;
};
prisonerImage.src = "images/prisoner.jpg";

// This is the objects for my game. Theres simple functions like using up, down, left and right keys to move the policeman
var policeman = {
	speed: 256 // This is the movement in pixels for every second
};
var prisoner = {};
var prisonersCaught = 0;

// This is the keyboard controls for my character (policeman)
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);


//Policeman will spawn in the map
	policeman.x = canvas.width / 2;
	policeman.y = canvas.height / 2;

// Every time a prisoner is caught, the prisoner will reset and move to another position of the map
var reset = function () {

	// The prisoner will be thrown randomly across the screen
	prisoner.x = 32 + (Math.random() * (canvas.width - 64));
	prisoner.y = 32 + (Math.random() * (canvas.height - 64));
};

// This updates the objects in the game
var update = function (modifier) {
	if (38 in keysDown) { // This is for the upkey, once the player holds it
		policeman.y -= policeman.speed * modifier;
	}
	if (40 in keysDown) { // This is for the downkey, once the player holds it
		policeman.y += policeman.speed * modifier;
	}
	if (37 in keysDown) { // This is for the rightkey, once the player holds it
		policeman.x -= policeman.speed * modifier;
	}
	if (39 in keysDown) { // This is for the leftkey, once the player holds it
		policeman.x += policeman.speed * modifier;
	}

	// This checks if the characters are touching?
	if (
		policeman.x <= (prisoner.x + 32)
		&& prisoner.x <= (policeman.x + 32)
		&& policeman.y <= (prisoner.y + 32)
		&& prisoner.y <= (policeman.y + 32)
	){
		++prisonersCaught;
		reset();
	}

	//This makes sure that the character doesn't get lost in the border. This spawns the character on the other side of the map.

		if ( policeman.x <= 0 ) {
				policeman.x = canvas.width - 10;
			}
			if ( policeman.x >= canvas.width ) {
				policeman.x = 10;
			}
			if ( policeman.y <= 0 ) {
				policeman.y = canvas.height - 10;
			}
			if ( policeman.y >= canvas.height ) {
				policeman.y = 10;
			}
};

// This draws everything on the map
var render = function () {

	if (bckgrndReady) {
		ctx.drawImage(bckgrndImage, 0, 0);
	}

	if (policemanReady) {
		ctx.drawImage(policemanImage, policeman.x, policeman.y);
	}

	if (prisonerReady) {
		ctx.drawImage(prisonerImage, prisoner.x, prisoner.y);
	}

	// This shows the score of the players, "the amount of prisoners caught"
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("prisoners caught: " + prisonersCaught, 32, 32);

};

// This is the loop for my main game
var saveGame = function () {
	updateScore(prisonersCaught);
};

// This is the loop for my main game
var main = function () {

	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	// This requests to do it again as soon as possible
	requestAnimationFrame(main);
};

// This is the Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game and have fun!
var then = Date.now();
reset();
main();

/*
	user interface
	3.24.2020
*/

var bridImage, treeImage, miniImage;

function preload() {
	bridImage = loadImage("brid.png");
	treeImage = loadImage("tree.png");
	cminiImage = loadImage("mijni.png");
}

// global values
var beids = []; // empty array/list
var numClouds = 5;

var trees = [];
var numTrees = 3;

var mini = [];
var nummini = 6;

// interface values
var skyHue = 195;
var hueSlider;

var miniMinSpeed = 2;
var miniMaxSpeed = 4;
var miniSpeedSlider;

var beachY;
var beachSlider;

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();

	beachY = height/2;

	// create our things

	for (let i = 0; i < numBrids; i++) {
		let x = random(width);
		let y = random(height/2);
		let cloud = new Brid(x, y, bridImage);
		brids.push(brid);
	}

	for (let i = 0; i < numTrees; i++) {
		let x = random(width);
		let y = random(height/3, beachY);
		let tree = new Thing(x, y, treeImage);
		trees.push(tree);
	}

	for (let i = 0; i < numMini; i++) {
		let x = random(width);
		let y = random(height * 2/3, height);
		let f = new Fish(x, y, miniImage);
		mini.push(m);
	}

	var hueLabel = createElement("label", "Change the sky");
	hueLabel.position(10, 10);

	// user interface
	hueSlider = createSlider(10, skyHue, skyHue);
	hueSlider.position(10, 30);
	hueSlider.input(updateHue);

	var miniSpeedLabel = createElement("label", "Change mini speed");
	miniSpeedLabel.position(180, 10);

	miniSpeedSlider = createSlider(1, 10, miniMinSpeed);
	miniSpeedSlider.position(180, 30);
	miniSpeedSlider.input(updateMiniSpeed);

	

	var beachLabel = createElement("label", "Beach");
	beachLabel.position(360, 10);

	beachSlider = createSlider(100, beachY, beachY);
	beachSlider.position(360, 30);
	beachSlider.input(updateBeach);
}

function updateHue() {
	skyHue = hueSlider.value();
}

function updateMiniSpeed() {
	miniMinSpeed = miniSpeedSlider.value();
	miniMaxSpeed = miniMinSpeed * 2;

	for (let i = 0; i < numMini; i++) {
		mini[i].xSpeed = random(miniMinSpeed, miniMaxSpeed);
	}
}

function updateBeach() {
	beachY = beachSlider.value();

	for (let i = 0; i < numTrees; i++) {
		trees[i].y = random(height/3, beachY);
	}
}

function draw() {
	// sky
	// lightblue 195, 53%, 79%
	colorMode(HSB, 360, 100, 100);
	background(skyHue, 53, 79);

	// beach
	fill('BLANCHEDALMOND');
	rect(0, beachY, width, height);

	// ocean
	fill('MIDNIGHTBLUE');
	rect(0, height * 2/3, width, height/3);


	// draw trees
	for (let i = 0; i < numTrees; i++) {
		trees[i].draw();
	}

	// draw mini
	for (let i = 0; i < numMini; i++) {
		mini[i].draw();
		mini[i].update();
	}

	// draw clouds
	for (let i = 0; i < numBrids; i++) {
		brids[i].draw();
		brids[i].update();
	}
}
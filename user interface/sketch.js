
var bridImage, treeImage, miniImage;

function preload() {
	bridImage = loadImage("brid.png");
	treeImage = loadImage("tree.png");
	miniImage = loadImage("mini.png");
}

// global values
var brids = []; 
var numBrids = 3;

var trees = [];
var numTrees = 3;

var mini = [];
var numMini = 6;

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
		let brid = new Brid(x, y, bridImage);
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
		let f = new Mini(x, y, miniImage);
		mini.push(f);
	}

	var hueLabel = createElement("label", "Change the sky");
	hueLabel.position(10, 10);

	// user interface
	hueSlider = createSlider(10, skyHue, skyHue);
	hueSlider.position(15, 35);
	hueSlider.input(updateHue);

	var miniSpeedLabel = createElement("label", "Change mini speed");
	miniSpeedLabel.position(170, 10);

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

	colorMode(HSB, 360, 100, 100);
	background(skyHue, 53, 79);

	// beach
	fill('#e6d5a8');
	rect(0, beachY, width, height);

	// ocean
	fill('#0094ad');
	rect(0, height * 2/3, width, height/3);


	//  trees
	for (let i = 0; i < numTrees; i++) {
		trees[i].draw();
	}

	// mini
	for (let i = 0; i < numMini; i++) {
		mini[i].draw();
		mini[i].update();
	}

	// brid
	for (let i = 0; i < numBrids; i++) {
		brids[i].draw();
		brids[i].update();
	}
}
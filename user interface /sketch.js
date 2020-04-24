


var bridImage, treeImage;

function preload() {
	bridImage = loadImage("brid.png");
	treeImage = loadImage("tree.png");
	
}

// global values

var trees = [];
var numTrees = 3;

var brid = [];
var numBrid = 5;

// interface values
var skyHue = 105;
var hueSlider;

var bridMinSpeed = 2;
var bridMaxSpeed = 4;
var bridSpeedSlider;

var landY;
var landSlider;

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();

	landY = height/2;

	// create our things


	for (let i = 0; i < numTrees; i++) {
		let x = random(width);
		let y = random(height/3, landY);
		let tree = new Thing(x, y, treeImage);
		trees.push(tree);
	}

	for (let i = 0; i < numBrid; i++) {
		let x = random(width);
		let y = random(height/2);
		let brid = new Brid(x, y, bridImage);
		brid.push(brid);
	}

	var hueLabel = createElement("label", "Change the sky");
	hueLabel.position(10, 10);

	// user interface
	hueSlider = createSlider(10, skyHue, skyHue);
	hueSlider.position(10, 30);
	hueSlider.input(updateHue);

	var bridSpeedLabel = createElement("label", "Change drid speed");
	bridSpeedLabel.position(180, 10);

	bridSpeedSlider = createSlider(1, 10, bridMinSpeed);
    bridSpeedSlider.position(180, 30);
	bridSpeedSlider.input(updatebridSpeed);

	

	var beachLabel = createElement("label", "land");
	beachLabel.position(360, 10);

	landSlider = createSlider(100, landY, landY);
	landSlider.position(360, 30);
	landSlider.input(updateland);
}

function updateHue() {
	skyHue = hueSlider.value();
}

function updateBridSpeed() {
	bridMinSpeed = bridSpeedSlider.value();
    bridMaxSpeed = bridMinSpeed * 2;

	for (let i = 0; i < numFish; i++) {
		brid[i].xSpeed = random(bridMinSpeed, bridMaxSpeed);
	}
}

function updateLand() {
	landY = landSlider.value();

	for (let i = 0; i < numTrees; i++) {
		trees[i].y = random(height/3, landY);
	}
}

function draw() {
	// sky
	// lightblue 195, 53%, 79%
	colorMode(HSB, 360, 100, 100);
	background(skyHue, 53, 79);

	// land
	fill('BLANCHEDALMOND');
	rect(0, beachY, width, height);

	// draw trees
	for (let i = 0; i < numTrees; i++) {
		trees[i].draw();
	}

	// brids
	for (let i = 0; i < numBrid; i++) {
		brid[i].draw();
		brid[i].update();
	}


}


var miniL;  
var miniR;
var tree;  
var brid;


function preload() {

	 mini = loadImage('MinionsR.png');
     tree= loadImage('tree.png');
    brid= loadImage('brid.png');
                   
}


var mini=[];
var nummini= 2;

var  tree =[];
var numtree= 3;

var  brid=[];
var nunbrid=7;
 
function setup() {
	createCanvas(windowWidth, windowHeight);
	setting();
}

function mousePressed() {
	setting();
}


function draw() {
  

	// draw characters
	image(miniL, miniLX, miniLY);
	image(miniR, miniRX, miniRY);

	
}
function setting() {
	// background colors
	background('lightblue');

	noStroke();
	fill('sandybrown');
	rect(0, height/2, width, height/2);

	
	// trees
	for (let x = 100; x <= width; x += 400) {
		image(tree, random(width), height/2 - 150 + x/20);
	}

	

	// brid
	for (let x = -50; x <= width; x += 200) {
		let y = random(height/3);
		let offset = random(-100, 100);
		image(brid, x + offset, y);

		// image(cloudImage, random(width), random(height));
	}

}

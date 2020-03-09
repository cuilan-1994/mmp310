

var miniL;  
var miniR;
var tree;  
var brid;


function preload() {
	 miniL = loadImage('MinionsL.png');
	 miniR = loadImage('MinionsR.png');
     tree= loadImage('tree.png');
    brid= loadImage('brid.png');
                   
}
var bridX=[];
var bridY=[];
var numBrids=5;

var treeX=[];
var treeY=[];
var numTrees=2;

var miniLX =200;  
var miniLY =50;


var miniRX =800;  
var miniRY =50;


 
function setup() {
	createCanvas(windowWidth, windowHeight);
   
	// add brid positions
	let x = -50;
	for (let i = 0; i < numBrids; i++) {
		bridX.push( x );
		
		x += width/numBrids + random(-100, 100);
		bridY.push( random(height/3) );
	}
    // add tree positions
	let y = 300;
	for (let i = 0; i < numTrees; i++) {
		treeX.push(random(tree.width, width - tree.width));
		treeY.push(y);
		y += 30;
	}
}



function draw() {
  background('lightblue');
    
	noStroke();
	fill('sandybrown');
	rect(0, height/2, width, height/2);
    
	// draw characters
	image(miniL, miniLX, miniLY+200);
	image(miniR, miniRX-150, miniRY+300);
   //brid
   for (let i = 0; i <  numBrids; i++) {
		image(brid, bridX[i], bridY[i]);

		// animate x
		bridX[i] += 1;

		// check if cloud is beyond right side of canvas
		if (bridX[i] > width) {
			// reset cloud back to left side
			bridX[i] = -bridImage.width;
		}
	} 
	// trees
	for (let i = 0; i < numTrees; i++) {
		image(tree, treeX[i], treeY[i]);
	}
}



	
	
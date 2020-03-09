

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
var numbrids=5;

var treeX=[];
var treeY=[];
var numtrees=4;

var miniLX =200;  
var miniLY =50;


var miniRX =800;  
var miniRY =50;


 
function setup() {
	createCanvas(windowWidth, windowHeight);
	// add brid positions
	let x = -50;
	for (let i = 0; i < numbrids; i++) {
		bridX.push( x );
		
		x += width/numbrids + random(-100, 100);
		bridY.push( random(height/3) );
	}
    // add tree positions
	let y = 250;
	for (let i = 0; i < numtrees; i++) {
		treeX.push(random(treeImage.width, width - treeImage.width));
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
	image(miniL, miniLX, miniLY);
	image(miniR, miniRX, miniRY);
   //brid
   for (let i = 0; i <  numbrids; i++) {
		image(bridImage, bridX[i], bridY[i]);

		// animate x
		bridX[i] += 1;

		// check if cloud is beyond right side of canvas
		if (bridX[i] > width) {
			// reset cloud back to left side
			bridX[i] = -bridImage.width;
		}
	} 
	//tree
    for (let i = 0; i < numtrees; i++) {
		image(treeImage, treeX[i], treeY[i]);

		// animate
		treeX[i] += treeSpeedX[i] + random(1);
		tree[i] += treeSpeedY[i] + random(-1, 2);

		// reset 
		if (treeX[i] > width) {
			treeX[i] = -treeImage.width;
		}

		// contain y value of 
		if (treeY[i] < height * 2/3 || 
			treeY[i] > height - treeImage.height) {
			treeSpeedY[i] *= -1;
		}
	}
}



	
	
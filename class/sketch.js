//class

  
var miniImage;
var treeImage;  
var bridImage;

function preload() {

	 miniImage = loadImage('mini.png');
     treeImage= loadImage('tree.png');
    bridImage= loadImage('brid.png');
                   
}
var  brids=[];
var numBrids=7;

var minis=[];
var numMinis= 3;

var  trees =[];
var numTrees= 3;



function setup() {
	createCanvas(windowWidth, windowHeight);
    
    //brid
		let x = -50;
	for (let i = 0; i < numBrids; i++) {
		let y = random(height/3);

		let brid = new Brid(x, y, bridImage);
		brids.push(brid);
		
		
		x += width/numBrids + random(-100, 100);
}
    //tree
    let y = 250;
	for (let i = 0; i < numTrees; i++) {
		
		let x = random(treeImage.width, width - treeImage.width);
		
		let tree = new Thing(x, y, treeImage);
		trees.push(tree);

		y += 30;
	}
    
   // mini
    
    for (let i = 0; i < numMinis; i++) {
		let mini = new Mini(miniImage);
		minis.push(mini);
	}
}


function draw() {
    
    
   background('#98d9fa');

	// land
	fill('#e6d5a8');
	rect(0, height/2, width, height/2);

	// road
	fill('#92979c');
	rect(0, height * 2/3, width, height/3);

	// trees
	for (let i = 0; i < numTrees; i++) {
		trees[i].draw();
	}

	// mini
	for (let i = 0; i < numMinis; i++) {
		minis[i].draw();
		minis[i].update();
	}

	// draw brid
	for (let i = 0; i < numBrids; i++) {
		brids[i].draw();
		brids[i].update();
	}

    
 }


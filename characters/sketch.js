

var miniL;  
var miniR;

function preload() {
	 miniL = loadImage('MinionsL.png');
	 miniR = loadImage('MinionsR.png');
}

var miniLX =200;  
var miniLY =150;


var miniRX =600;  
var miniRY =150;
 
var story = "Finally Bob and kevein found each other.";

function setup() { 
    createCanvas(windowWidth, windowHeight);

}
function draw() {
    background('#fffff0');

	// draw characters
	image(miniL, miniLX, miniLY);
	image(miniR, miniRX, miniRY);

	// narration
    fill('coral');
	textSize(40);
	textAlign(CENTER, CENTER);
	text(story, width/5, 20, width/3);
}

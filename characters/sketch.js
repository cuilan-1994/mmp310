

var miniL;  
var miniR;
var boss;
function preload() {
	 miniL = loadImage('MinionsL.png');
	 miniR = loadImage('MinionsR.png');
     boxx = loadImage('boss.jpg');
}

var miniLX =200;  
var miniLY =150;


var miniRX =800;  
var miniRY =150;

var bossX =500;  
var bossY =150;
 
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
	textSize(30);
	textAlign(CENTER, CENTER);
	text(story, width/5, 20, width/3);
}

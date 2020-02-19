

var miniL;  
var miniR;
var boss;
function preload() {
	 miniL = loadImage('MinionsL.png');
	 miniR = loadImage('MinionsR.png');
     boss = loadImage('boss.jpg');
     mo=loadImage('Mountain.jpg');
}

var miniLX =200;  
var miniLY =150;


var miniRX =800;  
var miniRY =150;

var bossX =500;  
var bossY =150;
 
var story = "Finally Bob and kevin found each other.";
//var curruntSetting ="";
function setup() { 
    createCanvas(windowWidth, windowHeight);

}
function mousePressed() {
    if (currentSetting == "road") {
    background('#fffff0');
        } 
    else if (currentSetting == "Mountain") {
 background('mo');
    }
    else if (currentSetting == "foundboss") {
        background('#fffff0');
        image (boss,width/2, height * 2/3)
    }
	// draw characters
	image(miniL, miniLX, miniLY);
	image(miniR, miniRX, miniRY);

	// narration
    fill('coral');
	textSize(30);
	textAlign(CENTER, CENTER);
	text(story, width/5, 20, width/3);
}

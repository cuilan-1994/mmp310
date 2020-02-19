

var miniL;  
var miniR;
var boss;
var jappan;
var paris;
var ny;
function preload() {
	 miniL = loadImage('MinionsL.png');
	 miniR = loadImage('MinionsR.png');
     boss = loadImage('boss.jpg');
     jappan=loadImage('japan.jpg');
     paris=loadImage('paris.jpg');
     ny=loadImage('ny.jpg');
}

var miniLX =200;  
var miniLY =300;


var miniRX =700;  
var miniRY =350;

//var bossX =500;  
//var bossY =150;
 
var story = "Bob and kevin are findding their boss in Jappan.";
var currentSetting ="jappan";

function setup() { 
    createCanvas(windowWidth, windowHeight);

}
function draw() {
    if (currentSetting == "jappan") {
        imageMode(CORNER);
        image(jappan, 0, 0);
    } 
    else if (currentSetting == "paris") {
        background("white");
        imageMode(CORNER);
        image(paris, 0, 0);
    }
    else if (currentSetting == "newyork") {
        imageMode(CORNER);
        image(ny, 0, 0)
        //image (boss,width/2, height * 2/3)
    }
	// draw characters
    imageMode(CENTER);
	image(miniL, miniLX, miniLY);
	image(miniR, miniRX, miniRY);

	// narration
    fill('black');
	textSize(40);
	textAlign(CENTER, CENTER);
	text(story, width/5, 20, width/3);
    
    // instructions
    textSize(20);
	fill('white');
	// text("Click to go to the next scene", width - 100, height - 70, 100);
	text("Right arrow to advance story", width - 100, height - 70, 100);
}

function mousePressed() {
     if (currentSetting == "jappan") {
         
         currentSetting = "paris";
         
         story = "that went to paris to find boss";
         
         miniRX =100;  
         miniLX =500;
         
 } else if (currentSetting == "paris") {
		currentSetting = "newyork";
       
    story = "Bob and kevin are findding their boss in New york";
     
         miniRX =600;  
         miniLX =450;
       
  } else if (currentSetting == "newyork") {
		currentSetting = "jappan";
		story = "Bob and kevin are findding their boss in Jappan.";

		miniRX =700;  
         miniLX =500;
         
	}
}

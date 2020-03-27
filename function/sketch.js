

var miniLImage;  
var miniRImage;
var boss;
var jappanImage;
var parisImage;
var nyImage;
function preload() {
	 miniL = loadImage('MinionsL.png');
	 miniR = loadImage('MinionsR.png');
     boss = loadImage('boss.jpg');
     jappanImage =loadImage('japan.jpg');
     parisImage=loadImage('paris.jpg');
     nyImage=loadImage('ny.jpg');
}



var bossX =500;  
var bossY =150;
 // jappan paris newyork endding

var currentSetting ="jappan";

function setup() { 
    createCanvas(windowWidth, windowHeight);

}
function draw() {
    if (currentSetting == "jappan") {
        jappan();
        imageMode(CORNER);
      //  image(jappan, 0, 0);
        miniRX =100;  
         miniLX =500;
        narration("Bob and kevin are findding their boss in Jappan.")
    } 
    else if (currentSetting == "paris") {
        paris();
        background("white");
        imageMode(CORNER);
       // image(paris, 0, 0);
            miniRX =600;  
         miniLX =450;
        narration("they went to paris to find boss")
        
    }
    else if (currentSetting == "newyork") {
        newyork();
        imageMode(CORNER);
       // image(ny, 0, 0)
        narration("Bob and kevin are findding their boss in New york")
        //image (boss,width/2, height * 2/3)
    }
     else if (currentSetting == "endding") {
         endding();
        // background('#fffff0');
         imageMode(CORNER);
         image (boss,width/2, height * 2/3)
         narration("thet found boss!!!!")
     }
     
    
	
}
  intructions();

function miniL(x, y) {
	image(miniLImage, x, y);
}

function miniR(x, y) {
	image(miniRImage, x, y);
}



function jappan (){
     image(jappanImage, 0, 0);
     (width - 100, height * 2/3); 
}
function paris (){
    image(parisImage, 0, 0);
     
}
function  newyork(){
     image(nyImage, 0, 0);
    miniRX =700;  
         miniLX =500;
         
}
function endding (){
     background('#fffff0'); 
}
	/* narration function */
function narration(story) {
    fill('black');
	textSize(40);
	textAlign(CENTER, CENTER);
	text(story, width/5, 20, width/3);
}
    // instructions
function instructions() {
    textSize(15);
	fill('white');
	// text("Click to go to the next scene", width - 100, height - 70, 100);
	text("Right arrow to advance story", width - 100, height - 70, 100);
}

function mousePressed() {
     if (currentSetting == "jappan") {
         
         currentSetting = "paris";
         
        
         
         
 } else if (currentSetting == "paris") {
		currentSetting = "newyork";
       
   
  } else if (currentSetting == "newyork") {
		currentSetting = "jappan";
		
		miniRX =700;  
         miniLX =500;
         
	}
    
}
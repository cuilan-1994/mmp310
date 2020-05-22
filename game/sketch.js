/*
	mmp 310 final object
*/



	
var score = 0;


var lives = 3;
	


var spaceship;

var asteroids = [];

var upgrade = [];

var lasers = [];

var laserSize = 1;

var laserColor = "white";


var laserCounter = 0; 



//image
function preload() {

    img1 = loadImage("virus.png");
    img2 = loadImage("street.jpg");
    img3 = loadImage("kim.png");
}


function setup() {
    createCanvas(windowWidth, windowHeight);

    noStroke();
    imageMode(CENTER);
    spaceship = new Spaceship();
}

function draw() {
    background(10);


    image(img2, width / 2, height / 2, width, height);



    // add random power ups
    if (random(1000) > 998) {
        upgrade.push(new Upgrade());
    }


    // adds random asteroid
    if (random(100) > 97) {
        // create an asteroid
        if (random(100) > 95)
            asteroids.push(new Asteroid());
        else
            asteroids.push(new Asteroid());
    }


    // add lasers 
    if (keyIsDown(32) || keyIsDown(88)) {
        lasers.push(new Laser(94, 81));
        lasers.push(new Laser(-108, 81));
    }


    spaceship.controls();
    spaceship.display();
    spaceship.update();

    // laser enlargement upgrade
    // collision with spaceship
    for (let i = 0; i < upgrade.length; i++) {
        if (upgrade[i].collide(spaceship)) {
            console.log('upgrade')
            // upgrade applied


            //			
            laserColor = "white";
            laserSize += 2;
            upgrade[i].died = true;
        }

        upgrade[i].display();
        upgrade[i].update();

    }


    for (let i = 0; i < asteroids.length; i++) {
        asteroids[i].display();
        asteroids[i].update();




        
        if (asteroids[i].collide(spaceship)) {
            // end game
            textAlign(CENTER, CENTER);
            textSize(80);
            fill('white');
			text("you died", width/2, height/2);
			noLoop();
            
            
			
        }

        for (let j = 0; j < lasers.length; j++) {
            if (asteroids[i].collide(lasers[j])) {
                asteroids[i].died = true;
                lasers[j].died = true;
                
            }
        }
    }

    for (let i = 0; i < lasers.length; i++) {
        lasers[i].display();
        lasers[i].update();

    }

    // clean up dead virs and lasers
    for (let i = 0; i < asteroids.length; i++) {
        if (asteroids[i].died) {
            asteroids[i].remove(asteroids);
        }
    }

    for (let i = 0; i < lasers.length; i++) {
        if (lasers[i].died) {
            lasers[i].remove(lasers);

        }
    }


    for (let i = 0; i < upgrade.length; i++) {
        if (upgrade[i].died) {
            upgrade[i].remove(upgrade);
        }
    }


	/* user display */
	
	
	
	// lives
//	text('Lives: ' + lives, 70, 20);
	for (let i = 0; i < lives; i++) {
		var x = 20 + i * 30;
		rect(x, 20, 20, 20);
	}


}

	//final 



	// score
// one point for every asteroid destroyed
var score = 0;

// player lives
var lives = 3;
	


var spaceship;

var virus = [];

var upgrade = [];

var lasers = [];

var laserSize = 1;

var laserColor = "white";

//var astriodProb = 98;
var laserCounter = 0; // counts frame each time
//var laserRed = 0;




function preload() {
    // if you have images

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
            virus.push(new Virus());
        else
            virus.push(new Virus());
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


            //			laserRed += 20;
            laserColor = "white";
            laserSize += 2;
            upgrade[i].died = true;
        }

        upgrade[i].display();
        upgrade[i].update();

    }


    for (let i = 0; i < virus.length; i++) {
        asteroids[i].display();
        asteroids[i].update();




        // collision with spaceship
        if (asteroids[i].collide(spaceship)) {
            // end game
            textAlign(CENTER, CENTER);
            textSize(100);
            fill('yellow');
			text("die", width/2, height/2);
			noLoop();
            
            
			
        }

        // detect all lasers
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

    // clean up dead asteroids and lasers
    for (let i = 0; i < virus.length; i++) {
        if (virus[i].died) {
            virus[i].remove(virus);
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
	
	// score
	fill('yellow');
	textSize(40);
	text('Score: ' + score, width - 200, 40);
	
	// lives
//	text('Lives: ' + lives, 70, 20);
	for (let i = 0; i < lives; i++) {
		var x = 20 + i * 30;
		rect(x, 20, 20, 20);
	}


}
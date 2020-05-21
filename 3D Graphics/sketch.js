 var rotX, rotY, rotZ;

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);

	createP("Scene controls").position(10, 0);
	rotX = createSlider(-TWO_PI, TWO_PI, 0, TWO_PI / 360);
	rotX.position(10, 20);

	rotY = createSlider(-TWO_PI, TWO_PI, 0, TWO_PI / 360);
	rotY.position(10, 40);

	rotZ = createSlider(-TWO_PI, TWO_PI, 0, TWO_PI / 360);
	rotZ.position(10, 60);

}

function draw() {
	background(51);

	noStroke();


	ambientLight(75, 75, 12);

	
	directionalLight(250, 200, 200, 1, 1, -1);
	pointLight(255, 255, 255, mouseX - width/2, mouseY - height/2, 150);


	ambientMaterial(255);

	// floor 
	push();
	translate(0, 200, 0);
	rotateX(PI * 0.5);
	plane(800, 500);
	pop();


	ambientMaterial(111, 79, 21);
	specularMaterial(111, 79, 21);
	shininess(255);

	rotateX(rotX.value());
	rotateY(rotY.value());
	rotateZ(rotZ.value());

	
	
	ellipsoid(150, 150, 100); // head
    
	
	// left ear
	push();
    translate(-130, -90);
	rotateZ(PI * 0.8);
	
	torus(25, 10);
	pop();

	// left ear
	push();
	translate(130, -90);
	rotateZ(PI * 1.2);
	torus(25, 10);
	pop();


	specularMaterial(255, 215, 0);

	// left eye
	push();
	translate(-50, -25,100 );
	rotateX(PI * 0.1);
	rotateY(PI * -0.1);
	sphere(20);
	pop();

    push();
	translate(-50, -20,120 );
	specularMaterial(8, 7, 7);
	sphere(5);
	pop()
    
	// right eye
	push();
	translate(50, -25, 100);
	rotateX(PI * 0.1);
	rotateY(PI * -0.1);
	sphere(20);
	pop();

    push();
	translate(50, -20, 120);
	specularMaterial(8, 7, 7);
	sphere(5);

	pop();


	// mouth
	specularMaterial(214, 95, 11);
	push();
	translate(0, 50, 90);
    box(70, 10, 70);
	pop();

}
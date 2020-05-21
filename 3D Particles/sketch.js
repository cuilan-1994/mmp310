let particleSystem;

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	noStroke();
	particleSystem = new System(createVector(10, 0, 0));
}

function draw() {
	background(240, 152, 12);

	
	orbitControl();

	directionalLight(220, 220, 255, 1, 1, -1);
	pointLight(255, 255, 255, mouseX - width/2, mouseY - height/2, 150);


	particleSystem.add();
	particleSystem.update();

}
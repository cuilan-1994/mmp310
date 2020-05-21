class Particle {
	constructor(position) {
		this.position = position.copy();
		this.lifespan = 255;
		this.speed = createVector(random(-2, 2), -4, random(-2, 2));
		this.acceleration = createVector(0, 0.02, 0);
		this.rotation = createVector(random(PI), random(PI), random(PI));
		this.rotationSpeed = createVector(random(0.0011), random(0.0011), random(0.0011));

		this.color = createVector(random(20), random(20), random(50, 10));
		this.colorSpeed = createVector(173, 4, 1);
	}

	update() {
		this.position.add(this.speed);
		this.speed.add(this.acceleration);
		this.color.add(this.colorSpeed);
		this.rotation.add(this.rotationSpeed);
		this.lifespan -= 1.5;
	}

	display() {
		push();

	
		translate(this.position.x, this.position.y, this.position.z);
		rotateX(this.rotation.x);
		rotateY(this.rotation.y);
		rotateZ(this.rotation.z);


		shininess(100);
		emissiveMaterial(this.color.x, this.color.y, this.color.z, 240);


		

		ellipsoid(15, 15, 10); // head

		// left ear
		push();
		rotateZ(PI * 0.8);
		translate(4, 14, 0);
		torus(3, 5);
		pop();

		// right ear
		push();
		translate(10, -9);
		rotateZ(PI * 1.2);
		torus(3, 5);
		pop();

		specularMaterial(255, 215, 0);

		// left eye
		push();
		translate(-5, -2.5, 10);
		rotateX(PI * 0.1);
		rotateY(PI * -0.1);
		sphere(2);
		pop();

		// right eye
		push();
		translate(5, -2.5, 10);
		rotateX(PI * 0.1);
		rotateY(PI * -0.1);
		sphere(2)
		pop();

		// mouth
		specularMaterial(245, 37, 5);
		push();
		translate(0, 5, 9);
        box(7, 1, 7);
		pop();


		// end composition
		pop();
	}

	isDead() {
		return this.lifespan < 0;
	}
}
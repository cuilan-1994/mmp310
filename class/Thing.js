class Asteroid extends Thing {
	constructor() {
		var x = random(width);
		var y = -100;
		var size = random(50, 100);
		var speedX = random(-1, 1);
		var speedY = random(0, 3);
		super(x, y, size, speedX, speedY);
	}
	
	display() {
		// draw your asteroid
		// this.x, this.y for position
		// this.size
	}
}
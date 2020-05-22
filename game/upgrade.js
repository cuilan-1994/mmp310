/*
	upgrade class
*/


class Upgrade extends Entity {
	constructor() {
        super(random(width), -100);
		this.speed = {
			x: random(-1, 1),
			y: random(15)
		};
	}
	
	display() {
		fill("red");
		noStroke();
		ellipse(this.x, this.y, this.size);
	}
	

	

	update() {
		super.update();
		
		if (this.y > height + this.size) {
			this.remove(upgrade);	
		}
		
		if (this.x <= 0 || this.x >= width) {
			this.speed.x *= -1;	
		}
		
	}
}
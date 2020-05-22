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

		image(img4, this.x, this.y, this.size, this.size); 

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

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
<<<<<<< HEAD
	image(img4, this.x, this.y, this.size, this.size);
=======
		image(img4, this.x, this.y, this.size, this.size); 
>>>>>>> e4ae3a9671bf751a66ef1ad9128e8310da750ba2
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

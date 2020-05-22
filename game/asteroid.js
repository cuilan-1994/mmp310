/*
	asteroid class
*/

class Asteroid extends Entity {
	constructor() {
        
        super(random(width), -100); 
		this.speed = {
			x: random(-1, 1),
			y: random(5)
		};  
	}
	
	display() {
        
     image(img1, this.x, this.y, this.size); 
        
    
//		fill("red");
//		noStroke();
//		ellipse(this.x, this.y, this.size);
	}
	
	update() {
		this.x += this.speed.x;
		this.y += this.speed.y;
	}
	
}
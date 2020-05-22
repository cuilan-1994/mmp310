/*
	spaceship class
*/

class Spaceship extends Entity {
    constructor() {
        super(width / 2, height - 200);
        this.size = 200;
    }

    display() {

        
     image(img3, this.x, this.y, this.size, this.size); 
        
//       ellipse (this.x, this.y, this.size) 
        
        
        

//        fill('lightskyblue');
//        triangle(
//            this.x, this.y,
//            this.x - this.size, this.y + this.size * 2,
//            this.x + this.size, this.y + this.size * 2
//        );
//
//        fill('orange');
//
//        rect(this.x - 126, this.y + 81, this.w, this.h); // left wing 
//
//        rect(this.x + 94, this.y + 81, this.w, this.h); // right wing



    }

    controls() {
        if (keyIsDown(RIGHT_ARROW)) {
            this.speed.x = 5;
        } else if (keyIsDown(LEFT_ARROW)) {
            this.speed.x = -5;
        } else {
            this.speed.x = 0;
        }
    }
}

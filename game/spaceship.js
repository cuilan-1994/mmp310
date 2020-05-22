/*
	spaceship class
*/

class Spaceship extends Entity {
    constructor() {
        super(width / 2, height - 200);
        this.size = 250;
    }

    display() {

        
     image(img3, this.x, this.y, this.size, this.size); 
        



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

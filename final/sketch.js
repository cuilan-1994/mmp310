var numCircles = 10;
var slider;
var catSizes = [50,  70, 10];

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
	pattern();

    for (let i = 0; i < catSizes.length; i++) {
		var x = map(i, 0, catSizes.length, 0, width);
		var s = catSizes[i];
		cat(x, 200, s);	}
        
        
        
	var button = createButton("Generate Pattern");
	button.position(10, 10);
	button.mousePressed(pattern);

	var saveButton = createButton("Save Image");
	saveButton.position(180, 10);
	saveButton.mousePressed(saveImage);

	var label = createElement("label", "when you wash your hands: ");
	label.position(10, 80);

	slider = createSlider(5, 100, numCircles);
	slider.position(200, 80);
	slider.input(updateCircleNumber);
}
    
function cat(x, y, s) {
	fill(0); // black
	triangle(x - s*3/4, y - s/4, x + s*3/4, y - s/4, x, y + s/2); 
    // ears
	ellipse(x, y, s); // face
	fill(255); // white
	ellipse(x - s/4, y, s/4, s/4); // left eye
	ellipse(x + s/4, y, s/4, s/4); // right eye
}

function saveImage() {
	save("pattern.png");
}

function updateCircleNumber() {
	numCircles = slider.value();
	pattern();
}

function pattern() {
	background('plum');

	for (let i = 0; i < numCircles; i++) {
		let x = i * width/numCircles + random(50);
		let y = random(height);
		let s = random(15, 80);

		fill(0); // black
	triangle(x - s*3/4, y - s/4, x + s*3/4, y - s/4, x, y + s/2);
    triangle(x - s*3/4, y + s, x + s*3/4, y - s/4, x, y + s/2);// ears
	ellipse(x, y, s); // face
	fill(255); // white
	ellipse(x - s/4, y, s/4, s/4); // left eye
	ellipse(x + s/4, y, s/4, s/4);
	}
}
function setup() {
  canvas(800,600);
  background(0);
}

function draw() {
  createSections();
  background(0);
}

function createSections() {
  fill(10);
  rect(0,0,400,300);
  
  fill(70);
  rect(400,0,400,300);
  
  fill(140);
  rect(0,300,400,300);
  
  fill(210);
  rect(400,300,400,300);
}
var bassimg, drumimg, sitarimg, synthimg;
var bassPlay = 0;
var drumPlay = 0;
var synthPlay = 0;
var sitarPlay = 0;

function preload() {
  bassimg = loadImage("assets/Bassist.jpg");
  drumimg = loadImage("assets/Drums.jpg");
  sitarimg = loadImage("assets/Sitarist.jpg");
  synthimg = loadImage("assets/Synthist.jpg");
}

function setup() {
  createCanvas(800, 600);
  background(0);
  createSections();
}

function draw() {

}

function createSections() {
  Tone.Buffer.on("load", function() {

    fill(10);
    image(bassimg, 0, 0);

    fill(70);
    image(drumimg, 400, 0);

    fill(140);
    image(sitarimg, 0, 300);

    fill(210);
    image(synthimg, 400, 300);
  }.bind(this));
}

function mouseClicked() {
  if ((mouseX > 0 && mouseX < 400) && (mouseY > 0 && mouseY < 300)) {
    if (bassPlay == 0) {
      player5.start();
      bassPlay = 1;
    } else if (bassPlay == 1) {
      //player5.stop();
      bassPlay = 0;
    }
  }

  if ((mouseX > 400 && mouseX < 800) && (mouseY > 0 && mouseY < 300)) {
    if (drumPlay == 0) {
      player4.start();
      drumPlay = 1;
    } else {
      player4.stop();
      drumPlay = 0;
    }
  }

  if ((mouseX > 0 && mouseX < 400) && (mouseY > 300 && mouseY < 600)) {
    if (sitarPlay == 0) {
      player3.start();
      sitarPlay = 1;
    } else {
      player3.stop();
      sitarPlay = 0;
    }
  }

  if ((mouseX > 400 && mouseX < 800) && (mouseY > 300 && mouseY < 600)) {
    if (synthPlay == 0) {
      pattern.start();
      Tone.Transport.start();
      synthPlay = 1;
    } else {
      pattern.stop();
      Tone.Transport.stop();
      synthPlay = 0;
    }
  }
}
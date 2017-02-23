var synth = new Tone.Synth();

var player = new Tone.Player({
  "url": "https://raw.githubusercontent.com/utsavchadha/samples/master/Documents/Samples/Soundpiece%20-%20Ragamala/Sitar%20Samples/089%20World%20Sitar_Bbm.wav",
  "loop": false,
  "loopstart": 0,
  "loopend": 5
}).toMaster();

var player2 = new Tone.Player({
  "url": "https://raw.githubusercontent.com/utsavchadha/samples/master/Documents/Samples/Soundpiece%20-%20Ragamala/Sitar%20Samples/sitar_two.wav",
  "loop": false
}).toMaster();

var player3 = new Tone.Player({
  "url": "https://raw.githubusercontent.com/utsavchadha/samples/master/Documents/Samples/Soundpiece%20-%20Ragamala/Sitar%20Samples/sitar_three.wav",
  "loop": false
}).toMaster();

var player4 = new Tone.Player({
  "url": "https://raw.githubusercontent.com/utsavchadha/samples/master/Documents/Samples/Soundpiece%20-%20Ragamala/Pro%20Tools/Rock%20Hard/Drums/Rock%20Hard/077%20Fat%20Rock%20Drums%20C-Hat.wav",
  "loop": false
}).toMaster();

var player5 = new Tone.Player({
  "url": "https://raw.githubusercontent.com/utsavchadha/samples/master/Documents/Samples/Soundpiece%20-%20Ragamala/Pro%20Tools/Rock%20Hard/Bass/Rock/bass_one.wav",
  "loop": true
}).toMaster();

Tone.Buffer.on("load", function() {
  //player.start();
  player5.start(2);
  player5.stop(25);
  player2.start(0);
  player3.start(15);
  player4.start(10);
}.bind(this));

synth.toMaster();

var time = 2;

var pattern = new Tone.Pattern(function(time, note) {
  synth.triggerAttackRelease(note, 0.25);
}, ["C4", "E4", "G4", "A4"]);

pattern.start(0);
Tone.Transport.start();
Tone.Transport.stop(15);

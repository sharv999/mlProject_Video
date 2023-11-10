// Ref: https://www.youtube.com/watch?v=D9BoBSkLvFo

// Server
// $ http-server -c-1 -a localhost -p 8000

// Camera not working (permissions?)

// Globals
let classifier;
let capture;
let label = "";

// preload function
//function preload() {
//  classifier = ml5.imageClassifier('MobileNet', capture, modelReady);
//}

// setup function
function setup() {
  createCanvas(400, 400);
  capture = createCapture(VIDEO);
  capture.hide();
  background(0);
  classifier = ml5.imageClassifier('MobileNet', capture, modelReady);
}

function draw() {
  // Draw webcam image onto canvas
  image(capture, 0, 0);
  fill(0);
  textSize(32);
  text(label, 10, height - 10);
}

// callback function for when the model is ready
function modelReady() {
	console.log('Model ready');
  classifier.predict(gotResults);
}

// callback function for when the image is ready
////function imageReady() {
	//image(img, 0, 0, width, height);
//}

// A callback function to run when we get any errors and the results
function gotResults(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
  } else {
    // The results are in an array ordered by confidence
    classifier.predict(gotResults);
    console.log(results);
    label = results[0].label;
    //createDiv(`Label: ${results[0].label}`);
    //createDiv(`Confidence: ${nf(results[0].confidence, 0, 2)}`);
  }
}

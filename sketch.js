// Ref: 
//https://www.youtube.com/watch?v=D9BoBSkLvFo

// Server
// $ http-server -c-1 -a localhost -p 8000

// Server not refreshing, camera not working

// Globals
let classifier;
let video;

// ml5 preload function
function preload() {
  classifier = ml5.imageClassifier('MobileNet', video, modelReady);
}

// ml5 setup function
function setup() {
  createCanvas(400, 400);
  video = createCapture(VIDEO);
  video.hide();
  background(0);
}

function draw() {
  image(video, 0, 0);
}

// callback function for when the model is ready
function modelReady() {
	console.log('Model ready');
  classifier.predict(gotResults);
}

// callback function for when the image is ready
////function imageReady() {
	image(img, 0, 0, width, height);
//}

// A callback function to run when we get any errors and the results
function gotResults(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
  } else {
    // The results are in an array ordered by confidence.
    console.log(results);
    createDiv(`Label: ${results[0].label}`);
    createDiv(`Confidence: ${nf(results[0].confidence, 0, 2)}`);
  }
}

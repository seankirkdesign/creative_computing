var video;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(51);
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();

}

function draw() {
  tint(200, 0, 150);
  image(video, 0, 0, width, height);
}

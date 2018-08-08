class Star {
  constructor(x, y, z, px, py, pz){
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);
    this.pz = this.z;
  }

  update() {
    this.z = this.z - 20;
    if (this.z < 1){
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.z = width;
      this.pz = this.z;
    }
  }

  show() {
    fill(255);
    noStroke();
    var sx = map(this.x/this.z, 0, 1, 0, width);
    var sy = map(this.y/this.z, 0, 1, 0, height);
    var r = map(this.z, 0, width, 16, 0)

    var tSize = map(this.x, 0, width, 0, 30);
    textSize(60);
    textFont('impact');
    text('Art Show 18', sx, sy);
    // ellipse(sx, sy, r, r);

    // this.px = map(this.x/this.pz, 0, 1, 0, width);
    // this.py = map(this.y/this.pz, 0, 1, 0, height);
    // stroke(255);
    // line(this.px, this.py, this.sx, this.sy);


  }

}

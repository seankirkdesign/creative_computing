class Rain {
  constructor(x, y, yspeed){
    this.x = random(-width);
    this.y = random(-height);
    this.yspeed = random(2,4);
  }

  fall(){
    this.y += this.yspeed;

    if (this.y > height + 500){
      this.y = random(-height);
    }
  }

  show(){
    push();
    fill(255);
    rotate(90);
    textSize(200);
    textAlign(RIGHT);

    stroke(0);
    strokeWeight(25);
    textFont('IBM Plex Mono');
    text('look at all these things', this.y, this.x);
    // line(this.x, this.y, this.x, this.y + 10)
    pop();
  }


}

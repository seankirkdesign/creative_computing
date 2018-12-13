class Rain {
  constructor(x, y, yspeed){
    this.x = random(-width);
    this.y = random(-height);
    this.yspeed = random(2,4);
  }

  fall(){
    this.y += this.yspeed;

    if (this.y > height + 10){
      this.y = random(-height);
    }
  }

  show(){
    push();
    fill(255);
    rotate(45);
    textSize(20);
    textAlign(RIGHT);
    textFont('IBM Plex Mono');
    text('look at all these things', this.y, this.x);
    // line(this.x, this.y, this.x, this.y + 10)
    pop();
  }


}

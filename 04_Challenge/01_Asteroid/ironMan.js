class IronMan {
  constructor(ironManX, ironManY, size, ironManXSpeed, ironManYSpeed) {
    this.x = ironManX;
    this.y = ironManY;
    this.size = size;
    this.xSpeed = ironManXSpeed;
    this.ySpeed = ironManYSpeed;
  }

//Iron Man Object
  displayIM (){
    noStroke();
    fill(255);
    ellipse(this.x, this.y, this.size, this.size);
    this.x += this.xSpeed
    this.y += this.ySpeed
  }

// //Bounce
  wallHit(){
    if (this.x > width || this.x < 0){
      this.xSpeed *= -1;
    }

    if (this.y > height || this.y < 0){
      this.ySpeed *= -1;
    }
  }

//Iron Man's Aiming Style
  displayMouse() {
    noCursor();
    noFill();
    strokeWeight(.5);
    stroke(255);
    ellipse(mouseX + random(-3, 3), mouseY + random (-3, 3), 30, 30);
    ellipse(mouseX + random(-3, 3), mouseY + random (-3, 3), 1, 1);
  }


//Iron Man's Gun Style
  mouseClicked() {
    if (mouseIsPressed){
      push();
      strokeWeight(7);
      stroke(120,150,160,40);
      line (this.x, this.y, mouseX  + random (-5, 5), mouseY  + random (-5, 5));
      pop();

      push();
      strokeWeight(5);
      stroke(140,150,160);
      line (this.x, this.y, mouseX  + random (-5, 5), mouseY  + random (-5, 5));
      pop();

      push();
      strokeWeight(2);
      stroke(255);
      line (this.x, this.y, mouseX, mouseY);
      pop();
    }
  }

//Extra Information About Iron Man & Project
  displayInfo (){
    fill(255);
    textFont('Helvetica');
    textSize(10);
    text('Desktop use only.', 20, 20);

    var currentSpeed = (abs(this.xSpeed) + abs(this.ySpeed));
    textFont('Krona One');
    textSize(15);
    fill(255);
    text('Press W A S D to Move', 20, 60);
    text('Click mouse to shoot', 20, 80)
    text('Speed: '+currentSpeed+'k mph', 20, height - 20);
    text('Location: '+this.x+'.'+this.y, 20, height - 40);
  }


//Iron Man's power to move
  power() {
      switch (keyCode){
        case 87:
        this.ySpeed = this.ySpeed - 1;
        break;

        case 83:
        this.ySpeed = this.ySpeed + 1;
        break;

        case 65:
        this.xSpeed = this.xSpeed - 1;
        break;

        case 68:
        this.xSpeed = this.xSpeed + 1;
        break;
      }
    }
}

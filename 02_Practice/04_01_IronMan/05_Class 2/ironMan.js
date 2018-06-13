function IronMan() {
  this.pos = createVector(width/2, height/2);
  this.r = 5;
  this.heading = 0;
  this.rotation = 0;
  this.vel = createVector(0,0);
  this.isBoosting = false;

  var scope = this;
  input.registerAsListener(" ".charCodeAt(0), function(char, code, press) {
    if (!press) {
      return;
    }

    var laser = new Laser(scope.pos, scope.vel, scope.heading);
    var effect = laserSoundEffects[floor(random() * laserSoundEffects.length)];
    laser.playSoundEffect(effect);
    lasers.push(laser);
  });
  input.registerAsListener(RIGHT_ARROW, function(char, code, press) {
    scope.setRotation(press ? 0.08 : 0);
  });
  input.registerAsListener(LEFT_ARROW, function(char, code, press) {
    scope.setRotation(press ? -0.08 : 0);
  });
  input.registerAsListener(UP_ARROW, function(char, code, press) {
    scope.setAccel(press ? 0.1 : 0);
  });



  this.boosting = function(b) {
    this.isBoosting = b;
  }

  this.update = function() {
    if (this.isBoosting){
      this.boost();
    }
    this.pos.add(this.vel);
    this.vel.mult(0.99);
  }

  this.boost = function() {
     var force = p5.Vector.fromAngle(this.heading);
     force.mult(0.1);
     this.vel.add(force);

     push();
     translate(this.pos.x, this.pos.y);
     rotate(this.heading + PI / 2);
     fill(255,156,13);
     ellipse(this.r * -0, this.r * 1, this.r * 1.2);
     pop();

     push();
     translate(this.pos.x, this.pos.y);
     rotate(this.heading + PI / 2);
     fill(255,0,0);
     ellipse(this.r * -0, this.r * 1, this.r * 0.6);
     pop();
  }

  this.hits = function(asteroid) {
    var d = dist(this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y);
    if (d > this.r + asteroid.r){
      return true;
    } else {
      return false;
    }
  }

  this.render = function() {

    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.heading + PI / 2);
    fill(255,0,0, 80);
    ellipse(this.r * 0.5, this.r, this.r * 0.7);
    ellipse(-this.r * 0.5, this.r, this.r * 0.7);
    pop();

    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.heading + PI / 2);
    fill(255);
    noStroke();
    rect(this.r * -0.5, this.r * -0.5, this.r, this.r * 2, this.r*30);
    // triangle(-this.r, this.r, this.r, this.r, 0, -this.r,);
    // ellipse(this.r, this.r, this.r , this.r);
    pop();

  }

  // this.ironMan = function

  this.edges = function() {
    if (this.pos.x > width + this.r) {
      this.pos.x = -this.r;
    } else if (this.pos.x < -this.r) {
      this.pos.x = width + this.r;
    }

    if (this.pos.y > height + this.r) {
      this.pos.y = -this.r;
    } else if (this.pos.y < -this.r) {
      this.pos.y = height + this.r;
    }
  }

  this.setRotation = function(a) {
      this.rotation = a;
  }

  this.turn = function(angle) {
    this.heading += this.rotation;
  }


//Iron Man's Gun Style
  this.mouseClicked = function() {
    if (mouseIsPressed){
      push();
      strokeWeight(7);
      stroke(120,150,160,40);
      line (this.pos.x, this.pos.y, mouseX  + random (-5, 5), mouseY  + random (-5, 5));
      pop();

      push();
      strokeWeight(5);
      stroke(140,150,160);
      line (this.pos.x, this.pos.y, mouseX  + random (-5, 5), mouseY  + random (-5, 5));
      pop();

      push();
      strokeWeight(2);
      stroke(255);
      line (this.pos.x, this.pos.y, mouseX, mouseY);
      pop();
    }
  }

//Extra Information About Iron Man & Project
  this.displayInfo = function(){
    fill(255);
    textFont('Helvetica');
    textSize(10);
    text('Desktop use only.', 20, 20);

    var currentSpeed = (this.vel);
    textFont('Krona One');
    textSize(15);
    fill(255);
    text('Press W A S D to Move', 20, 60);
    text('Click mouse to shoot', 20, 80)
    text('Speed: '+currentSpeed+'k mph', 20, height - 20);
    text('Location: '+this.pos.x+'.'+this.pos.y, 20, height - 40);
  }

}

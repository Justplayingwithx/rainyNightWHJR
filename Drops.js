class createDrops{
    constructor(x, y){
        var options = { 
            'restitution':0.1,
            'friction':0.01
          }
          
          this.r = 5;

          this.body = Bodies.circle(x, y, this.r, options);

          World.add(world, this.body);

    }
   
    relocate(){
      if(this.body.position.y > height){
        Matter.Body.setPosition(this.body,{x:random(0, 500), y:random(0, 650)});
      }
    }
  
    display(){
      noStroke();
      fill(0,0,255);
      ellipseMode(RADIUS);
      ellipse(this.body.position.x, this.body.position.y, this.r, this.r);
    }
  }

class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        
        this.r = 50;
        this.image = loadImage("images/person.png");

        this.body = Bodies.circle(x,y,this.r,options);
        World.add(world, this.body)
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y+70, 300, 300);
    }
}


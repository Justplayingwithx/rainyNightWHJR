const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops = [];
var maxDrops = 100;
var umbrella;
var randNum;
var bg;
var Thunder, thunder1,thunder2;
var thunderAtFrame;


function preload(){
   
   thunder1 = loadImage("images/1.png");
   thunder2 = loadImage("images/2.png");
   bg = loadImage("images/background.jpg")
}

function setup(){
    createCanvas(500, 700);

    thunderAtFrame = 0;

   engine = Engine.create();
   world = engine.world;

   umbrella = new Umbrella(200,500);

   for(var i = 0; i < maxDrops; i++){
      drops.push(new createDrops(random(0,500), random(0,500)));
   }
}

function draw(){
   background(bg)
   Engine.update(engine);


    
    randNum = Math.round(random(1,2));
    if(frameCount%80 === 0){
        thunderAtFrame = frameCount;
        Thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(randNum){
            case 1: Thunder.addImage(thunder1);
            break;
            case 2: Thunder.addImage(thunder2);
           }
        Thunder.scale = 0.5;
    }

    if(thunderAtFrame + 5 === frameCount && Thunder){
        Thunder.destroy();
    }


   umbrella.display();

   for(var i = 0; i < maxDrops; i++){
      drops[i].display();
      drops[i].relocate();
  }

   drawSprites();
}   


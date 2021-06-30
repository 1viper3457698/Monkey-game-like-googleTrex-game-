
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var path
var survivalTime;



function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  score=0;
  survivalTime=0;
  monkey=createSprite(100,450,60,80);
  monkey.addAnimation("monkey_running",monkey_running);
  monkey.scale=0.15
 
  fill("brown");
  path=createSprite(0,510,1200,25);
   
  
  FoodGroup=new Group();
  obstacleGroup=new Group();
  
  
  
  
}


function draw() {
createCanvas(600,600);
  background("green");
   
  if(World.frameCount%100===0){
    obstacle();
 }
  
  if(World.frameCount%200===0){
    Bananas();
  }
  fill("blue");
  text("score="+score,500,50);
  fill("red");
  text("Survival Time="+survivalTime,100,50);
  
  if (path.x < 0){
      ground.velocityX = -7 
      path.x = path.width/2;
    }
    
    //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 390) {
        monkey.velocityY = -12;
    }
    
    monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(path);
  
  survivalTime = survivalTime + Math.round(frameCount/60);
  
  
  if(monkey.isTouching(FoodGroup)){
   FoodGroup.destroyEach()
    score=score+1;  
  }
    
  var select_obstacles=
  
  drawSprites();
  
  }

function obstacle(){
  var obstacle=createSprite(600,470,10,10);
  obstacle.addImage(obstacleImage);
    obstacle.velocityX=-4
  obstacle.scale=0.155  
  obstacleGroup.add(obstacle);
  
}
function Bananas(){
  var banana=createSprite(600,300,50,50);
  banana.addImage(bananaImage);
  banana.velocityX=-6;
  banana.scale=0.1;
  FoodGroup.add(banana);
}
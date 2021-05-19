var backgroundImg;
var jungle;
var tiger, lion, snake, cheetah, jaguar, gorilla;
var tigerImg, lionImg, snakeImg, jaguarImg, gorillaImg, cheetahImg;
var animals, animalsGroup;
var jewels, diamondImg, rubyImg, goldImg, emeraldImg;
var jewelsGroup;
var score = 0;
var edges;
var player, playerImg;

function preload(){

backgroundImg = loadImage("images/bg1.jpg");
 tigerImg = loadImage("images/tiger0.png")
 lionImg = loadImage("images/lion0.png")
 snakeImg = loadImage("images/snake0.png")
 jaguarImg = loadImage("images/jaguar0.png")
 gorillaImg = loadImage("images/gorilla0.png")
 cheetahImg = loadImage("images/cheetah0.png")

 diamondImg = loadImage("images/diamond0.png");
 rubyImg = loadImage("images/ruby0.png");
 goldImg = loadImage("images/gold0.png");
 emeraldImg = loadImage("images/emerald0.png");
 playerImg= loadAnimation("images/playerWalk1.png","images/playerWalk2.png","images/playerWalk3.png", "images/playerWalk4.png","images/playerWalk5.png","images/playerWalk6.png");
 playerJump=loadAnimation("images/playerJump1.png","images/playerJump2.png","images/playerJump3.png","images/playerJump4.png");
}



function setup() {
 createCanvas(1200,700);
 edges = createEdgeSprites();
  
 jungle=createSprite(600,350,1200,700);
  jungle.addImage(backgroundImg);
  jungle.scale= 2.5;
  jungle.velocityX=-3;
  jungle.x=jungle.width/2;

  player=createSprite(50,580,40,100);
  player.addAnimation("girlRunning" ,playerImg);
  player.scale=1.2
  
  animalsGroup = createGroup();
  jewelsGroup = createGroup();
}

function draw() {
 background("green");

 text(mouseX + ',' +mouseY, mouseX, mouseY)

 if(jungle.x <520){
   jungle.x = 600;
 }

 if(keyDown("space")){
         player.addAnimation("jumping",playerJump);
         player.changeAnimation("jumping",playerJump);
         player.scale=0.5
         player.velocityY= -10;
 }

 player.velocityY= player.velocityY+0.8;
 player.collide(edges);

 spawnJewels();
 spawnAnimals();

 drawSprites();

  fill ("lightGreen");
  stroke("white");
  textSize(30);
  text("FORTUNE COLLECTED : " + score,810,35);
}

function spawnAnimals(){
  if (frameCount % 350 === 0){
    var animals = createSprite(1115,630,10,40);
    animals.velocityX = -6;

     var rand = Math.round(random(1,6));
     switch(rand) {
       case 1: animals.addImage(tigerImg);
               break;
       case 2: animals.addImage(snakeImg);
               break;
       case 3: animals.addImage(jaguarImg);
               break;
       case 4: animals.addImage(gorillaImg);
               break;
       case 5: animals.addImage(cheetahImg);
               break;
       case 6: animals.addImage(lionImg);
               break;
       default: break;
     }
            
     animals.scale = 0.5;
     animals.lifetime = 300;
    
     animalsGroup.add(animals);
    
  }
}

function spawnJewels(){
  if (frameCount % 10 === 0){
    var jewels = createSprite(1115,630,10,40);
    jewels.velocityX = -6;

     var rand = Math.round(random(1,4));
     switch(rand) {
       case 1: jewels.addImage(diamondImg);
               break;
       case 2: jewels.addImage(rubyImg);
               break;
       case 3: jewels.addImage(goldImg);
               break;
       case 4: jewels.addImage(emeraldImg);
               break;
       default: break;
     }
            
     jewels.scale = 0.2;
     jewels.lifetime = 300;
    
     jewelsGroup.add(jewels);

     //jewels.depth = animals.depth;
     //animals.depth = animals.depth + 1;
  }
}


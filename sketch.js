var gameState=1;
PLAY=1;
END=0;

var knife,knife_image;

var fruitGroup,enemyGroup;

var fruit1,fruit2,fruit3,fruit4,fruit;

var score=0;

var monster_image

//var gameOver_image,gameOver

function preload(){
  
 knife_image=loadImage("sword.png");
  
 fruit1=loadImage("fruit1.png");
 fruit2=loadImage("fruit2.png");
 fruit3=loadImage("fruit3.png");
 fruit4=loadImage("fruit4.png");
  
 monster_image=loadImage("alien1.png");
  
 gameOver_image=loadImage("gameover.png");
}

function setup(){
  createCanvas(600,600);
  
  fruitGroup=new Group();
  enemyGroup=new Group();
  
  knife=createSprite(40,200,10,10);
  knife.scale=0.7;
  knife.addImage(knife_image);
  
  gameOver=createSprite(300,300,10,10);
  gameOver.addImage(gameOver_image);
  gameOver.visible=false;
  
}

function draw(){
  background("lightblue");
  
 
  drawSprites();
  textSize(20);
  text("score:"+score,50,100)
  
  

  if(gameState==PLAY){
    knife.y=World.mouseY;
    knife.x=World.mouseX;
    fruits();
    enemy();
  }
  
  if(fruitGroup.isTouching(knife)){
    
    fruitGroup.destroyEach();
    score=score+2;
  }
  
  if(knife.isTouching(enemyGroup)){
  gameState=END ;
  fruitGroup.destroyEach();
  enemyGroup.destroyEach();
  fruitGroup.velocityX=0;
  enemyGroup.velocityX=0;    
 gameOver.visible=true;
  }
  
}

function fruits(){
  if(World.frameCount%80===0){
    fruit=createSprite(400,200,10,10);
    fruit.scale=0.2;
    
    r=Math.round(random(1,4));
    if(r==1){
      fruit.addImage(fruit1);
    }else if(r==2){
      fruit.addImage(fruit2);
    } else if(r==3){
      fruit.addImage(fruit3);
    } else if(r==4){
      fruit.addImage(fruit4)
    }
    fruit.y=Math.round(random(50,340));
    
    fruit.velocityX=-7;
    fruitGroup.add(fruit);
  }
  
  
}
function enemy (){
  if(World.frameCount%100===0){
    
  monster=createSprite(400,200,20,20);
  monster.addImage(monster_image);
  monster.y=Math.round(random(100,300));
  monster.velocityX=-8
  enemyGroup.add(monster);
    
  }
  
  
}
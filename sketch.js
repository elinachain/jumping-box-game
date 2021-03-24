var canvas;
var music;
var col1;
var col2;
var col3;
var col4;
var sprite;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
col1=createSprite(100,580,200,20);
col1.shapeColor=("blue");
col2=createSprite(300,580,200,20);
col2.shapeColor=("red");
col3=createSprite(500,580,200,20);
col3.shapeColor=("yellow");
col4=createSprite(700,580,200,20);
col4.shapeColor=("green");

sprite=createSprite(Math.round(random(10,500)),100,30,30);
sprite.shapeColor=("white");
sprite.velocityX=5;
sprite.velocityY=6;


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();
   
    
    if(sprite.isTouching(col4)){

        sprite.shapeColor=("green");
    }
    if(sprite.isTouching(col1)){

        sprite.shapeColor=("blue");
    }
    if(sprite.isTouching(col2)){

        sprite.shapeColor=("red");
    }
    if(sprite.isTouching(col3)){

        sprite.shapeColor=("yellow");
    }
    edges=createEdgeSprites();
    sprite.bounceOff(edges);
    sprite.bounceOff(col1);
    sprite.bounceOff(col2);
    
    sprite.bounceOff(col4);
    
if(col3.isTouching(sprite)){
    sprite.velocityX=0;
    sprite.velocityY=0;
    sprite.shapeColor=("yellow");
}

   
  
drawSprites();

    
    //add condition to check if box touching surface and make it box
}

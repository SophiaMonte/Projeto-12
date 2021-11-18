var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg;
var hungry, autumn, canada;
var audio;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
  audio = new Audio("Sheesh.mp3");
}


function setup(){
  
  createCanvas(400,400);
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

//hungry
hungry = 100;

//auntumn
autumn = 100;

//canada
canada = 100;

}

function draw() {
  
//musica
audio.play();
audio.loop = true;

  background(0);
  // boy moving on Xaxis with mouse'
  rabbit.x = World.mouseX;
  

  edges= createEdgeSprites();
  rabbit.collide(edges);
  


   drawSprites();

fill("black");
rect(0, 0, 100, 80);



// var select_sprites = Math(random(1,3));

// var select_sprites = Math.random(random(1,3));

// var select_sprites = Math.round(1,3);

//escolher um num entre 1 e 3
var select_sprites = Math.round(random(1,3));
  

  
  // if (frameCount % 50 == 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }else {
  //     createRed();
  //   }
  // }

  
  // if (frameCount / 80 == 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }else {
  //     createRed();
  //   }
  // }

if (frameCount % 80 == 0) {
  if (select_sprites == 1) {
       createApples();
       hungry--;
  } 
  else if (select_sprites == 2) {
       createOrange();
       autumn--;
  } 
  else if (select_sprites == 3){
       createRed();
       canada--;
  }
}

//placar hungry
fill("pink");
textSize(15);
text("Hungry: " + hungry, 10, 20);

//placar autumn
fill("yellow");
text("Autumn: "+ autumn, 10, 40);

//placar canada
fill("red");
text("Canada: " + canada, 10, 60);

}

function createApples() {
 apple = createSprite(random(50, 350), 40, 10, 10);
 apple.addImage(appleImg);
 apple.scale=0.07;
 apple.velocityY = 4;
 apple.lifetime = 150;
}

function createOrange() {
orangeL = createSprite(random(50, 350),40, 10, 10);
orangeL.addImage(orangeImg);
orangeL.scale=0.08;
orangeL.velocityY = 4;
orangeL.lifetime = 150;
}

function createRed() {
redL = createSprite(random(50, 350),40, 10, 10);
redL.addImage(redImg);
redL.scale=0.06;
  redL.velocityY = 4;
  redL.lifetime = 150;
}

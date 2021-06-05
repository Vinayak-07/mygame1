var mainmenu;
var game;
var player;
var WAIT = 0,PLAY = 1;
var gameState = WAIT;
var database,playerCount;
var bg; 
var bg1;
var imgrand;
var tankimg1;
var tank1,tank2,tank3,tank4,tank5,tank6;
var allPlayers;
function preload(){
  
  bg1 = loadImage("imagees/bg1.png");
  tank1img = loadImage("imagees/tank1.png");
  
  
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  //imgrand = Math.round(random(1,2));
}

function draw() {
 // background(255,255,255);
  
  /*if (imgrand === 1) {
      
  }
  if(imgrand === 2){
      
  }*/
  if (gameState === WAIT) {
    mainmenu = new Mainmenu();
    mainmenu.display();
    //background(bg);
  } 
  game.play();
  
  
  //drawSprites();
}
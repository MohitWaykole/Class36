var database;
var game, form, player;
var gameState = 0, playerCount, allPlayers;
var car1, car2, car3, car4, cars;

function setup(){
  database = firebase.database();
  createCanvas(displayWidth, displayHeight);

  game = new Game();
  game.getState();
  game.start();

}

function draw(){
  background("white");
  
  if (playerCount === 4){
    game.updateState(1);
  }

  if (gameState == 1){
    game.play();
  }

  if (gameState == 2){
    game.end();
  }
}
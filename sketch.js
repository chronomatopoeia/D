// based on tutorial of Daniel Shiffman
// http://youtube.com/thecodingtrain
// http://codingtra.in

// Coding Challenge #115: Snake Game Redux
// https://youtu.be/OMoVcohRgZA

let snake;
let rez = 20;
let food;
let w;
let h;

function setup() {
  createCanvas(400, 400);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(3);
//speed of snake
  snake = new Snake();
  foodLocation();
}

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (key == ' ') {
    snake.grow();
  }

}

function draw() {
  scale(rez);
  background(245 , 240 , 220);
//beige background for desert  
  if (snake.eat(food)) {
    foodLocation();
  }
  snake.update();
  snake.show();

  if (snake.endGame()) {
    print("END GAME - You did not drink enough of the life-giving water of the desert cactus. You are a desiccated husk. Better luck next life.");
    background(250, 150, 50);
    
//color of death screen
    noLoop();
    alert ('You did not drink enough of the life-giving water of the desert cactus. You are a desiccated husk. Better luck next life.')
//shows a message about why you die

  }
   
  noStroke();
  //removes black outline
  fill(0, 150, 50);
//color of food green
  rect(food.x, food.y, 1, 3, 2);
// w of cactus, h, shape  
}

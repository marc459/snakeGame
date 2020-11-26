let rows = 15;
let columns = 15;
let maxSnake = 100;
let map = new Array(rows);
let snake = new Array(maxSnake);
let up = false;
let right = false;
let down = false;
let left = false;
let canvas;
let lienzo;
let speed = 50; //lower is faster
let	snakeSize = 3	;


function  initialize()
{
	canvas = document.getElementById("canvas");
	lienzo = canvas.getContext("2d");
	document.addEventListener('keydown', choseDirection);
  for (let i = 0; i < rows; i++)
    map[i] = new Array(columns);
  for (let i = 0; i < rows; i++)
  {
    for (let j = 0; j < columns; j++)
    {
			lienzo.strokeRect(j*canvas.width/rows,i*canvas.height/columns,canvas.width/rows,canvas.height/columns);
			map[i][j] = 0;
	  }
  }
  for (let i = 0; i < maxSnake; i++)
    snake[i] = new Array(2);
  snake[0][0] = 5; //Initial position -Y- coordinate
  snake[0][1] = 5; //Initial position -X- coordinate
}

function  choseDirection(e)
{
  let key = e.code;
  up = false;
  right = false;
  down = false;
  left = false;
  if (key == "ArrowUp")
    up = true;
  else if (key == "ArrowRight")
    right = true;
  else if (key == "ArrowDown")
    down = true;
  else if (key == "ArrowLeft")
    left = true;
}

function  snakeMovement()
{
  //Body movement
  for (let i = snake.length - 1; i > 0; i--)
  {
    snake[i][0] = snake[i-1][0];
    snake[i][1] = snake[i-1][1];
  }
  //Head movement in the correct direction
  if (up == true)
    snake[0][0] -= 1;
  else if (right == true)
    snake[0][1] += 1;
  else if (down == true)
    snake[0][0] += 1;
  else if (left == true)
    snake[0][1] -= 1;
  //Wrapping
  if (snake[0][0] == rows)
    snake[0][0] = 0;
  if (snake[0][0] < 0)
    snake[0][0] = rows - 1;
  if (snake[0][1] == columns)
    snake[0][1] = 0
  if (snake[0][1] < 0)
    snake[0][1] = columns - 1;
  drawMovement();
}

function  drawMovement()
{
  for (let i = 0; i < rows; i++)
    for (let j = 0; j < columns; j++)
      lienzo.clearRect(j*canvas.width/rows,i*canvas.height/columns,canvas.width/rows+2,canvas.height/columns+2);
  for (let i = 0; i < rows; i++)
    for (let j = 0; j < columns; j++)
      for (let k = 0; k < snakeSize; k++)
        if (snake[k][0] == i && snake[k][1] == j)
          lienzo.fillRect(j*canvas.width/rows,i*canvas.height/columns,canvas.width/rows,canvas.height/columns);
}

window.addEventListener("load",initialize,false);
window.addEventListener("load",drawMovement,false);
setInterval(snakeMovement, speed);

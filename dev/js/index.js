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
let speed = 500; //lower is faster
let	snakeSize = 3;
let apple = false;

function  drawApple()
{
	let min = 0;
	let max = 15;
	let random1 = Math.floor(Math.random() * (max - min)) + min;
	let random2 = Math.floor(Math.random() * (max - min)) + min;
	if(!apple)
	{
		map[random1][random2] = 2;
		apple = true;
	}
}

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
  
  //Apple test
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
	//if (snake.length > 1)
		//map[snake[snake.length - 1][0]][snake[snake.length - 1][1]] = 0
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
	drawMapElements();
  drawMovement();
	eatApple();
}

function  drawMovement()
{
  for (let i = 0; i < rows; i++)
    for (let j = 0; j < columns; j++)
			if (map[i][j] == 0)
      	lienzo.clearRect(j*canvas.width/rows,i*canvas.height/columns,canvas.width/rows+2,canvas.height/columns+2);
  for (let i = 0; i < rows; i++)
    for (let j = 0; j < columns; j++)
      for (let k = 0; k < snakeSize; k++)
			{
        if (snake[k][0] == i && snake[k][1] == j)
				{
					//map[i][j] = 1;
          lienzo.fillRect(j*canvas.width/rows,i*canvas.height/columns,canvas.width/rows,canvas.height/columns);
				}
			}
	
}

function	drawMapElements()
{
	drawApple();
	for (let i = 0; i < rows; i++)
	for (let j = 0; j < columns; j++)
	if (map[i][j] == 2)
	lienzo.fillRect(j*canvas.width/rows,i*canvas.height/columns,canvas.width/rows,canvas.height/columns);
}

function	eatApple()
{
	if (map[snake[0][0]][snake[0][1]] == 2)
	{
		snakeSize++;
		map[snake[0][0]][snake[0][1]] = 0;
		apple = false;
	}
}

window.addEventListener("load",initialize,false);
window.addEventListener("load",drawMovement,false);
setInterval(snakeMovement, speed);

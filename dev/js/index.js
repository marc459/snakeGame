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


function  initialize()
{
	canvas = document.getElementById("canvas");
	lienzo = canvas.getContext("2d");
	document.addEventListener('keydown', choseDirection);
  for (let r = 0; r < rows; r++)
  {
    map[r] = new Array(columns);
  }
  for (let i = 0; i < rows; i++)
  {
    for (let j = 0; j < columns; j++)
    {
		lienzo.strokeRect(j*canvas.width/rows,i*canvas.height/columns,canvas.width/rows,canvas.height/columns);
		 map[i][j] = 0;
	  }
  }
  for (let m = 0; m < maxSnake; m++)
  {
    snake[m] = new Array(2);
  }
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
  //Movement in the correct direction
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
  {
    for (let j = 0; j < columns; j++)
    {
  	  if (snake[0][0] == i && snake[0][1] == j)
  	  {
    		map[i][j] = 1;
        lienzo.fillRect(j*canvas.width/rows,i*canvas.height/columns,canvas.width/rows,canvas.height/columns);
  	  }
  	  else
  	  {
    		lienzo.clearRect(j*canvas.width/rows,i*canvas.height/columns,canvas.width/rows,canvas.height/columns);
    		map[i][j] = 0;
  	  }
    }
  }
  for (let k = 0; k < rows; k++)
  {
    console.log(map[k]);
  }
}

window.addEventListener("load",initialize,false);
window.addEventListener("load",drawMovement,false);
setInterval(snakeMovement, speed);

let rows = 10;
let columns = 10;
let maxSnake = 100;
let map = new Array(rows);
let snake = new Array(maxSnake);
let up = false;
let right = true;
let down = false;
let left = false;

function  initialize()
{
  for (let r = 0; r < rows; r++)
  {
    map[r] = new Array(columns);
  }
  for (let i = 0; i < rows; i++)
  {
    for (let j = 0; j < columns; j++)
    {
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

function  choseDirection(direction)
{
  up = false;
  right = false;
  down = false;
  left = false;
  if (direction == "up")
    up = true;
  else if (direction == "right")
    right = true;
  else if (direction == "down")
    down = true;
  else if (direction == "left")
    left = true;
}

function  snakeMovement()
{
  if (up == true)
    snake[0][0] += 1;
  else if (right == true)
    snake[0][1] += 1;
  else if (down == true)
    snake[0][0] -= 1;
  else if (left == true)
    snake[0][1] += 1;

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
        map[i][j] = 1;
      else
        map[i][j] = 0;
    }
  }


  for (let k = 0; k < rows; k++)
  {
    console.log(map[k]);
  }
}

/*function  caller()
{
  let timer = document.getElementsByClassName("hola");
  timer.addEventListener('click' , drawMovement(), false);
}*/

window.onload = initialize();
window.onload = drawMovement();
//window.onload = caller();

let rows = 50;
let columns = 50;
let map = [rows];
let snake = [];
let up = false;
let right = true;
let down = false;
let left = false;

function  initialize()
{
  for (let i = 0; i < rows; i++)
  {
    for (let j = 0; j < columns; j++)
    {
      map[i][j] = 0;
    }
  }
  snake[0][0] = 20; //Initial position -Y- coordinate
  snake[0][1] = 30; //Initial position -X- coordinate
}

function  choseDirection(direction)
{

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
  drawMovement();
}

function  drawMovement()
{
  for (let i = 0; i < rows; i++)
  {
    for (let j = 0); j < columns; j++)
    {
      if (snake[0][0] == i && snake[0][1] == j)
        map[i][j] = 1;
      else
        map[i][j] = 0;
    }
  }
  if (snake[0][0] == rows)
    snake[0][0] = 0;
  if (snake[0][0] < 0)
    snake[0][0] = rows - 1;
  if (snake[0][1] == columns)
    snake[0][1] = 0
  if (snake[0][1] < 0)
    snake[0][1] = columns - 1;
}

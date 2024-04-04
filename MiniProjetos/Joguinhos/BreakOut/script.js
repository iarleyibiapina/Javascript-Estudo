const grid         = document.querySelector(".grid");
const scoreDisplay = document.querySelector("#score");
const blockWidth   = 100;
const blockHeight  = 20;
const ballDiameter = 20;
const boardWidth   = 560;
const boardHeight  = 300;
let   xDirection   = -2;
let   yDirection   = 2;
//============================================================

// x, y
const userStart           = [230, 10];
const ballStart           = [270, 40];
let   currentPosition     = userStart;
let   ballCurrentPosition = ballStart;
let   timerId;
let   score               = 0;


class Block
{
    constructor(xAxis, yAxis){
        this.bottomLeft  = [xAxis, yAxis];
        this.bottomRight = [xAxis + blockWidth, yAxis];
        this.topLeft     = [xAxis, yAxis + blockHeight];
        this.topRight    = [xAxis + blockWidth, yAxis + blockHeight];
    }
}

// blocks
const blocks = [
    new Block(10,  270),
    new Block(120, 270),
    new Block(230, 270),
    new Block(340, 270),
    new Block(450, 270),
    // 
    new Block(10,  240),
    new Block(120, 240),
    new Block(230, 240),
    new Block(340, 240),
    new Block(450, 240),
    // 
    new Block(10,  210),
    new Block(120, 210),
    new Block(230, 210),
    new Block(340, 210),
    new Block(450, 210),
]

// create a board 
function addBlocks()
{
    for (let i = 0; i < blocks.length; i++) {
        const block = document.createElement("div");
        block.classList.add("block");
        block.style.left   = blocks[i].bottomLeft[0] + "px";
        block.style.bottom = blocks[i].bottomLeft[1] + "px";
        grid.appendChild(block);
    }
}
addBlocks();

function drawUser()
{
    user.style.left   = currentPosition[0] + "px";
    user.style.bottom = currentPosition[1] + "px";
}

function drawBall()
{
    ball.style.left   = ballCurrentPosition[0] + "px";
    ball.style.bottom = ballCurrentPosition[1] + "px";
}

// User
const user = document.createElement("div");
user.classList.add("user");
grid.appendChild(user);
drawUser();

// ball
const ball = document.createElement("div");
ball.classList.add("ball");
grid.appendChild(ball);
drawBall();



// move user 
function moveUser(e)
{
    switch(e.key){
        // x
        case "ArrowLeft":
            // parar no limite
            if(currentPosition[0] > 0){
                currentPosition[0] -= 10;
                drawUser();
            }
            break;
        case "ArrowRight":
            // o tamanho direito é dinamico ao board
            if(currentPosition[0] < boardWidth - blockWidth){
                currentPosition[0] += 10;
                drawUser();
            }
            break;
    }
}

document.addEventListener("keydown", moveUser);

// move ball
function moveBall()
{
    ballCurrentPosition[0] += xDirection;
    ballCurrentPosition[1] += yDirection;
    drawBall();
    checkForCollision();
}

timerId = setInterval(moveBall, 30);

function checkForCollision()
{
    // se bateu no bloco
    for(let i = 0; i < blocks.length; i++){
        if
        (
            (ballCurrentPosition[0] > blocks[i].bottomLeft[0] && ballCurrentPosition[0] < blocks[i].bottomRight[0]) && 
            ((ballCurrentPosition[1] + ballDiameter) > blocks[i].bottomLeft[1] && ballCurrentPosition[1] < blocks[i].topLeft[1])
        ){
            const allBlocks = Array.from(document.querySelectorAll(".block"));
            allBlocks[i].classList.remove("block");
            // pega a posição do elemento e retira em um
            blocks.splice(i, 1);
            changeDirection();
            score++;
            scoreDisplay.innerHTML = score;
            if(blocks.length == 0){
                scoreDisplay.innerHTML = "VOCE VENCEU";
                clearInterval(timerId);
                document.removeEventListener("keydown", moveUser);
            }
        }
    }

    // console.log(ballCurrentPosition[0])
    
    // checa se bateu no lmite do jogo
    if (ballCurrentPosition[0] >= (boardWidth - ballDiameter) || ballCurrentPosition[0] <= 0 || ballCurrentPosition[1] >= (boardHeight - ballDiameter))
    {
      changeDirection()
    }
    //     console.log("d");

    // se bateu no usuario
    if
    (
        (ballCurrentPosition[0] > currentPosition[0] && ballCurrentPosition[0] < currentPosition[0] + blockWidth) &&
        (ballCurrentPosition[1] > currentPosition[1] && ballCurrentPosition[1] < currentPosition[1] + blockHeight) 
    )
    {
        console.log("d");
        changeDirection();
    }

    // game over
    if(ballCurrentPosition[1] <= 0)
    {
        clearInterval(timerId);
        scoreDisplay.innerHTML = "PERDEDOR";
        document.removeEventListener("keydown", moveUser);
    }
}

function changeDirection()
{
    if(xDirection === 2 && yDirection === 2){
        yDirection = -2;
        return;
    }
    if(xDirection === 2 && yDirection === -2){
        xDirection = -2;
        return;
    }
    if(xDirection === -2 && yDirection === -2){
        yDirection = 2;
        return;
    }
    if(xDirection === -2 && yDirection === 2){
        xDirection = 2;
        return;
    }
}
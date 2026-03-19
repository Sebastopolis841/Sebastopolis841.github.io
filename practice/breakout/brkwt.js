//MAGIC!!!
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

//Not magic anymore...

const paddleHeight = 20;
const paddleWidth = 100;
const paddingY = 20;
const speed = 15;

let rightPressed = false;
let leftPressed = false;

let paddleX = (canvas.width - paddleWidth) / 2;

function game() {
    document.getElementById('startGame').style.cursor = "not-allowed";
    document.getElementById('startGame').onclick = "";

    ctx.fillStyle = "#fffdfbff";

    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "green";

    if (rightPressed) {
        paddleX = Math.min(paddleX + 7, canvas.width - paddleWidth);
    } else if (leftPressed) {
        paddleX = Math.max(paddleX - 7, 0);
}

    ctx.fillRect(paddleX,(canvas.height - paddleHeight - paddingY),paddleWidth,paddleHeight);

    requestAnimationFrame(game);
}

//Calling the functions
ctx.fillStyle = "#fffdfbff";

ctx.fillRect(0,0,canvas.width,canvas.height);

//event handler
function seanDown(e) {
  if (e.key === "Right" || e.key === "ArrowRight" || e.key.toLowerCase() === "d") {
    rightPressed = true;
  } else if (e.key === "Left" || e.key === "ArrowLeft" || e.key.toLowerCase() === "a") {
    leftPressed = true;
  }
}

function seanUp(e) {
  if (e.key === "Right" || e.key === "ArrowRight" || e.key.toLowerCase() === "d") {
    rightPressed = false;
  } else if (e.key === "Left" || e.key === "ArrowLeft" || e.key.toLowerCase() === "a") {
    leftPressed = false;
  }
}


//event listener
document.addEventListener('keydown', seanDown);
document.addEventListener('keyup',seanUp);
//MAGIC!!!
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

//Not magic anymore...
ctx.fillStyle = "green";

let x = 0;
let y = 0;
let speed = 10;

function animate() {
    ctx.clearRect(0,0,800,800);

    ctx.fillRect(x,y,75,75);

    requestAnimationFrame(animate);
}

//Calling the functions
animate();

//event handler
function sean(e) {
    if (e.key === "ArrowDown" || e.key.toLowerCase() === "s") {
        y += speed;
    } else if (e.key === "ArrowUp" || e.key.toLowerCase() === "w") {
        y -= speed;
    } else if (e.key === "ArrowLeft" || e.key.toLowerCase() === "a") {
        x -= speed;
    } else if (e.key === "ArrowRight" || e.key.toLowerCase() === "d") {
        x += speed;
    }
}

//event listener
document.addEventListener('keydown', sean);
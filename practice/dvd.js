//MAGIC!!!
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

//Not magic anymore...
ctx.fillStyle = "green";

let x = 0;
let y = 0;
let speedX = 10;
let speedY = 7;
let inverseX = false;
let inverseY = false;

function animate() {
    ctx.clearRect(0,0,800,800);

    if (inverseX) {
        x -= speedX;
    } else {
        x += speedX;
    }

    if (inverseY) {
        y -= speedY;
    } else {
        y += speedY;  
    }

    ctx.fillRect(x,y,75,75);

    if (x >= 725) {
        inverseX = true;
    } else if (x <= 0) {
        inverseX = false;
    }

    if (y >= 725) {
        inverseY = true;
    } else if (y <= 0) {
        inverseY = false;
    }

    requestAnimationFrame(animate);
}

//Call functions
animate();
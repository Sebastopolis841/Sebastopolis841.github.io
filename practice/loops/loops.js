let canvas = document.getElementById("canvas1");
let ctx = canvas.getContext("2d");

//fill in code for canvas1 here
for (let x = 25; x <= 725; x += 100) {
    for (let y = 0; y <= 200; y += 100) {
        ctx.fillRect(x,y,50,20);
    }
}
//end code for canvas1

canvas = document.getElementById("canvas2");
ctx = canvas.getContext("2d");

//fill in code for canvas2 here
for (let y = 100; y <= 700; y += 100) {
    for (let x = 0; x < y; x += 100) {
        ctx.fillRect(x,y,50,20);
    }
}
//end code for canvas2

canvas = document.getElementById("canvas3");
ctx = canvas.getContext("2d");

//fill in code for canvas3 here
for (let y = 100; y <= 700; y += 100) {
    for (let x = 0; x < y; x += 100) {
        ctx.fillRect(x,y,50,20);
    }
}

for (let y = 0; y <= 600; y += 100) {
    for (let x = 800; x > y; x -= 100) {
        ctx.fillRect(x,y,50,20);
    }
}
//end code for canvas3

canvas = document.getElementById("canvas4");
ctx = canvas.getContext("2d");

//fill in code for canvas4 here
let inv = false;
for (let y = 0; y <= 800; y += 100) {
    for (let x = 0; x <= 700; x += 200) {
        if (inv == false) {
            ctx.fillRect(x,y,100,100);
        } else {
            ctx.fillRect(x + 100,y,100,100);
        }
    }

    if (inv == false) {
        inv = true;
    } else {
        inv = false;
    }
}
//end code for canvas4
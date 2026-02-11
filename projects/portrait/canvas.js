//MAGIC
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//background
ctx.fillStyle = "#1ccaff";
ctx.fillRect(0,0,1200,800);

//head
ctx.fillStyle = "#eac09d";
ctx.beginPath();
ctx.arc(600,400,200,0,2*Math.PI);
ctx.fill();

//neck
ctx.fillRect(500,550,200,100);

//eyes
//sclera
ctx.fillStyle = "white";

//left
ctx.beginPath();
ctx.ellipse(520,350,50,25,0,0,2*Math.PI);
ctx.fill();

//right
ctx.beginPath();
ctx.ellipse(680,350,50,25,0,0,2*Math.PI);
ctx.fill();

//iris
ctx.fillStyle = "#382e3c";

//left
ctx.beginPath();
ctx.arc(520,350,20,0,2*Math.PI);
ctx.fill();

//right
ctx.beginPath();
ctx.arc(680,350,20,0,2*Math.PI);
ctx.fill();

//pupil
ctx.fillStyle = "black";

//left
ctx.beginPath();
ctx.arc(520,350,10,0,2*Math.PI);
ctx.fill();

//right
ctx.beginPath();
ctx.arc(680,350,10,0,2*Math.PI);
ctx.fill();

//mouth
ctx.strokeStyle = "black";
ctx.lineWidth = 3;

ctx.beginPath();
ctx.moveTo(545,468);
ctx.lineTo(550,470);
ctx.lineTo(650,470);
ctx.stroke();

//nose
ctx.beginPath();
ctx.moveTo(600,400);
ctx.lineTo(610,430);
ctx.lineTo(600,430);
ctx.stroke();

//hair
ctx.fillStyle = "#595144";

ctx.beginPath();
ctx.arc(600,400,200,1.15*Math.PI,1.85*Math.PI);
ctx.lineTo(680,270);
ctx.fill();
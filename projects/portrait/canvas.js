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
ctx.fillRect(500,550,200,120);

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

//sweater
ctx.fillStyle = "black";
ctx.strokeStyle = "#383838ff";
ctx.lineWidth = 6;

ctx.beginPath();
ctx.moveTo(200,800);
ctx.lineTo(200,730);
ctx.arc(230,700,30,Math.PI,1.5*Math.PI);
ctx.lineTo(940,670);
ctx.arc(970,700,30,1.5*Math.PI,0);
ctx.lineTo(1000,800);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(400,800);
ctx.lineTo(400,750);
ctx.moveTo(800,800);
ctx.lineTo(800,750);
ctx.stroke();

//neckhole
ctx.fillStyle = "#eac09d";
ctx.lineWidth = 10

ctx.beginPath();
ctx.ellipse(600,668,100,50,0,0,Math.PI);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.ellipse(600,668,100,50,0,0,2*Math.PI);
ctx.fill();

//glasses
ctx.strokeStyle = "#3d3e42"
ctx.lineWidth = 4;

ctx.beginPath();

//left side

ctx.moveTo(410,330);
ctx.lineTo(422,318);
ctx.lineTo(468,327);
ctx.lineTo(468,370);
ctx.lineTo(473,375);
ctx.lineTo(568,375);
ctx.lineTo(573,370);
ctx.lineTo(573,327);
ctx.lineTo(468,327);

//right side

ctx.lineTo(628,327);
ctx.lineTo(628,370);
ctx.lineTo(633,375);
ctx.lineTo(728,375);
ctx.lineTo(733,370);
ctx.lineTo(733,327);
ctx.lineTo(628,327);
ctx.moveTo(733,327);
ctx.lineTo(777,318);
ctx.lineTo(789,330);
ctx.stroke();
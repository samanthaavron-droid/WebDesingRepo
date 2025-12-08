const canvas = document.getElementById("canvasID");
const g = canvas.getContext("2d");
const butt = document.getElementById("ChristmasBB");
const clr = document.getElementById("clear");

butt.addEventListener("click", christmasTree);

function christmasTree(){
//trunk
g.fillStyle = "#8B4513";
g.fillRect(canvas.width / 2 - 15, canvas.height / 2 + 80, 30, 60);

//tree layers
g.fillStyle = "#228B22";
const centerX = canvas.width / 2;
const startY = canvas.height / 2 - 100;

//bottom layer
g.beginPath();
g.moveTo(centerX, startY + 100);
g.lineTo(centerX - 80, startY + 100 + 80);
g.lineTo(centerX + 80, startY + 100 + 80);
g.closePath();
g.fill();
g.stroke();

//middle layer
g.beginPath();
g.moveTo(centerX, startY + 50);
g.lineTo(centerX - 60, startY + 50 + 70);
g.lineTo(centerX + 60, startY + 50 + 70);
g.closePath();
g.fill();
g.stroke();

//top layer
g.beginPath();
g.moveTo(centerX, startY);
g.lineTo(centerX - 40, startY + 60);
g.lineTo(centerX + 40, startY + 60);
g.closePath();
g.fill();
g.stroke();

//star
g.fillStyle = "#FFD700";
g.beginPath();
g.moveTo(centerX, startY - 20);
g.lineTo(centerX + 10, startY - 5);
g.lineTo(centerX + 20, startY - 5);
g.lineTo(centerX + 12, startY + 5);
g.lineTo(centerX + 15, startY + 20);
g.lineTo(centerX, startY + 12);
g.lineTo(centerX - 15, startY + 20);
g.lineTo(centerX - 12, startY + 5);
g.lineTo(centerX - 20, startY - 5);
g.lineTo(centerX - 10, startY - 5);
g.closePath();
g.fill();
g.stroke();

g.fillStyle = "#000000ff";
g.font = "bold 32px Arial";
g.textAlign = "center";
g.fillText("Merry Christmas", canvas.width / 2, canvas.height - 30);
}
"use strict";

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

//fjell
ctx.beginPath(); //deklarerer at vi skal begynne å tegne
ctx.moveTo(0, 100); //setter et start punkt til hvor vi skal begynne å tegne - en x og en y verdi
ctx.lineTo(200, 270); //setter slutt punktet til streken vår
ctx.lineTo(400, 100);
ctx.lineTo(700, 300);
ctx.strokeStyle = "grey";
ctx.stroke(); //tegner streken

//sol
ctx.beginPath();
ctx.arc(150, 80, 35, 0, 2 * Math.PI); //vi ganger med to for å få en hel sirkel
ctx.strokeStyle = "yellow";
ctx.fillStyle = "yellow";
ctx.fill();
ctx.stroke();

//hus1
ctx.beginPath();
ctx.fillStyle = "red";
ctx.fillRect(420, 370, 150, 150);
ctx.fill();
ctx.stroke();

//hus1_dør
ctx.beginPath();
ctx.fillStyle = "green";
ctx.fillRect(480, 475, 30, 45);
ctx.fill();
ctx.stroke();

//hus1_tak
ctx.beginPath();
ctx.moveTo(420, 370);
ctx.lineTo(495, 300);
ctx.lineTo(570, 370);
ctx.fillStyle = "black";
ctx.fill();
ctx.stroke();

//hus2
ctx.beginPath();
ctx.fillStyle = "orange";
ctx.fillRect(150, 370, 150, 150);
ctx.fill();
ctx.stroke();

//hus2_dør
ctx.beginPath();
ctx.fillStyle = "blue";
ctx.fillRect(210, 475, 30, 45);
ctx.fill();
ctx.stroke();

//hus2_tak
ctx.beginPath();
ctx.moveTo(150, 370);
ctx.lineTo(225, 300);
ctx.lineTo(300,370);
ctx.fillStyle = "black";
ctx.fill();
ctx.stroke();

//tekst
ctx.font = "18px Arial";
ctx.fillText("Katarina", 10, 540);
ctx.fillText("DAT101", 10, 560);
ctx.fillText("UiA", 10, 580);
const canvas = document.getElementById("canvas");
const body = document.querySelector('body');

let linewidth = 5;
let color = '';
let X = null;
let Y = null;
var draw = false;

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

body.style.backgroundColor = "#FFFFFF";

var input = document.getElementById("typecolor");
input.addEventListener("input",function(){
        color = input.value;
        body.style.backgroundColor = color;
},false);

const ctx = canvas.getContext("2d");
ctx.lineWidth = linewidth;

document.getElementById("ageInputId").oninput = function() {
    draw = false;
    linewidth = document.getElementById("ageInputId").value;
    document.getElementById("ageOutputId").innerHTML = lineW;
    ctx.lineWidth = lineW;
}; 

let colr = document.querySelectorAll(".btn");
colr = Array.from(colr);
colr.foreach(btn=>{
     btn.addEventListener("click",()=>{
    ctx.strokeStyle = btn.dataset.btn;
    });
});

let clrbtn = document.querySelector(".clear");
clrbtn.addEventListener("click",()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
});

let saveBtn = document.querySelector(".save")
saveBtn.addEventListener("click", () => {
    let data = canvas.toDataURL("image/png");
    let a = document.createElement("a")
    a.href = data
    a.download = "sketch.png"
    a.click()
})

window.addEventListener("mousedown",(e)=>draw=true);
window.addEventListener("mouseup",(e)=>draw=false);

window.addEventListener("mousemove",(e)=>{
    if(X==null||Y==null||!draw){
       X = e.clientX;
       Y = e.clientY;
       return;
    }
    let currX = e.clientX;
    let currY = e.clientY;
    
    ctx.beginPath();
    ctx.moveTo(X,Y);
    ctx.lineTo(currX,currY);
    ctx.stroke();

    X = currX;
    Y = currY;
});


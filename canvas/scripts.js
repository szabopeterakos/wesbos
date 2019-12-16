console.log("canvas");

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth - 10;
canvas.height = window.innerHeight - 10;
ctx.strokeStyle = "#BADA55";
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.lineWidth = 10;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
    if (!isDrawing) return;
    console.log(e);
    ctx.strokeStyle = `hsl(${hue},100%,40%)`;
    // ctx.lineWidth = hue;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastY, lastX] = [e.offsetY, e.offsetX];
    hue++;
    if (hue >= 360) {
        hue = 0;
    }
    if (ctx.lineWidth >= 50 || ctx.lineWidth <= 1) {
        direction = !direction;
    }
    if (direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", e => {
    isDrawing = true;
    [lastY, lastX] = [e.offsetY, e.offsetX];
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));

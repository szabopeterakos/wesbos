console.log("clock");

const secondsTicker = document.querySelector(".seconds");
const minutesTicker = document.querySelector(".mins");
const hoursTicker = document.querySelector(".hours");

hoursTicker.style.filter = "contrast(0.9)";
minutesTicker.style.filter = "contrast(0.6)";
secondsTicker.style.filter = "contrast(0.3)";

function setDate() {
    const now = new Date();
    const second = now.getSeconds();
    const min = now.getMinutes();
    const hour = now.getHours();
    const secondsToDegrees = (360 / 60) * second + 90;
    const minToDegrees = (360 / 60) * min + 90;
    const hoursToDegrees = (360 / 60) * hour + 90;
    console.log("TCL: setDate -> secondsToDegrees", secondsToDegrees);
    console.log("TCL: setDate -> second", second);
    secondsTicker.style.transform = `rotate(${secondsToDegrees}deg)`;
    minutesTicker.style.transform = `rotate(${minToDegrees}deg)`;
    hoursTicker.style.transform = `rotate(${hoursToDegrees}deg)`;
}

setInterval(setDate, 1000);

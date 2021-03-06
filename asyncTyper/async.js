console.log("async");
const texts = document.querySelectorAll("body > h1,p");

async function animate(el) {
    const text = el.innerText;
    let displayedText = "";
    const { min, max } = el.dataset;
    console.log("TCL: animate -> min, max", min, max);
    for (char of text) {
        displayedText += char;
        el.innerHTML = displayedText;
        await wait(randomTimeout(min, max));
    }

    console.log(text);
}

function wait(ms = 0) {
    return new Promise(res => setTimeout(res, ms));
}

function randomTimeout(min = 15, max = 200, number = Math.random()) {
    return Math.floor(number * (max - min) + min);
}

texts.forEach(animate);

console.log("dad fun");

const JOKES_MIN_LENGTH = 110;
const dqs = document.querySelector.bind(document);
const dqsa = document.querySelectorAll.bind(document);
const [dot1, dot2, dot3] = dqsa(".loading > span");
const loadingEl = dqs(".loading");
let jokeIsArrived = false;
const [containerEl, jokeEl, buttonEl, spinnerEl] = [
    dqs(".jokesContainer"),
    dqs(".joke"),
    dqs(".btn"),
    dqs(".loading")
];

const buttonTexts = ["another", "come on", "oh god", "no way"];

async function loadingAnimation() {
    const wait = (ms = 300) => new Promise(res => setTimeout(res, ms));

    while (!jokeIsArrived) {
        await wait(500);
        dot1.classList.remove("hide");
        await wait();
        dot2.classList.remove("hide");
        await wait();
        dot3.classList.remove("hide");
        await wait(500);
        [dot1, dot2, dot3].forEach(dot => {
            dot.classList.add("hide");
        });
    }
    return;
}

function displayJoke({ joke }) {
    jokeEl.innerHTML = joke;
}

function loadJoke() {
    loadingEl.dispatchEvent(
        new CustomEvent("jokeIsArrived", { detail: false })
    );
    spinnerEl.classList.remove("hidden");
    jokeEl.classList.add("hidden");
    buttonEl.classList.add("hidden");
    loadingAnimation();
}

function arivedJoke() {
    loadingEl.dispatchEvent(new CustomEvent("jokeIsArrived", { detail: true }));
    jokeEl.classList.remove("hidden");
    spinnerEl.classList.add("hidden");
    buttonEl.classList.remove("hidden");
}

async function getRandomJoke() {
    loadJoke();

    let endpoint;
    let data;

    do {
        endpoint = await fetch("https://icanhazdadjoke.com/", {
            headers: {
                Accept: "application/json"
            }
        });
        data = await endpoint.json();
    } while (data.joke.length < JOKES_MIN_LENGTH);

    arivedJoke();
    displayJoke(data);
}

getRandomJoke();

buttonEl.addEventListener("click", getRandomJoke, { once: false });
loadingEl.addEventListener("jokeIsArrived", arrived => {
    jokeIsArrived = arrived.detail;
});

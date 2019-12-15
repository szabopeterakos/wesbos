const keys = document.querySelectorAll(".keys");
const audio = document.querySelector("audio");

function playAudio() {
    audio.currentTime = 0;
    audio.play();
}

function hitProperKey(e) {
    keys.forEach(k => {
        const code = k.getAttribute("code");
        if (code == e.code) {
            k.classList.add("play");
            playAudio();
        }
    });
}

function clearPlayingAnimation(e) {
    if (e.propertyName !== "transform") {
        return;
    }
    this.classList.remove("play");
}

clearPlayingAnimation2 = e => {
    if (e.propertyName !== "transform") {
        return;
    }
    this.classList.remove("play");
};

window.addEventListener("keydown", hitProperKey);

keys.forEach(k => {
    k.addEventListener("transitionend", clearPlayingAnimation);
});

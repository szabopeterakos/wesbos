console.log("video master");

const page = document.querySelector("body");
const video = document.querySelector("video");
const play = document.querySelector(".play");
const volume = document.querySelector("#volume");
const speed = document.querySelector("#playbackRate");
const skip = document.querySelector("#skip");
const skipMore = document.querySelector("#skipMore");
const progressbarFilled = document.querySelector(".progressbarFilled");
const progressbar = document.querySelector(".progressbar");

function handlePlay() {
    if (video.paused) {
        video.play();
        play.dataset.content = "\u275A\u275A";
    } else {
        play.dataset.content = "\u25BA";
        video.pause();
    }
}

function handleSlider() {
    video[this.id] = this.value;
}

function handleSkip() {
    console.dir(this.dataset.skip);
    video.currentTime += parseInt(this.dataset.skip);
}

function handleProgress() {
    const percentage = (video.currentTime / video.duration) * 100;
    progressbarFilled.style.width = `${percentage}%`;
}

let previousVolume = 1;
let isMuted = false;
function handleKeyboard(e) {
    console.dir(e);
    if (e.code === "Space" || e.type === "click") {
        handlePlay();
    } else if (e.code === "KeyM") {
        if (!isMuted) {
            previousVolume = video.volume;
            video.volume = 0;
        } else {
            video.volume = previousVolume;
        }
        isMuted = !isMuted;
    }
}

function handleProgressSlider(e){
  console.log(this.offsetWidth);
  console.dir(e.offsetX);
  const percentage = (e.offsetX / this.offsetWidth) * 100;
  progressbarFilled.style.width = `${percentage}%`;
  video.currentTime = (percentage/100) * video.duration;
}

video.addEventListener("timeupdate", handleProgress);
video.addEventListener("click", handleKeyboard);
play.addEventListener("click", handlePlay);
skip.addEventListener("click", handleSkip);
skipMore.addEventListener("click", handleSkip);
speed.addEventListener("change", handleSlider);
volume.addEventListener("change", handleSlider);
page.addEventListener("keydown", handleKeyboard);
progressbar.addEventListener("click", handleProgressSlider);
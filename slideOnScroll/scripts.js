console.log("slide in/out");

const images = document.querySelectorAll(".img");

function handleScroll() {
    images.forEach(image => {
        const slideInLine = window.innerHeight + window.scrollY; // half way through the image
        const actionLine = slideInLine - image.clientHeight / 2;

        const imageBottom = image.offsetTop + image.clientHeight; // how far the image is the window top line
        const isHalfShown = actionLine > image.offsetTop;
        const isNotScrolledPast = window.scrollY <= imageBottom;

        if (isHalfShown && isNotScrolledPast) {
            image.classList.add("hover");
        } else {
            image.classList.remove("hover");
        }
    });
}

window.addEventListener("scroll", handleScroll);

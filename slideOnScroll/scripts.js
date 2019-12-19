console.log("slide in/out");

const images = document.querySelectorAll(".img");

function handleScroll() {
    images.forEach(image => {
        const windowBottomLine = window.innerHeight + window.scrollY; // half way through the image
        const actionLine = windowBottomLine - image.clientHeight / 3; // when the third of the image is shown

        const imageBottom = image.offsetTop + image.clientHeight; // how far the image is the window top line + image hieght top to bottom
        const isThirdShown = actionLine > image.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;

        if (isThirdShown && isNotScrolledPast) {
            image.classList.add("hover");
        } else {
            image.classList.remove("hover");
        }
    });
}

window.addEventListener("scroll", handleScroll);

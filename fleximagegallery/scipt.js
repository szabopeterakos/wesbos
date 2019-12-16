console.log("gallery");
console.log("https://flexbox.io/");

const panels = document.querySelectorAll(".panel");
console.log("TCL: panels", panels);

function toggleOpen() {
    panels.forEach(p=>p.classList.remove("open"))
    this.classList.toggle("open");
}

function toggleActive(e) {
    if(e.propertyName.includes('flex')){
        console.log(e.propertyName);
        this.classList.toggle("open-active");
    }
}

panels.forEach(panel => {
    panel.addEventListener("click", toggleOpen);
    panel.addEventListener("transitionend", toggleActive);
}
);

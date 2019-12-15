console.log("css-update");

const inputs = document.querySelectorAll(".container input");
console.log("TCL: inputs", inputs);

function handleUpdate() {
    const suffix = this.dataset.sizing || "";
    console.log(suffix, this.name, this.value);
    document.documentElement.style.setProperty(
        `--${this.name}`,
        this.value + suffix
    );
}

inputs.forEach(i => i.addEventListener("change", handleUpdate));
inputs.forEach(i => i.addEventListener("mousemove", handleUpdate));

console.log("check-box");

const container = document.querySelector(".container");
let i = 0;
let previous = undefined;
let current = undefined;
let max, min;

function htmlTeplate(x) {
    return `<div class="item" data-index="${i++}">
    <span>
    <input type="checkbox"/>
    </span>
    <p>${x}</p>
    </div>`;
}
let html = "";
[
    "lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipiscing",
    "elit",
    "curabitur",
    "vel",
    "hendrerit",
    "velit",
    "eros"
].forEach(x => {
    html += htmlTeplate(x);
});

container.innerHTML = html;
const items = document.querySelectorAll(".item");
items.forEach(i => i.addEventListener("click", select));

// the above are set the items :) those sould be another file :)

function reset() {
    [current, previous] = [undefined, undefined];
}

function setChecked(isChecked) {
    items.forEach(item => {
        const itemIndex = Number(item.getAttribute("data-index"));
        if (itemIndex >= Number(min) && itemIndex <= Number(max)) {
            item.querySelector("input").setAttribute("checked", `${isChecked}`);
        }
    });
}

function getMaxMin() {
    [max, min] =
        Number(current) > Number(previous)
            ? [current, previous]
            : [previous, current];
}

function select() {
    const selected = this.getAttribute("data-index");
    if (!current && !previous) {
        previous = selected;
        items.forEach(item => {
            item.querySelector("input").removeAttribute("checked");
            item.classList.remove("selected");
        });

        this.classList.add("selected");
    } else if (!current && previous) {
        current = selected;
        this.classList.add("selected");

        //get the max.min values
        getMaxMin();

        console.log("TCL: select -> [max, min]", [max, min]);
        // iterate and add checked when the data-index is between max.min
        items.forEach(item => {
            const itemIndex = Number(item.getAttribute("data-index"));
            if (itemIndex >= Number(min) && itemIndex <= Number(max)) {
                item.querySelector("input").setAttribute("checked", "true");
            }
        });
        setChecked(true);
        reset();
    }
}

setTimeout(() => {
    items[5].querySelector("input").removeAttribute("checked");
}, 4000);

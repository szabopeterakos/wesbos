console.log("hey");

const containerElement = document.querySelector(".container");
const inputcontainerElement = document.querySelector(".inputContainer");
const inputElement = inputcontainerElement.querySelector("input");
const itemsElements = document.querySelector("ul");

let items = [
    { name: "egg", id: new Date().getTime() - 234, isChecked: false },
    { name: "ham", id: new Date().getTime() - 432, isChecked: false }
];

function dispalyItems() {
    const data = getPersistedData();
    items = data;
    const html = items
        .map(x => {
            return `<li data-value="${x.id}">${x.name}</li>`;
        })
        .join("");

    itemsElements.innerHTML = html;
}

function addToList(e) {
    e.preventDefault();
    if (inputElement.value.trim().length === 0) {
        return;
    }
    const item = {
        name: inputElement.value,
        id: new Date().getTime(),
        isChecked: false
    };
    items.push(item);
    persistData();
    itemsElements.dispatchEvent(new CustomEvent("itemsUpdated"));
    resetForm();
}

function resetForm() {
    inputcontainerElement.reset();
}

function persistData() {
    localStorage.setItem("items", JSON.stringify(items));
}

function initData() {
    console.log(localStorage.getItem("items"));
    if (!localStorage.getItem("items")) {
        localStorage.setItem("items", JSON.stringify(items));
    }
}

function getPersistedData() {
    const data = localStorage.getItem("items");
    return JSON.parse(data);
}

function handleListItemClick(e) {
    console.dir(e.target);
    const foundItem = items.find(
        i => i.id === parseInt(e.target.dataset.value)
    );
    console.log("TCL: handleListItemClick -> foundItem", foundItem);

    items = items.filter(x => x.id !== foundItem.id);
    console.log("TCL: handleListItemClick -> items", items);
    persistData();
    itemsElements.dispatchEvent(new CustomEvent("itemsUpdated"));
}

inputcontainerElement.addEventListener("submit", addToList);
itemsElements.addEventListener("itemsUpdated", dispalyItems);
itemsElements.addEventListener("click", handleListItemClick);
initData();
dispalyItems();

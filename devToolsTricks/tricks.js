console.log("dewtools tricks");
console.log("dewtools tricks");
console.clear();
console.log("dewtools tricks");
const element = document.querySelector("p");

function resize() {
    element.style.color = "orange";
    element.style.fontSize = "50px";
    element.style.transition = "all 0.2s";
}

console.log("regular log");
console.error("regular log");
console.warn("regular log");
console.table(["table log1", "table log2", "table log3"]);

console.assert(false, "it happens when 'false'");

console.log("%c this is a styled text", "background-color:orange; color:gray;");
console.log(
    "%c this is a styled %s text",
    "background-color:orange; color:gray;",
    "MAZSOLA"
);

console.log(element);
console.dir(element);

console.groupCollapsed(`number`);
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].forEach(x => {
    console.log(x);
});
console.groupEnd(`number`);

console.group(`number not collapsed`);
[1, 2, 3, 4, 5].forEach(x => {
    console.log(x);
});
console.groupEnd(`number not collapsed`);

console.time("fetching time");
fetch("http://api.github.com/users")
    .then(data => data.json())
    .then(data => {
        console.timeEnd("fetching time");
        console.log(data);
    });

console.log("more array method");

const person = [
    { name: "Alfa", age: 16 },
    { name: "Beta", age: 26 },
    { name: "Gamma", age: 36 },
    { name: "Tetha", age: 11 },
    { name: "Quatro", age: 9 },
    { name: "Minerva", age: 20 },
    { name: "Monster", age: 19 },
    { name: "Pi", age: 21 }
];

const someIsOld = person.some(x => x.age > 35);
console.log("TCL: someIsOld", someIsOld);

const everioneIsMoreThanEight = person.every(x => x.age > 8);
console.log("TCL: everioneIsMoreThanEight", everioneIsMoreThanEight);

const foundFirstWhoExactly11 = person.find(x => x.age === 11);
const findTheFirstWhoOlderThan11 = person.find(x => x.age > 11);
const foundFirstWhoContainsER = person.find(x => x.name.includes("er"));

console.table([
    foundFirstWhoExactly11,
    findTheFirstWhoOlderThan11,
    foundFirstWhoContainsER
]);

const findIndex = person.findIndex(x => x.age === 16);
const newPersonArray = [
    ...person.slice(0, findIndex),
    ...person.slice(findIndex + 1)
];
console.log("TCL: newPersonArray", newPersonArray);

const body = document.querySelector("body");
body.innerHTML = `<div class="container"></div>`;

const container = body.querySelector(".container");

const ordered = newPersonArray.sort((a, b) => a.name.length - b.name.length);
console.log("TCL: ordered", ordered);

const htmlTable = ordered
    .map(p => {
        return `<div>${p.name}</div>`;
    })
    .join("");

container.innerHTML = htmlTable;

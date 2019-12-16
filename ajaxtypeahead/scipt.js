console.log("ajax typing ahead");

const sourceURL =
    "https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/6ee538beca8914133259b401ba47a550313e8984/countries.json";

const cities = [];
const testarray = ["monoki", "lola", "pisiniti", "vivaldi"];

fetch(sourceURL)
    .then(resp => resp.json())
    .then(data => {
        Object.values(data).forEach(x => {
            cities.push(...x);
        });
    })
    .then(() => {
        console.log("TCL: cities", cities);
    });

function findMatches(word, words) {
    return words.filter(place => {
        const regexp = new RegExp(word, "gi");
        return place.match(regexp);
    });
    // return words.filter(place => place.toUpperCase().includes(word.toUpperCase()));
}

function displayMatches() {
    const array = findMatches(this.value, cities);
    const html = array
        .map(elem => {
            const regexp = new RegExp(this.value, "gi");
            const displayname = elem.replace(regexp,`<span class="highlight">${this.value}</span>`)

            return `<option>${displayname}
        </option>`;
        })
        .join("");
    suggestions.innerHTML = html;
    console.log("TCL: displayMatches -> array", array);
    console.log(this.value);
}

console.log(findMatches("bos", ["Boston", "Piri", "Qenbos"]));

const input = document.querySelector("input");
const suggestions = document.querySelector("#cities");
input.addEventListener("change", displayMatches);

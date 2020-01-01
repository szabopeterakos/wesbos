console.log("currencier :)");
import { rateKeys } from "./ratesKeys.js";
const input = document.querySelector("input");
const to_amount = document.querySelector(".to_amount");
const form = document.querySelector("form");
const selects = document.querySelectorAll("select");

const basicAPI = `https://api.exchangeratesapi.io/latest?base=`;
let to = "CAD";
let from = "CAD";

(function addCurrencys() {
    const html = rateKeys.map(key => `<option>${key}</option>`).join("");
    selects[0].innerHTML = html;
    selects[1].innerHTML = html;
})();

async function getfetch(to) {
    const response = await fetch(basicAPI + to).catch(err => {
        console.log("err:", err);
    });

    return await response.json();
}

function calculate(from, to, amount, response) {
    const rate = response.rates[to];
    return rate * amount;
}

async function handleChange(e) {
    const value = input.value;
    from = selects[0].value;
    to = selects[1].value;
    const data = await getfetch(from);
    const displayedValue = calculate(from, to, value, data);
    to_amount.innerHTML = "$ " + displayedValue.toFixed(1);
}

form.addEventListener("submit", handleChange);
form.addEventListener("submit", e => e.preventDefault());

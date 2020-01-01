console.log("currencier :)");
import { rateKeys } from "./ratesKeys.js";
import { handleChange } from "./handler.js";

const input = document.querySelector("input");
const to_amount = document.querySelector(".to_amount");
const form = document.querySelector("form");
const selects = document.querySelectorAll("select");

let to = "CAD";
let from = "CAD";

(function addCurrencys() {
    const html = rateKeys.map(key => `<option>${key}</option>`).join("");
    selects[0].innerHTML = html;
    selects[1].innerHTML = html;
})();

form.addEventListener(
    "submit",
    handleChange.bind(null, input, selects, to_amount, from, to)
);
form.addEventListener("submit", e => e.preventDefault());

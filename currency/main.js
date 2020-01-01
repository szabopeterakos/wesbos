console.log("currencier :)");

const input = document.querySelector("input");
const to_amount = document.querySelector(".to_amount");
const form = document.querySelector("form");
const selects = document.querySelectorAll("select");
console.log("TCL: selects", selects);
const rateKeys = [
    "CAD",
    "HKD",
    "ISK",
    "PHP",
    "DKK",
    "HUF",
    "CZK",
    "GBP",
    "RON",
    "SEK",
    "IDR",
    "INR",
    "BRL",
    "RUB",
    "HRK",
    "JPY",
    "THB",
    "CHF",
    "EUR",
    "MYR",
    "BGN",
    "TRY",
    "CNY",
    "NOK",
    "NZD",
    "ZAR",
    "USD",
    "MXN",
    "SGD",
    "AUD",
    "ILS",
    "KRW",
    "PLN"
];

const basicAPI = `https://api.exchangeratesapi.io/latest?base=`;
let to = "USD";
let from = "USD";

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
    console.log(
        "TCL: calculate -> from, to, amount",
        from,
        to,
        amount,
        response
    );
    const rate = response.rates[to];
    console.log("TCL: calculate -> rate", rate);
    return rate * amount;
}

async function handleChange(e) {
    const value = input.value;
    from = selects[0].value;
    to = selects[1].value;
    const data = await getfetch(from);
    const displayedValue = calculate(from, to, value, data);
    console.log("TCL: handleChange -> displayedValud", displayedValue);
    to_amount.innerHTML = "$ " + displayedValue.toFixed(1);
}

form.addEventListener("submit", handleChange);
form.addEventListener("submit", e => e.preventDefault());

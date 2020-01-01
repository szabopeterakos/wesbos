const basicAPI = `https://api.exchangeratesapi.io/latest?base=`;

export async function getfetch(to) {
    const response = await fetch(basicAPI + to).catch(err => {
        console.log("err:", err);
    });

    return await response.json();
}

export function calculate(from, to, amount, response) {
    const rate = response.rates[to];
    return rate * amount;
}

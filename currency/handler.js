import { getfetch, calculate } from "./utils.js";
export async function handleChange(input, selects, to_amount, from, to) {
    const value = input.value;
    from = selects[0].value;
    to = selects[1].value;
    const data = await getfetch(from);
    const displayedValue = calculate(from, to, value, data);
    to_amount.innerHTML = "$ " + displayedValue.toFixed(1);
}

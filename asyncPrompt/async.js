console.log("popup");
/* SETUP DOM ELEMENTS */
const [btnSend, btnCancel, btn1, btn2] = document.querySelectorAll(".btn");
const popup = document.querySelector(".modal");
const input = document.querySelector("input");
const span = document.querySelector("fieldset > span");

/* INIT QUESTIONS */
const questions = [
    "what is your name?",
    "what is your age?",
    "what is your favourite animal?"
];

/* HANDLE FUNCTIONS */
const wait = (ms = 0) => new Promise(res => setTimeout(res, ms));
async function asyncMap(array, callback) {
    const results = [];
    for (const item of array) {
        results.push(await callback(item));
    }
    return results;
}
async function showPopup(q) {
    await wait(1000);
    popup.classList.add("show");
    input.parentElement.parentElement.reset();
    span.innerHTML = q;
}
async function hidePopup() {
    await wait(0);
    popup.classList.remove("show");
}

/* APPLICATION LOGIC */
function popupHandler(q) {
    return new Promise(async res => {
        function sendHandler(e) {
            e.preventDefault();

            // set the promise resolve
            res(input.value);

            hidePopup();
        }

        btnSend.addEventListener("click", sendHandler);
        showPopup(q);
    });
}

async function asyncRunner() {
    const answers = await asyncMap(questions, popupHandler);
    console.log(answers);
}

asyncRunner();

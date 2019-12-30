console.log("async exercise");

console.log("in main A.");

// fetch("https://api.github.com/users")
//     .then(x => x.json())
//     .then(x => {
//         console.log("TCL: x", x);
//     });

const wait2 = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));
const rawData = fetch("https://api.github.com/users");

async function doit() {
    console.log("in async function 1. as START");
    const response = await rawData; // give a Promise<Response>
    const jsonData = await response.json(); // give a Promise<any>

    const users = jsonData.map(user => user.login).filter(x => x.length < 6);

    /* the forEach not works but the for in/of works */

    // users.forEach(async user => {
    //     console.log("TCL: doit -> users", user);
    //     await wait2(533);
    // });
    console.log("in async function 2. as FREEZ START");
    console.time("for freez becouse in async function");
    for (let i = 0; i < 3000000000; i++) {}
    console.timeEnd("for freez becouse in async function");

    console.log("in async function 3. as FREEZ END");

    for (user of users) {
        console.log("TCL: USERS with random WAIT:", user);
        await wait2(Math.floor(Math.random() * 500) + 1);
    }
    console.log("in async function 4 as END.");
}

console.log("in main B.");
doit();
console.log("in main C.");

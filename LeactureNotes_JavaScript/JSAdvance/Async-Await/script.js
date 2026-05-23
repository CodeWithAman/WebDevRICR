// function orderFood() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Food delivered");
//         }, 6000);
//     });
// }

// async function eatFood() {
//     let result = await orderFood();

//     console.log(result);
// }

// eatFood();




function loginAccount() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Login successful");
            resolve();
        }, 1000);
    });
}

function bookTicket() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Train ticket booked");
            resolve();
        }, 1000);
    });
}

async function bookTrainTicket() {
    await loginAccount();

    await bookTicket();

    console.log("Booking completed");
}

bookTrainTicket();
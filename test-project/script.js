// const password = prompt("please enter a new password");

// if (password.length >= 6) {
//     if (password.indexOf(' ') === -1) {
//         console.log("Valid password!");
//     } else {
//         console.log("Password cannot contain spaces");
//     }
// } else {
//     console.log("PASSWORD TOO SHORT! Must be 6+ characters");

// }


// 

const age = 4;

if ((age >= 0 && age<5) || age >= 65) {
    console.log("FREE");
} else if (age >= 5 && age < 10) {
    console.log("$10");
} else if (age >= 10 && age < 65) {
    console.log("$20");
} else {
    console.log("INVALID AGE!");
}
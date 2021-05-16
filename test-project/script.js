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

// const age = 4;

// if ((age >= 0 && age<5) || age >= 65) {
//     console.log("FREE");
// } else if (age >= 5 && age < 10) {
//     console.log("$10");
// } else if (age >= 10 && age < 65) {
//     console.log("$20");
// } else {
//     console.log("INVALID AGE!");
// }

// for(let i =0 ; i<= 10 ;  i++){
//     console.log(i);
// }

// for(let i =0;i <= 20 ;i++){
//     if(i%2==0){
//         console.log(i + ": EVEN NUMBER!!");
//     }
//     else {
//         console.log(i + ": ODD NUMBER!!");
//     }
// }

// for(let i = 100 ; i > 0 ; i-=10){
//     console.log(i);
// }
// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// WRITE YOUR LOOP BELOW THIS LINE:

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i].toUpperCase());
// }

// let input = prompt("Hey, say something!");
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === "stop copying me") {
//         break;
//     }
// }

// console.log("YOU WIN!!");

// Writing a Guessing Game
// let maximum = parseInt(prompt("Enter the maximum number!"));

// while (!maximum){
//     maximum = parseInt(prompt("Enter a valid number!"));
// }

// const targetNum = Math.floor(Math.random() * maximum ) + 1;
// console.log(targetNum);

// let guess = parseInt(prompt("Enter your first guess!"));
// let attemps = 1;


// while (parseInt(guess) !== targetNum) {

//     attemps++;
//     if (guess > targetNum) {
//         guess = prompt("Too high! Enter a new guess!");
//     } else {
//         guess = prompt("Too low! Enter a new guess!");
//     }


//     if (guess === 'q') {
//         console.log("You quit!");
//         break;
//     } 
    
// }
// if (parseInt(guess) === targetNum && guess !== 'q') {
//     console.log(`You got it! It took you ${attemps} guesses!`)
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //DON'T CHANGE THIS LINE PLEASE!

// // WRITE YOUR LOOP BELOW THIS LINE:

// for (let number of numbers) {
//     console.log(Math.pow(number,2));
// }

multiply(2,5);
function multiply(a , b)
{
    console.log(a * b) ;
}

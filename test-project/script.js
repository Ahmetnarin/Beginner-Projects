// THIS CODE IS JUST FOR TESTING  

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

// multiply(2,5);
// function multiply(a , b)
// {
//     console.log(a * b) ;
// }


// function rant(message) {
//     console.log(message.toUpperCase());
//     console.log(message.toUpperCase());
//     console.log(message.toUpperCase());

// }

// rant("I hate beets")w

// function greet(firstName, lastName){
//     console.log(`Hey there, ${firstName}`);
// }

// greet('Clooney', 'George');
// function isSnakeEyes(first, second) {

//     if (first === 1 && second === 1) {
//         console.log('Snake eyes');
//     } else {
//         console.log('Not Snake eyes');
//     }
// }

// isSnakeEyes(1,1);
// isSnakeEyes(2,2);
// isSnakeEyes(1,2);
// isSnakeEyes(2,1);
// isSnakeEyes(5,6);
// isSnakeEyes(6,6);

// function lastelement(arr){
//     if(arr !== 0){
//         let lastel = arr.length;
//         return lastel;
//     }
// }

// lastelement([1,2,3]);
// Capitilize first element

// let str = "eggplant";
// let new_str = str;
// console.log(str[0].toUpperCase() + str.slice(1));

// function capitalize(str){
//     // return str.charAt(0).toUpperCase() + str.slice(1);
//     let new_str = str;
//     console.log(str[0].toUpperCase() + str.slice(1));
// }

// function sumArray(arr) {
//     for (let i = 0; i <= arr.length; i++) {

//     }
// }

// let arr = [1,2,3,6];


// function sumArray(arr){
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// console.log(!arr.length);
// console.log(arr[arr.length - 1]);

// function lastElement(arr) {
//     if (arr.length === null) {
//         return null;
//     }else if (!arr.length || arr !== null) {
//         // let last_element = arr[arr.length-1];
//         return arr[arr.length - 1];
//     }
// }

// console.log(lastElement([3, 5, 7]));
// console.log(lastElement([1]));
// console.log(lastElement([]));
// arr= [1,2,3,6]
// console.log(!arr.length);


// // DEFINE YOUR FUNCTION BELOW:
// function returnDay(day) {
//     days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
//     if (day > 7 || day < 1) {
//         console.log("It is not valid!")
//         return null;
//     } else if (day === 1) {
//         console.log(days[0]);
    
//     }else if (day === 2) {
//         console.log(days[1]);
    
//     }else if (day === 3) {
//         console.log(days[2]);
//     }else if (day === 4) {
//         console.log(days[3]);
    
//     }else if (day === 5) {
//         console.log(days[4]);
    
//     }else if (day === 6) {
//         console.log(days[5]);
    
//     }else if (day === 7) {
//         console.log(days[6]); 
//     }

// }

// returnDay(1);
// returnDay(7);
// returnDay(4);
// returnDay(0);

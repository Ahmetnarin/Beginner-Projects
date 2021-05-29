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
//     const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
//     if(day < 1 || day > 7 ) {
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



// function returnDay(day){
//     const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

//     if(days<1 || days>7){
//         return null;
//     }else {

//         return day[days];
//     }
// }

// const daysOfWeek = {
//     1: 'Monday',
//     2: 'Tuesday',
//     3: 'Wednesday',
//     4: 'Thursday',
//     5: 'Friday',
//     6: 'Saturday',
//     7: 'Sunday'
// };

// function returnDay(d) {
//     if (d < 1 || d > 7)
//         return null;

//     else (d in daysOfWeek); {
//         return daysOfWeek[d]
//     }
// }

// console.log(returnDay(1));
// console.log(returnDay(2));
// console.log(returnDay(4));
// console.log(returnDay(6));
// console.log(returnDay(4));

// const cat = {
//     name: 'Blue Steele',
//     color: 'grey',
//     breed: 'scotish fold',
//     meow() {
//         console.log(`${this.name} says MEEOOOW`)
//     }
// }

// const hen = {
//     name: 'Helen',
//     eggCount: 0,
//     layAnEgg() {
//         eggCount += 1;
//         return this.eggCount;
//     }
// }

// try {
//     hello.toUpperCase();
// }catch {
//     console.log("ERROR!!!")
// }

// "hello".toUpperCase();

// console.log("AFTER!")

// function yell(msg){
//     try {
//         console.log(msg.toUpperCase().repeat(3));
//     } catch (e) {
//         console.log(e);
//         console.log("Please type a string!!");
//     }
// }

// const texts = ['rofl', 'lol', 'omg', 'ttyl'];
// const caps= texts.map(function (t){
//     return t.toUpperCase();
// })

// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// const doubles = numbers.map(function (num) {
//     return num * 2;
// } )

// function cleanNames(arr) {
//     const clean = arr.map(function (t) {
//         return t.trim();
//     });
//     return clean;
// }

// console.log(cleanNames(["      Ahmet ", "   afijfjsdfsdjofpsdfksdofps     "  , "                           fdsfsd                   "]));

// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99,
//         year: 1991

//     },
//     {
//         title: 'Stand By Me',
//         score: 45,
//         year: 1992
//     },
//     {
//         title: 'Parasite',
//         score: 95 ,
//         year: 1993
//     },
//     {
//         title: 'Nothin Hill',
//         score: 65,
//         year: 1994

//     },
//     {
//         title: 'Malkocoglu',
//         score: 100,
//         year: 1995
//     },
//     {
//         title: 'Cagri',
//         score: 95 ,
//         year: 1996
//     },
//     {
//         title: 'Alien',
//         score: 15,
//         year: 1997
//     }
// ]

// const highesRated = movies.reduce((bestMovie,currmovie) =>{
//     if (currmovie.score > bestMovie.score){
//         return currmovie;
//     }
//     return bestMovie;
// })

// const even = [2,4,6,8];
// const mytotal = even.reduce((sum,num) => sum+num);

// const good_movies = movies.filter(m => {return m.score > 80;});
// const goodTitle = good_movies.map(m => m.title )
// const bad_movies = movies.filter(m => {return m.score < 70;});
// const recent_movies = movies.filter(m => {return m.year > 1995;});

// let validUserNames = (['mark', 'staceysmom1978', 'q25615615315616', 'carrie98', 'Ahmet3838']);

// // const lessthan10 = validUserNames.filter(str => {return str.length <=  10});

// const lessthan10 = validUserNames.filter(function (name) {
//     return name.length < 10;
// })

// const new_movies = movies.map(function(movie){
//     return `${movie.title} - ${movie.score / 10 }`;
// })

// const add = (x,y) => {
//     return x+y;
// }

// const greet = (str) => {
//     return `Hey ${str}!`
// }
// greet("Ahmet")

// const add = (a,b) => a+b

// console.log("Hellooo-....!");

// setTimeout(() => {
//     console.log("...are you still there?")
// }, 3000)

// console.log("GOODBYE!!")

// const id = setInterval(()=> {
//     console.log(Math.random())
// }, 2000)


// const arr = [80,98,92,20,77,90,89,84,81,77];

// // const sol = exams.some(score => score <= 20);

// function allEvens(arr) {
//     const evennumbers = arr.every(number => (number % 2) === 0);
//     return evennumbers;
// }


// function check(arr)
// {
//     for(number in arr)
//     {
//         if((number % 2) ===  0){
//             // console.log(`${arr[number]} is a even number`);
//             return arr[number]=true;
//         } else {
//             // console.log(`${arr[number]} is a odd number`);
//             return arr[number]=false;
//         }
//     }
// }

// const total = arr.reduce((total , arr) => {
//     return total + arr
// } )


// const person = {
//     firstname: "Vigo",
//     lastname: 'Mortensen',
//     fullname: function() {
//         return `${this.firstname} ${this.lastname}`;
//     }
// }


// function rollDie(number) {
//     return Math.floor(Math.random() * number) + 1;
// }

// const cats = ['blue', 'scout', 'rocket'];
// const dogs = ['Rusty', 'Wyatt'];

// const allpets = [...cats , ...dogs];

// const feline = {legs:4, family:'Felidae'};
// const canine = {isfurry: true, family: "canine"}


// spread with object
// const dataFromForm = {
//     email: 'blueman@gmail.com',
//     password: 'tobias123!',
//     username: 'tfunke',
// }

// const newUser = {...dataFromForm, id:2345, isAdmin: false
// };

// to add numbers in array 
// function sum(...nums){
//     return nums.reduce((total, el) => total + el);
// }

// function raceResult(gold,silver, ...everyOneElse){
//     console.log(`Gold medals goes to : ${gold}`);
//     console.log(`Silver medals goes to : ${silver}`);
//     console.log(`And thanks everyone else : ${everyOneElse}`);

// }


// Destructing objects

// const user = {
//     email: 'harvey@gmail.com',
//     password: 'sjhicapcadf',
//     firstName: 'Harvey',
//     lastName: 'Milk',
//     born: 1930,
//     died: 1978,
//     bio: 'Harvey Bernard Milk was an American politician',
//     city: 'San Fransisco',
//     state: 'California'
// }

// const firstName = user.firstName;
// const lastName = user.lastName;

// const { email } = user;

// const high = movies.filter((movie) => movie.score >= 90);

// movies.map(movie=> {
//     return `${movie.title} (${movie.year}) is rated ${movie.score}`;
// })

// const btn = document.querySelector('#v2');

// btn.onclick = function(){
//     console.log("you clicked Me!");
//     console.log("I hope it works");
// }

// function scream(){
//     console.log("AAAAAAHHH");
//     console.log("STOP TOUCHING ME!!");
// }

// btn.onmouseenter = scream;

// document.querySelector('h1').onclick = function() {
//     alert("You clicked the h1!");
// }


// const btn3 = document.querySelector('#v3');
// btn3.addEventListener('click', scream)

function twist(){
    console.log("TWIST");
}
function shout(){
    console.log("SHOUT");
}

const buttontas = document.querySelector('#tas');

// buttontas.onclick = shout;
// buttontas.onclick = twist;

buttontas.addEventListener('click', twist)
buttontas.addEventListener('click', shout)

const colorchanger = document.querySelector('#colorchanger');

colorchanger.c('click' , function(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.background = '#' + randomColor;
})


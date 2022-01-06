// import fetch from 'fetch';
// import fetch from "node-fetch";
// const fetch = require("node-fetch");
// globalThis.fetch = fetch

// "use strict";

// var se comporta como uma caixa, guarda as variaveis definidas
// 1) names (ex. userName) only contain letters, numbers, symbol $ _
// 2) first character must not be a number (ex. 1userName), will give a error message

// var userName = "John";
// console.log(userName)

// var firstName = "Reed";
// console.log(firstName)

// var surName = "Barger";
// console.log(surName)

// var $1000 = "one thousand";
// console.log($1000)

// message = "hello world";
// console.log(message);

// 1) sloppy "normal" mode - default in scripts
// 2) strict mode - throws more errors, prevents pitfalls of the language

// Challenge 1: We want to log out the name "Reed", but it doesn't work. Can you fix it?
// const nameOne = "Reed" ;
// console.log(nameOne);

// // Challenge 2: We want 102 to be logged out. But we're getting an error instead. 
// Try to fix it!
// let count = "100";
// count = "101";
// count = "102";
// console.log(count);

// //  Challenge 3: We want to log out the price (50), but it doesn't work. Can you fix it?
// let price;
// price = 50;
// console.log(price);

// const - restrictions that make code more readable
// 1) must be initialized with value
// 2) can't be reassigned after declaration

// const originalPrice = 50;
// const percentOff = 20;
// const salePrice = originalPrice * (percentOff / 100);
// // rest of our program (maybe 100s of lines)
// console.log(salePrice);

// var originalPrice = 50;
// var percentOff = 20;
// var salePrice = originalPrice * (percentOff / 100);
// // rest of our program (maybe 100s of lines)
// console.log(salePrice);

// var price = 20;
// var isSale = true;
// // variable shadowing
// // let & const - block-scoped
// if (isSale) {
//   // discount price of product
//   const price = 20 - 2; 
//   // do something 
//   console.log('sale price', price);
// }
// console.log('price', price);

// let message = "Hi"
// let userFirstName = "Jane";
// let userLastName = "Doe";
// // string interpolation ${}
// console.log(`${message} ${userFirstName} ${userLastName}`);

// template literal ``
// let username = "Jane Doe";
// let message = `Hi ${username}, how are you?`;
// console.log(message);

// const weight = 150;
// const moonWeight = `You weigh ${weight * 0.165} pounds on the moon`;
// console.log(moonWeight);

// valid strings:
// `I'm a string`;
// `He said, "I am string."`;

// breaking a text in three diferent lines - just do as below:
// const threeLines = `This is a string 
// that spans across 
// three lines.
// `;

// Challenge: Help Darth Vader express himself to his son!
// const mySon = "Luke";
// const parentalStatus = "father";
// const message = "mySon, I am your";
// console.log(`${mySon} ${message} ${parentalStatus}`);

// const mySon = "Luke";
// const parentalStatus = "father";
// const message = `${mySon}, I am your ${parentalStatus}`;
// console.log(message);

// variables are case sensitive:
// const name = 'Jane';
// const Name = 'Mark';
// const NAME = 'Fred';
// // console.log(name, Name, NAME);

// const firstName = 'Mark';
// const lastName = 'Fred';
// let fullName = `${firstName} ${lastName}`;
// console.log(fullName);

// is, has
// let isModalVisible = true;
// if (isModalVisible) {
//   // do something  
// }
// let isLoading;
// let hasPosition;
// const COLOR_RED = '#f00';

// module types & conditionals

// if statements - evaluate boolean values


// const prefersDarkMode = true;
// if (prefersDarkMode) {
//   console.log('dark mode set!');  
//   document.body.style.background = 'black';
// } else {    
//   console.log('light mode set!');
//   document.body.style.background = 'ghostwhite';
// } 

// const prefersSunnyMode = true;
// const prefersDefaultMode = false;
// const prefersDarkMode = false;
// if (prefersSunnyMode) {
//     console.log('sunny mode set!');  
//     document.body.style.background = 'yellow';
//   } else {    
//     console.log('light mode set!');
//     document.body.style.background = 'ghostwhite';
// }

// const prefersDarkMode = true;
// const prefersSolarizedMode = true;
// if (prefersSolarizedMode) {
//   console.log('solarized mode set!');  
//   document.body.style.background = 'palegoldenrod';
// } else if (prefersDarkMode) {
//    console.log('dark mode set!'); 
//    document.body.style.background = 'black';
// } else {    
//   console.log('light mode set!');
//   document.body.style.background = 'ghostwhite';
// }

// const colorModeS = 'solarized';
// const colorModeD = 'dark';
// switch (colorModeD) {
//     case "solarized":
//      console.log('solarized mode set!'); 
//      document.body.style.background = 'palegoldenrod';
//      break;
//     case 'dark':
//      console.log('dark mode set!'); 
//      document.body.style.background = 'black';
//      break;
//     default:
//      console.log('light mode set!');
//      document.body.style.background = 'ghostwhite';
//      break;
// }         

// Conditional challenge
// Challenge 1: create a conditional that logs out "Good morning!", "Good evening!" 
// and so on depending on the value of time (<- a variable)
// Challenge 2: Rewrite the whole thing as a switch statement
// could be "afternoon", "evening" and "night"

// const time = "night" 
// if (time === "morning") {
//     console.log("Good morning!");
// } else if (time === "afternoon") {
//     console.log("Good afternoon!");
// } else if (time === "evening") {
//     console.log("Good evening!");
// } else {
//     console.log("Good night!");
// }

// const timeM = "morning" 
// const timeA = "afternoon" 
// const timeN = "night" 
// switch (timeN) {
//     case "morning":
//      console.log('Good morning!'); 
//      document.body.style.background = 'yellow';
//      break;
//     case 'afternoon':
//      console.log('Good afternoon!'); 
//      document.body.style.background = 'purple';
//      break;
//     case 'night':
//      console.log('Good night!');
//      document.body.style.background = 'black';
//      break;
// } 

/*
Primitive types:

string
number
boolean
undefined
null
symbol

everything else - Object type
*/

// How see with type of if it is a object type or a primitive type: 
// console.log(typeof 42);
// console.log(typeof window);

// 1) Explicit type conversion
// 2) Implicit type conversion (coercion)
// console.log(Boolean(message));

// console.log('1' * '2');

// truthy (true)
// falsy (false)

// if (Boolean(value) === true) {
//     // if true, do something with value  
//   }

// falsy are:

// false
// 0
// ''
// null
// undefined
// NaN

// 1) Avoid direct comparisons in conditionals

// const username = null;

// if (!username) {
//   console.log('no user');
// }

// 2) Use triple equals === (strict equals operator) 

// if (null === undefined) {
//   console.log('equals');
// } else {
//   console.log('not equals');
// }

// 3) Convert to real Boolean values where needed

// if (Boolean(NaN) === Boolean(NaN)) {
//     console.log('equal')
// } else {
//     console.log('not equals')
// }

// Challenge 1:
// What will the following console logs display? (they're all true and false)

// console.log("Challenge 1:")
// console.log(!undefined);
// console.log(Boolean(NaN)); 
// console.log(false === false);
// console.log(5 === "5");
// console.log("Hello" == "hello");

// Challenge 2:
// What will the following console logs display? (they're all true and false)
// console.log("Challenge 2:")
// console.log(Boolean(0));
// console.log(Boolean("0"));
// console.log(Boolean(""));
// console.log(!null);
// console.log(!!"hello");

// Challenge 3:
// List all the falsy values in JavaScript

// false
// 0
// ''
// null
// undefined
// NaN

// const isAuthenticated = false;
// let cartItemCount = 0;

// if (isAuthenticated) {
//   // add item to cart
//   cartItemCount = 1;
// } else {
//   // tell user to login
// //   console.log("Please log in!");
//   cartItemCount = 0;
// }

// const cartItemCount = isAuthenticated ? 1 : 0;
// console.log(cartItemCount);

// console.log(cartItemCount);
// const age = 20;

// let greeting;

// if (age < 10) {
//   greeting = "Hey there"; 
// } else if (age > 18) {
//   greeting = "Greetings";  
// } else if (age > 10) {
//   greeting = "What's up?";  
// } else {
//   greeting = "That's an interesting age!";  
// }
// console.log(greeting);

// ternaries exemples:

// const age = 20;
// const greeting = age < 10 ? "Hey there" : "That's an interesting age!";
// console.log(greeting);

// const greeting = age < 10 ? "Hey there" : age > 18 ? "Greetings" : age > 10 ? "What's up?" : "That's an interesting age!";
// console.log(greeting);


// Challenge 1: Check if the user is allowed to add an "iPad" to its shopping cart. Write a 
// ternary that sets the shoppingCart variable to "iPad" if the user is authenticated, and an 
// empty string if the user isn't authenticated

// write your code here

// const isAuthenticated = true;
// let shoppingCart;
// shoppingCart = isAuthenticated ? "iPad" : "";
// console.log("shoppingCart: ", shoppingCart);

// Challenge 2: Check if user is old enough. Write a ternary that sets allowedAccess to true if 
// the age is 17 or more, or false if not
// // write your code here

// const age = 17;
// let allowedAccess;
// allowedAccess = age >= 17 ? true : false;
// console.log("allowedAccess: ", allowedAccess);


// Even short conditionals wth short-circuiting

// const result = 'Reed' || '';
// console.log(result);

// const response = "";
// let username;
// if (response) {
//   username = response;
// } else {
//   username = "guest";
// }
// const result = 'Reed' || '';
// console.log(result);

// const response = "";
// const username = response || "guest";
// console.log(username);

// const response = "Reed";
// const isEmailVerified = true;
// let username;
// if (response) {
//   if (isEmailVerified) {
//     username = response;
//   }  
// } else {
//   username = "guest";
// }

// const response = "Reed";
// const isEmailVerified = true;
// const username = isEmailVerified && response || "guest";
// console.log(username);

/* Challenge 1: Let's say you're building Reddit. Only users that are either moderators or have
reached a certain karma threshold are allowed to upvote. */
// let canUpvote;
// const karma = 143;
// let isModerator = true;
// let hasEnoughKarma = karma > 100  ? true : false;
// canUpvote = hasEnoughKarma || isModerator
// console.log("canUpvote:", canUpvote);

// first use a ternary to set hasEnoughKarma to true if karma is above 100. If not, set it to 
// false
// set the value of canUpvote with short-circuiting (using hasEnoughKarma and isModerator)

/* Challenge 2: Let's say that only moderators who have enough karma are allowed to delete posts.  
How would you set the canDelete variable */
// set canDelete to true if both hasEnoughKarma and hasEnoughKarma is true
// let canDelete = true;
// canDelete = hasEnoughKarma && hasEnoughKarma ? true : false;
// console.log("canDelete:", canDelete);

// Challenge 3: what is the value of user? What if you switch the hasValidEmail variable to 
// false? What if the response is empty?
// const response = "Jonh Doe";
// const hasValidEmail = true;
// const user = hasValidEmail && (response || "guest");
// console.log("user: ", user);

// functions:

// const user1 = "Reed";
// const user2 = "Doug";
// sendUserMessage(user1, 'Hey there');
// sendUserMessage(user2, "What's up?");
// function sendUserMessage(user, text) {
//   console.log(`User ${user} says: ${text}`);
// }

// const result = echo(42, "Hi");
// function echo(input, greeting) {
//     return `${greeting} ${input}`;  
// }
// console.log(result);

// Challenge: 
// Write a function splitBill() that lets you know how much 
// you need to pay to split any bill between you and your friends. 
// It should return a message with a number. 
// Write your code below:

// const person = 4
// const bill = 16
// function splitBill(){
//     console.log(`Each person will pay: ${bill / person}`);
// }
// // Testing your solution
// console.log(splitBill(10, 2))
// console.log(splitBill(16, 4))
// console.log(splitBill(350, 9))

// 1) Closures are a property of JavaScript functions
// 2) Call function in different scope than where function was original defined

// const doubleLike = handleLikePost(2);
// function handleLikePost(step) {
//     let likeCount = 0;
//     return function addLike() {
//       likeCount += step;    
//       return likeCount;
//     }
//   //   addLike();
// console.log('like count:', likeCount);
// }
// console.log(doubleLike());
// console.log(doubleLike());
// console.log(doubleLike());
  
// Challenge: 
// Write a countdown function with a hard-coded starting number inside closure
// Stretch goal: Write a countdown function that can count from a provided number,
// with a provided step

// Start
// const countingDown = countdown();
// function countdown() {
//     let countFromNum = 11;
//     return function decrease() {
//       countFromNum -= 1;
//       return countFromNum;
//     }
// }
// console.log(countingDown());
// console.log(countingDown());
// console.log(countingDown());
  
// Start
// function countdown(startingNumber, step) {
//     let countFromNum = startingNumber + step;
//     return function decrease() {
//       countFromNum -= step;
//       return countFromNum;
//     }
//   }
// const countingDown = countdown(20, 5);
// console.log(countingDown());
// console.log(countingDown());
// console.log(countingDown());

// JavaScript Numbers:
// The toFixed() method converts a number into a string, rounding to a specified number of decimals:
// let num = 5.56789;
// let n = num.toFixed(2);
// document.getElementById("demo").innerHTML = n;
// 5.57

// function convertTemperature(celsius, decimalPlaces = 1) {
//      celsius to fahrenheit
//      decimalPlaces = decimalPlaces || 1;
//   const fahrenheit = celsius * 1.8 + 32;
//   return Number(fahrenheit.toFixed(decimalPlaces));
//      return fahrenheit
// }
// console.log(convertTemperature(21, 1));

// function convertTemperature(celsius) {
//   const fahrenheit = parseInt((celsius * 1.8 + 32) * 100) / 100 ;
//   return Number(fahrenheit);
// }
// console.log(convertTemperature(27));

// Arrow Functions: 
// =>
// .toUpperCase()

// const username = 'john';
// const capitalize = name => `${name.charAt(0).toUpperCase()}${name.slice(1)}`;  
// console.log(capitalize(username));

// const username = 'john';
// const capitalize = name => `${name.charAt(0).toUpperCase()}${name.slice(1)}`;  
// function greetUser(name, callback) {
//   return callback(capitalize(name));  
// }
// const result = greetUser(username, name => `Hi there, ${name}!`);
// console.log(result);

// Challenge: Rewrite your first function from a previous challnge to be an arrow function. 
// Stretch goal: Rewrite counting down closure in arrow function form. 


// Challenge start 
// function splitBill(amount, numPeople) {
//     return `Each person needs to pay ${amount / numPeople}`
// }

// const splitBill = (amount, numPeople) => `Each person needs to pay ${amount / numPeople}`
// console.log(splitBill(10, 2));
// console.log(splitBill(10, 4));
// console.log(splitBill(10, 5));


// Stretch goal start
// function countdown(startingNumber, step) {
//   let countFromNum = startingNumber + step;
//   return function decrease() {
//     countFromNum -= step;
//     return countFromNum;
//   }
// }

// const countdown = (startingNumber, step) => {
//     let countFromNum = startingNumber + step;
//     return() => countFromNum -= step;  
// }
// const countingDown = countdown(20, 2);
// console.log(countingDown());
// console.log(countingDown());
// console.log(countingDown());

// function getData(baseUrl, route) {
//     fetch(`${baseUrl}${route}`)
//       .then(response => response.json())
//       .then(data => console.log(data));  
//   }
//   getData('https://jsonplaceholder.typicode.com', '/posts');
// getData('https://jsonplaceholder.typicode.com', '/comments');

// function getData(baseUrl) {
//     return function(route) { 
//       return function(callback) {    
//         fetch(`${baseUrl}${route}`)
//           .then(response => response.json())
//           .then(data => callback(data));  
//       }     
//     }  
//   }
//   const getSocialMediaData = getData('https://jsonplaceholder.typicode.com');
//   const getSocialMediaPosts = getSocialMediaData('/posts');
//   const getSocialMediaComments = getSocialMediaData('/comments'); 
//   getSocialMediaPosts(posts => {
//     posts.forEach(post => console.log(post.title));  
//   });
  // getData('https://jsonplaceholder.typicode.com', '/posts');
  // getData('https://jsonplaceholder.typicode.com', '/comments');

// functions - actions
// create a todo
// function createTodo() {}
// update a todo
// function updateTodo() {}
// check off todo
// function checkCompleteTodo() {}
// delete todo
// function deleteTodo() {}
// getting a todo
// function getTodo() {}
// getting user
// function fetchUser() {}

// Objects & Maps - Use Objects for Managing Key-Value Pairs:
// variables - boxes; objects - file cabinets

// const obj = {
//   sayHi() {
//     console.log('hi')  
//   }
// }
// obj.sayHi();
// objectName.methodName();

// const blue = '#00f';
// const orange = '#f60';
// variables - boxes; objects - file cabinets
// const colors = { yellow: '#ff0', blue, orange };
// objectName.key
// console.log(colors.blue);

// Challenge: 
// 1. Create three variables - bar, cafe, restaurant - and set their values to a bar, 
// a cafe and a restaurant in your city
// 2. Create an object - favouritePlaces - and populate it with your variables from task 1
// 3. If you're not already using the object property shorthand, refactor your code to do so
// 4. Create a method on the object - greeting() -  that logs out a message to the console
// 5. Invoke the greeting() method and also log out your favourite restaurant to the console

// const bar = "bar";
// const cafe = "cafe"; 
// const restaurant = "restaurant";
// const favouritePlaces = {bar: bar, cafe: cafe, restaurant: restaurant}
// const favouritePlaces = {bar, 
//   cafe, 
//   restaurant,
//   greeting(){
//     console.log("Hello there!")
//   }
// }
// console.log(favouritePlaces);
// favouritePlaces.greeting();
// console.log(favouritePlaces.restaurant)

// Understand Primitive vs Object Types:
/*
  undefined, null, boolean, number, string, symbol
*/
// primitive - passed by value:
// const num = 'hello world';
// const anotherNum = 'hello world';
// console.log(num === anotherNum);
// object - passed by reference:
// const obj = {};
// const anotherObj = obj;
// anotherObj.a = 1;
// console.log('obj', obj);
// console.log('another obj', anotherObj);

// const colors = {
//   'yellow Color': '#ff0',
//   blue: "#f00",
//   orange: "#f60"
// };
// console.log(colors.yellow);
// colors.red = '#foo';
// colors.red = '#f00';
// console.log(colors['yellow Color']);

// const color = 'black';
// const hexCode = '#000';
// const colors = {
//   'yellow Color': '#ff0',
//   blue: "#f00",
//   orange: "#f60",
//   [color]: hexCode
// };
// console.log(colors);
// delete colors.blue;
// console.log(colors);

// Easy Property Access with Destructuring:

// const user = {
//   name: "Reed",
//   username: "Reedbarger",
//   email: "reed@gmail.com",
//   details: {
//     title: "Programmer"  
//   }  
// };
// const { username, email } = user;
// function displayUser() {
//   console.log(`username: ${username}, email: ${email}`);  
// }
// displayUser()

// const user = {
//   name: "Reed",
//   username: "Reedbarger",
//   email: "reed@gmail.com",
//   details: {
//     title: "Programmer"  
//   }  
// };
// const { name, username, email, details} = user;
// const { title } = user.details
// function displayUserBio() {
//   console.log(`name: ${name}, username: ${username}, email: ${email}, title: ${title}`);
// }
// displayUserBio()

// const user = {
//   name: "Reed",
//   username: "Reedbarger",
//   email: "reed@gmail.com",
//   details: {
//     title: "Programmer"  
//   }  
// };
// const { name, details: { title} } = user;
// function displayUserBio() {
//   console.log(`${name} is a ${title}`); 
// }
// displayUserBio()

// const user = {
//   name: "Reed",
//   username: "Reedbarger",
//   email: "reed@gmail.com",
//   details: {
//     title: "Programmer"  
//   }  
// };
// function displayUserBio({ name, details: { title } }) {
//   console.log(`${name} is a ${title}`); 
// }
// displayUserBio(user);

// Challenge: The recommendations object contains a set of of nice places to visit in Brighton, UK,
// organized by what you'd like to do (eat pancakes, drink coffee etc).
// 1. Destructure the places to drink (coffee and beer) from recommendations
// 2. Destructure the places to listen to music
// 3. Write a function that takes the recommendations object as an argument and that
//      a) Logs out the music venues in recommendations when invoked 
//      b) Uses object descructuring to get the "traditional" and "jazz" keys from the argument

// const recommendations = {
//   pancakes: 'Nowhere Man',
//   riceBowls: 'Pompoko',
//   beer: 'The Craft Beer Co.',
//   coffee: 'Coffee Roasters',
//   small_plates: 'Venetian Plates',
//   music: { 
//       traditional: 'Fiddler\'s Elbow', 
//       jazz: 'The Paris House'
//   }
// }
// const {beer, coffee} = recommendations
// const {traditional, jazz} = recommendations.music

// function displayRecommendations({music: {traditional, jazz}}){
//   console.log(`Musics are ${traditional} and ${jazz}`)
// }
// displayRecommendations(recommendations)

// const recommendations = {
//   pancakes: 'Nowhere Man',
//   riceBowls: 'Pompoko',
//   beer: 'The Craft Beer Co.',
//   coffee: 'Coffee Roasters',
//   small_plates: 'Venetian Plates',
//   music: { 
//       traditional: 'Fiddler\'s Elbow', 
//       jazz: 'The Paris House'
//   }
// }
// const { beer, coffe } = recommendations;
// const { music: { traditional, jazz } } = recommendations;
// console.log(jazz)
// function displayMusicPlaces({ music: { traditional, jazz } }) {
//   console.log(`Head to ${traditional} or ${jazz} to listen to great music!`)
// }
// displayMusicPlaces(recommendations);

// Merge Objects with Object Spread:

// const user = {
//   name: "",
//   username: "",
//   phoneNumber: "",
//   email: "",
//   password: "",
//   verified: true 
// };
// const newUser = {
//   username: "ReedBarger",
//   email: "reed@gmail.com",
//   password: "mypassword"  
// };
// const createdUser = { ...user, ...newUser, verified: false };
// console.log(createdUser);

// How Maps Can Do What Objects Can't:

// const nums = {
//   1: 1,
//   true: true
// };

// const map1 = new Map([
//   ['key', 'value']  
// ]);
// map1.set('key', 'value');
// console.log([...map1.keys()])

// map1.forEach((value, key) => {
//   console.log(key, value);  
// });

// const user1 = { name: "john" }
// const user2 = { name: "mary" }
// const secretKey1 = "asldjfalskdjf";
// const secretKey2 = "alksdjfakjsdf";
// const secretKeyMap = new Map([
//   [user1, secretKey1],
//   [user2, secretKey2]  
// ]);
// const key = secretKeyMap.get(user1);
// console.log(key);

// Exemplo aqui:

// const user = {
//   name: "john",
//   verified: true  
// };
// const userMap = new Map([
//   ["name", "john"],
//   ["verified", true]  
// ]);
// console.log(userMap);
// console.log(userMap.size);

// Challenge: 
// 1. Take the object (contains a favourite place in Brighton, UK), and turn it into a Map
// 2. Add a boolean property 'visited', to indicate places that you've been to it
// 3. Add an integer property 'averageBill' with how much you spend there on average
// 4. Fetch one of the properties using the get() method

// const favouritePlace = {
//   music: "jazz",
//   name: "Paris House",
//   payed: "17.5",
//   visited: true,
// };
// const favouritePlaceMap = new Map([
//     ["music", "jazz"],
//     ["name", "Paris House"],
//     ['payed', '17.5'],
//     ['visited', true ],
    
// ]);
// console.log(favouritePlaceMap.get('payed'));
// console.log(favouritePlaceMap);
// console.log(favouritePlaceMap.size);

// Improve Methods with Arrow Functions:
// ${this.}

// const userData = { 
//   username: "Reed",
//   title: "JavaScript Programmer",
//   getBio(){   
//     console.log(`User ${this.username} is a ${this.title}`);
//   }  
// }
// userData.getBio();

// const userData = { 
//   username: "Reed",
//   title: "JavaScript Programmer",
//   getBio() {
//     console.log(`User ${this.username} is a ${this.title}`);
//   },
//   askToFriend() {
//     let that = this;
//     setTimeout(function() {
//       console.log(`Would you like to friend ${that.username}?`);   
//     }, 2000);  
//   } 
// }
// userData.getBio();
// userData.askToFriend();

// const userData = { 
//   username: "Reed",
//   title: "JavaScript Programmer",
//   getBio() {
//     console.log(`User ${this.username} is a ${this.title}`);
//   },
//   askToFriend() {
//     setTimeout(() => {
//       console.log(`Would you like to friend ${this.username}?`);   
//     }, 2000);  
//   } 
// }
// userData.getBio();
// userData.askToFriend();

// Build Flexible Collections with Arrays: = []

// const todos = [];
// const todo1 = {
//   text: 'Wash the dishes',
//   complete: false  
// };
// const todo2 = {
//   text: 'Do laundry',
//   complete: false  
// };
// todos.push(todo1, todo2);
// todos.pop();
// // todos[1] = todo2;
// // todos[0] = todo1;
// console.log(todos);

// Challenge: 
// 1. Create an array - favouriteSongs[] -  and add your 3 favourite songs using push()
// 2. Log out the last song in the array, and make it so that your solution will log out the 
// last one regardless of how many items there are in the array
// 3. Invoke the pop method on your created array. What values do you have left in the array? 

// const favouriteSongs = [];
// favouriteSongs.push("Like a rolling stone");
// favouriteSongs.push("Blowing in the wind");
// favouriteSongs.push("Mr Tambourine man");
// console.log(favouriteSongs);
// console.log(favouriteSongs[favouriteSongs.length - 1])
// favouriteSongs.pop();
// console.log(favouriteSongs[favouriteSongs.length - 1])

// Check Element Existence in Arrays: 
// includes, some, every

// const temperatures = [
//   { degrees: 69, isRecordTemp: false }, 
//   { degrees: 82, isRecordTemp: true }, 
//   { degrees: 73, isRecordTemp: false }, 
//   { degrees: 64, isRecordTemp: false }
// ];
// const result = temperatures.some(temperature => temperature.isRecordTemp === true); // true / false
// console.log(result);

// const temperatures = [
//   { degrees: 69, isRecordTemp: false }, 
//   { degrees: 82, isRecordTemp: false }, 
//   { degrees: 73, isRecordTemp: false }, 
//   { degrees: 64, isRecordTemp: false }
// ];
// const result = temperatures.every(temperature => !temperature.isRecordTemp); // true / false
// console.log(result);

// Challenge:
// Here's a list of 5 most popular songs on Spotify.
// 1) Check if any song has won a Grammy
// 2) Check if all the songs were streamed for at least 1.5 million times
// Note: the timesStreamed value is already in million

// const songs = [
//   {song: "Shape of You", timesStreamed: 2.384, wonGrammy: true},
//   {song: "One Dance", timesStreamed: 1.791, wonGrammy: false},
//   {song: "Rockstar", timesStreamed: 1.781	, wonGrammy: false},
//   {song: "Closer", timesStreamed: 1.688, wonGrammy: false},
//   {song: "Thinking Out Loud", timesStreamed: 1.461, wonGrammy: true}
// ]
// const hasWonGrammy = songs.some(song => song.wonGrammy === true);
// console.log(hasWonGrammy);
// const allMegaHits = songs.every(song => song.timesStreamed >= 1.500 === true);
// console.log(allMegaHits);

//  Perform Actions on All Elements MAP:

// const temperatures = [
//   { degrees: 69, isRecordTemp: false },
//   { degrees: 82, isRecordTemp: true },
//   { degrees: 73, isRecordTemp: false },
//   { degrees: 64, isRecordTemp: false }
// ];
// const newTemps = temperatures.map(temperature => {
//    temperature.isRecordTemp = true; 
//    return temperature;
// });
// console.log(newTemps);

// const temperatures = [
//   { degrees: 69, isRecordTemp: false },
//   { degrees: 82, isRecordTemp: true },
//   { degrees: 73, isRecordTemp: false },
//   { degrees: 64, isRecordTemp: false }
// ];
// const newTemps = temperatures.map(temperature => 
// temperature.degrees > 70 ? { ...temperature, isHigh: true } : temperature 
// );
// newTemps.forEach(temperature => {
//    if (temperature.isHigh) {
//      console.log(`Temperature ${temperature.degrees} was a record high last week!`);  
//    }
// })
// console.log(newTemps);

// Get Subsets of Arrays: .filter && .find && .startsWith()

// const restaurants = [
//   { name: 'Cap City Diner', milesAway: 2.2 },
//   { name: 'Chop Shop', milesAway: 4.1 },
//   { name: 'Northstar Cafe', milesAway: 0.9 },
//   { name: 'City Tavern', milesAway: 0.5 },
//   { name: 'Shake Shack', milesAway: 5.3 }
// ]
// const results = restaurants.filter(restaurant => restaurant.name.startsWith('C'))
// console.log(results);

// const restaurants = [
//   { name: 'Cap City Diner', milesAway: 2.2 },
//   { name: 'Chop Shop', milesAway: 4.1 },
//   { name: 'Northstar Cafe', milesAway: 0.9 },
//   { name: 'City Tavern', milesAway: 0.5 },
//   { name: 'Shake Shack', milesAway: 5.3 }
// ]
// const results = restaurants.filter(restaurant => restaurant.name.startsWith('C') && restaurant.milesAway < 3)
// console.log(results);

// const restaurants = [
//   { name: 'Cap City Diner', milesAway: 2.2 },
//   { name: 'Chop Shop', milesAway: 4.1 },
//   { name: 'Northstar Cafe', milesAway: 0.9 },
//   { name: 'City Tavern', milesAway: 0.5 },
//   { name: 'Shake Shack', milesAway: 5.3 }
// ]
// const result = restaurants.find(restaurant => 
//   restaurant.name.toLowerCase().includes('north') && restaurant.milesAway < 2
// )
// console.log(result);

// Transform Arrays with .reduce()

// const menuItems = [
//   { item: "Blue Cheese Salad", price: 8 },
//   { item: "Spicy Chicken Rigatoni", price: 18 },
//   { item: "Ponzu Glazed Salmon", price: 23 },
//   { item: "Philly Cheese Steak", price: 13 },
//   { item: "Baked Italian Chicken Sub", price: 12 },
//   { item: "Pan Seared Ribeye", price: 31 }
// ];
// const total = menuItems.reduce((accumulator, menuItem) => {
//   console.log(`
//     accumulator: ${accumulator},
//     menu item price: ${menuItem.price}
//   `);
//   return accumulator + menuItem.price;  
// }, 0);
// console.log(total);

// Challenge: 
// Use reduce() to sum the weights of all the cars
// Stretch goal: 
// Use reduce to sum the weights of only the electric cars 

// const cars = [
//   { name: "Toyota", isElectric: false, weight: 1320 },
//   { name: "Ford", isElectric: false, weight: 1400 },
//   { name: "Volkswagen", isElectric: false, weight: 1370 },
//   { name: "Honda", isElectric: false, weight: 1375 },
//   { name: "Tesla", isElectric: true, weight: 1750 },
//   { name: "BMW", isElectric: true, weight: 1350 },  
// ];
// const totalWeight = cars.reduce((accumulator, car) => {
//   return accumulator + car.weight;
// },0)
// console.log(totalWeight)

// const cars = [
//   { name: "Toyota", isElectric: false, weight: 1320 },
//   { name: "Ford", isElectric: false, weight: 1400 },
//   { name: "Volkswagen", isElectric: false, weight: 1370 },
//   { name: "Honda", isElectric: false, weight: 1375 },
//   { name: "Tesla", isElectric: true, weight: 1750 },
//   { name: "BMW", isElectric: true, weight: 1350 },  
// ];
// const totalWeight = cars.reduce((accumulator, car) => {
//     if (car.isElectric) {
//         return accumulator + car.weight;
//     } else {
//         return accumulator;
//     }
// }, 0)
// console.log(totalWeight);

// const numbers = [1, 2, 3, 4, 5, 6];
// const doubledNumbers = numbers.reduce((acc, num) => {
//   acc.push(num * 2);
//   return acc;
// }, []);
// console.log('doubled numbers', doubledNumbers);
// console.log('numbers', numbers);

// const numbers = [1, 2, 3, 4, 5, 6];
// const greaterNumbers = numbers.filter(num => num > 3);
// console.log(greaterNumbers);

// const numbers = [1, 2, 3, 4, 5, 6];
// const greaterNumbers = numbers.reduce((acc, num) => {
//   if (num > 3) {
//     acc.push(num);
//   }  
//   return acc;
// }, []);
// console.log(greaterNumbers);

// const numbers = [1, 2, 3, 4, 5, 6];
// const greaterNumbers = numbers.reduce((acc, num) => num > 3 ? acc.concat(num) : acc, []);
// console.log(greaterNumbers);

// Avoid Mutations with Array Spread

// const lunchMenuIdeas = ['Harvest Salad', 'Southern Fried Chicken'];
// const allMenuIdeas = [...lunchMenuIdeas];
// allMenuIdeas.push('Club Sandwich');
// console.log(lunchMenuIdeas);
// console.log(allMenuIdeas);

// Mold Arrays with the Spread Operator: ...
// https://scrimba.com/learn/javascript/mold-arrays-with-the-spread-operator-cWKD7BH2

// const breakfastMenuIdeas = ["Buckwheat Pancakes"];
// const dinnerMenuIdeas = ["Glazed Salmon", "Meatloaf", "American Cheeseburger"];
// const allMenuIdeas = [
//     ...breakfastMenuIdeas, 
//     "Harvest Salad", 
//     "Southern Fried Chicken"
// ];
// console.log(allMenuIdeas);

// const breakfastMenuIdeas = ["Buckwheat Pancakes"];
// const dinnerMenuIdeas = ["Glazed Salmon", "Meatloaf", "American Cheeseburger"];
// const allMenuIdeas = [
//     ...breakfastMenuIdeas, 
//     "Harvest Salad", 
//     "Southern Fried Chicken",
//     ...dinnerMenuIdeas
// ];
// const saladIndex = allMenuIdeas.findIndex(idea => idea === 'Harvest Salad');
// const finalMenuIdeas = [
//   ...allMenuIdeas.slice(0, saladIndex),
//   "Garden Salad",
//   ...allMenuIdeas.slice(saladIndex + 1)
// ];
// console.log(finalMenuIdeas);

// const breakfastMenuIdeas = ["Buckwheat Pancakes"];
// const dinnerMenuIdeas = ["Glazed Salmon", "Meatloaf", "American Cheeseburger"];
// const allMenuIdeas = [
//     ...breakfastMenuIdeas, 
//     "Harvest Salad", 
//     "Southern Fried Chicken",
//     ...dinnerMenuIdeas
// ];
// const saladIndex = allMenuIdeas.findIndex(idea => idea === 'Harvest Salad');
// const meatloafIndex = allMenuIdeas.findIndex(idea => idea === 'Meatloaf');
// const finalMenuIdeas = [
//   ...allMenuIdeas.slice(0, meatloafIndex),
//   ...allMenuIdeas.slice(meatloafIndex + 1)
// ]
// console.log(finalMenuIdeas);

// More Flexible Arrays with Destructuring:

// const finalMenuItems = [
//   "American Cheeseburger",
//   "Southern Fried Chicken",
//   "Glazed Salmon"
// ];
// let first = finalMenuItems[0];
// let second = finalMenuItems[1];
// let third = finalMenuItems[2];
// console.log(first, second, third);

// const finalMenuItems = [
//   "American Cheeseburger",
//   "Southern Fried Chicken",
//   "Glazed Salmon"
// ];
// const [first, second] = finalMenuItems;
// console.log({ first },{ second });

// const finalMenuItems = [
//   "American Cheeseburger",
//   "Southern Fried Chicken",
//   "Glazed Salmon"
// ];
// let [first, second] = finalMenuItems;
// console.log('before', { first },{ second });
// [second, first] = [first, second];
// console.log('after', { first },{ second });

// const finalMenuItems = [
//   "American Cheeseburger",
//   "Southern Fried Chicken",
//   "Glazed Salmon"
// ];
// const [winner, ...losers] = finalMenuItems;
// console.log({ winner, losers });

// Challenge: 
// In our restaurant, the chef has some favourite dishes in two different categories.
// The chef loves all dishes that start with "S", while the rest are regular dishes
// Use array destructoring to create arrays of the chefs favourite dishes of meat and
// fish, and to create arrays of the regular meat and fish dishes

// const fishDishes = ['Salmon Rillettes', 'Grilled Tuna Provencal', 'Fish and Chips']
// const meatDishes = ['Lasagna', 'Spaghetti', 'Satay Chicken Skewers']
// // Modify these four variables first
// // let chefsFishDishes;
// // let regularFishDishes;
// let [chefsFishDishes, ...regularFishDishes] = fishDishes;
// // let chefsMeatDishes;
// // let regularMeatDishes;
// let [regularMeatDishes ,...chefsMeatDishes] = meatDishes;
// // console.log(chefsFishDishes);
// // console.log(regularFishDishes);
// // console.log(regularMeatDishes);
// // console.log(chefsMeatDishes);
// // Finally, use the spread operator to create these two arrays as well
// // let chefsDishes;
// // let regularDishes;
// let chefsDishes = [...chefsMeatDishes, chefsFishDishes]
// let regularDishes = [...regularFishDishes, regularMeatDishes];
// console.log(chefsDishes);
// console.log(regularDishes);

// Turn Objects into Flexible Arrays:

// const obj = { one: 1, two: 2 };
// for (const key in obj) {
//   console.log('key', key);
// }

// const obj = { one: 1, two: 2 };
// for (const key in obj) {
//   console.log('value', obj[key]);
// }

// Object.keys(), Object.values(), Object.entries()
// const user = {
//   name: 'John',
//   age: 29  
// };
// console.log(Object.keys(user));
// const ageExists = Object.keys(user).includes('age');
// console.log(ageExists);
// const values = Object.keys(user).map(key => user[key]);
// console.log(values);
// console.log(Object.values(user));

// const monthlyExpenses = {
//   food: 400,
//   rent: 1700,
//   insurance: 550,
//   internet: 49,
//   phone: 95  
// };
// const monthlyTotal = Object.values(monthlyExpenses).reduce(
//     (acc, expense) => acc + expense, 0
// );
// console.log(monthlyTotal);

// const user = {
//   name: 'John',
//   age: 29  
// };
// console.log(Object.entries(user));

// https://scrimba.com/learn/javascript/turn-objects-into-flexible-arrays-cypELPA4

// const users = {
//   '2345234': {
//     name: "John",
//     age: 29
//   },
//   '8798129': {
//     name: "Jane",
//     age: 42
//   },
//   '1092384': {
//     name: "Fred",
//     age: 17 
//   }
// };
// const usersOver20 = Object.entries(users).reduce((acc, [id, user]) => {
//   if (user.age > 20) {
//     acc.push({ ...user, id });
//   }  
//   return acc;
// }, []);
// console.log(usersOver20);

// Get Unique Sets of Data: Set()

// const numbers = new Set([[1], [2], [3]]);
// for (const num of numbers) {
//   console.log(num);  
// }

// const customerDishes = [
//   "Chicken Wings",
//   "Fish Sandwich",
//   "Beef Stroganoff",
//   "Grilled Cheese",
//   "Blue Cheese Salad",
//   "Chicken Wings",
//   "Reuben Sandwich",
//   "Grilled Cheese",
//   "Fish Sandwich",
//   "Chicken Pot Pie",
//   "Fish Sandwich",
//   "Beef Stroganoff"
// ];
// const uniqueDishes = [...new Set(customerDishes)];
// console.log(uniqueDishes)

// Use New, Immutable Array Features:

// const numbers = [1, 2, 3, 4, 5];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }
// numbers.forEach(number => {
//   console.log(number);  
// });

/* 
- map()
- filter()
- reduce()
- some() / every()
- find() / findIndex()
- forEach()

Plus:

- slice()
- concat()
- includes()
- array spread operator
*/

// Classes - What Are Constructor Functions?
// constructor function

// function Student(id, name, subjects = []) {
//   this.id = id;
//   this.name = name;
//   this.subjects = subjects;  
// }
// Student.prototype.addSubject = function(subject) {
//   this.subjects = [...this.subjects, subject];   
// }
// const student1 = new Student(1, 'Reed');
// const student2 = new Student(2, 'Doug');
// student1.addSubject('Math');
// student2.addSubject('Physics');
// console.log(student2.subjects);

// 1. create a new constructor function, Book, which logs books in the school library (id, title, author, themes[]), 
// 2. Add ids, titles and authors for your two favourite books. 
// 3. Use the prototype keyword to add a theme property to the  books. 
// 4. Add at least one theme to each of your books. 

// Beginning:

// function Book(id, title, author, themes = []) {
// 	this.id = id;
// 	this.title = title;
// 	this.author = author;
// 	this.themes = themes;
// }
// Book.prototype.addTheme = function(newTheme) {
// 	this.themes = [...this.themes, newTheme];
// }
// const book1 = new Book(1, "Lord of the Rings", "JRR Tolkien");
// const book2 = new Book(2, "The Trial", "Franz Kafka");
// book1.addTheme("Fantasy");
// book2.addTheme("Corruption");
// console.log(book1.themes);
// console.log(book2.themes);
// console.log(book1.title);
// console.log(book2.title);

// Understand the Prototype Chain:
// prototypical inheritance - each instantiated object (from constructor function) inherits from prototype
// every object has prototype

// function Student(id, name, subjects = []) {
//   this.id = id;
//   this.name = name;
//   this.subjects = subjects;
// }
// const student1 = new Student(1, 'Reed');
// console.log(Object.getPrototypeOf(student1).constructor);
// console.log(student1.__proto__);

// class Student {
//   constructor(id, name, subjects = []) {
//     this.id = id;
//     this.name = name;
//     this.subjects = subjects;      
//   }   
// }
// const student1 = new Student(1, 'Reed');
// console.log(student1);

// class Student {
//   constructor(id, name, subjects = []) {
//     this.id = id;
//     this.name = name;
//     this.subjects = subjects;      
//   }   
//   getStudentName() {
//     return `Student: ${this.name}`  
//   }  
//   addSubject() {}  
// }
// const student1 = new Student(1, 'Reed');
// console.log(student1.getStudentName());

// 1. A school's film club wants to store details of the films it has studied so far this year. 
// Create a new class to do this. We want to store the following data about each 
// film: id, title, director, releaseYear and genres[].
// 2. Create two methods on the class: one for adding multiple genres to the 
// films - addGenre(genre) - and one to get the title of the film - getFilmTitle().
// 3. Instantiate a new instance of the class using data from your your favourite 
// film. Add at least 1 genre to your film using addGenre(), and get the title 
// using getFilmTitle()

// Beginning:
// class Film {
// 	constructor(id, title,director, releaseYear, genres = []) {
// 		this.id = id;
// 		this.title = title;
// 		this.director = director;
// 		this.releaseYear = releaseYear;
// 		this.genres = genres;
// 	}
// 	addGenre(genre) {
// 		this.genres = [...this.genres, genre];
// 	}
// 	getFilmTitle() {
// 		return `Film: ${this.title}`
// 	}
// }
// const myFavouriteFilm = new Film(1, "Rear Window", "Afred Hitchcock", "1954");
// console.log(myFavouriteFilm.director)
// myFavouriteFilm.addGenre("Thriller");
// console.log(myFavouriteFilm.genres)
// console.log(myFavouriteFilm.getFilmTitle());

// Share Class Features with Extends:
// https://scrimba.com/learn/javascript/share-class-features-with-extends-cLpL67C6

// class Product {
//   constructor(name, price, discountable) {
//     this.name = name;
//     this.price = price;
//     this.discountable = discountable;  
//   }  
//   isDiscountable() {
//     return this.discountable;  
//   }
// }
// class SaleProduct extends Product {
//   constructor(name, price, discountable, percentOff) {
//      super(name, price, discountable);
//      this.percentOff = percentOff; 
//   }  
//   getSalePrice() {
//      if (super.isDiscountable()) {
//        return this.price * ((100 - this.percentOff) / 100);
//      } else {
//         return `${this.name} is not eligible for a discount`;
//      }
//   }
// }
// const saleProduct1 = new SaleProduct("Coffee Maker", 99, false, 20); //switch between tue or false to change results
// console.log(saleProduct1.getSalePrice());

// React 
// https://reactjs.org

// How To Get, Set and Simplify Classes:

// class Product {
//   constructor(name, price, discountable) {
//     this.name = name;
//     this._price = price;
//     this.discountable = discountable;
//   }
//   get price() {
//     return this._price;
//   }
//   set price(price) {
//     if (typeof price !== "number") {
//       return this._price;
//     } else {
//       this._price = price; 
//     }
//   }
// }
// const product1 = new Product("Coffee Maker", 99.95, false);
// product1.price = 30;
// console.log(product1.price);

// Fix Context Problems with .bind():

// const isAuth = true;
// const user = {
//   favorites: []
// };
// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//     this.favoriteProduct = this.favoriteProduct.bind(this);
//   }
//   handleFavoriteProduct() {
//     if (isAuth) {
//       setTimeout(this.favoriteProduct, 1000);
//     } else {
//       console.log("You must be signed in to favorite products!");
//     }
//   }
//   favoriteProduct() {
//     user.favorites.push(this.name);
//     console.log(`${this.name} favorited!`);
//   }
// }
// const product1 = new Product('Coaster', 89.99)
// product1.handleFavoriteProduct()

// Async JavaScript
// The Problem with Callbacks:

// navigator.geolocation.getCurrentPosition(position => {
//   console.log(position);
//   getRestaurants(position, restaurants => {
//       console.log(restaurants);
//       console.log('done');
//   })
// });
// // setTimeout()
// // addEventListener()

// Fix Callback Hell with Promises:

// callbacks -> promises
// States of a promise:
// pending
// fulfilled
// rejected
// new Promise((resolve, reject) => {});

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('done'), 1000);  
// });
// promise.then(value => console.log(value)).catch(() => console.log('failure'));

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => reject(Error('Promise failed.')), 1000);  
// });
// promise.then(value => console.log(value)).catch(error => console.error(error));

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => reject(Error('Promise failed.')), 1000);  
// });
// promise
//   .then(value => console.log(value))
//   .catch(error => console.error(error))
//   .finally(() => console.log('done'));

// const promise = new Promise((resolve, reject) => {
//   navigator.geolocation.getCurrentPosition(position => {
//    resolve(position); 
//  }, error => {
//     reject(error);
//  }); 
// });
// promise
//  .then(position => console.log(position))
//  .catch(error => console.error(error))
//  .finally(() => console.log('done'));

// const promise = new Promise((resolve, reject) => {
//   navigator.geolocation.getCurrentPosition(resolve, reject); 
// });
// promise
//  .then(position => console.log(position))
//  .catch(error => console.error(error))
//  .finally(() => console.log('done'));

// https://scrimba.com/learn/javascript/make-network-requests-with-fetch-cMqbPES2

// Make Network Requests with fetch():
// API - Application Programming Interface: software to communicate with other software
// API - helpful service
// REST API
// CRUD 
// create POST
// read GET
// update PUT / PATCH
// delete DELETE
// https://github.com/public-apis/public-apis
// http://jsonplaceholder.typicode.com/posts
// JSON - JavaScript Object Notation
// fetch(url)
// jsonplaceholder.typicode.com

// const blogPost = {
//   title: "Cool post",
//   body: "lkajsdflkjasjlfda",
//   userId: 1  
// }
// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: "POST",
//   headers: {
//      "Content-Type": "application/json" 
//   },
//   body: JSON.stringify(blogPost)
// })
//   .then(response => response.json())
//   .then(data => console.log(data))

// const blogPost = {
//   title: "Cool post",
//   body: "lkajsdflkjasjlfda",
//   userId: 1  
// }
// fetch('https://jsonplaceholder.typicode.com/post/1')
//   .then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);  
//       }
//   })
//   .then(data => console.log(data))
//   .catch(error => console.error(error))

// Challenge: 
// The JSON Placeholder API has /users endpoint, 
// just like the one we saw in the tutorial for /posts
// Get the user with ID 3 and log their name and company they work for.
// Handle errors if something does not quite work. 
// Here's the endpoint: https://jsonplaceholder.typicode.com/users/3

// fetch("https://jsonplaceholder.typicode.com/users/3")
// .then(response => {
//    return response.json();
// })
// .then(person => {
//     console.log(`${person.name} works for ${person.company.name}`);
// });

// fetch("https://jsonplaceholder.typicode.com/users/3")
// .then(response => {
//     if (!response.ok) {
//         throw new Error(response.status);
//     }
//     return response.json();
// })
// .then(person => {
//     console.log(`${person.name} works for ${person.company.name}`);
// })
// .catch(err => console.log(err));

// Dead-Simple Promises with async-await:

// const response = fetch('https://jsonplaceholder.typicode.com/posts/1');
//   .then(response => response.json())
//   .then(data => console.log(data));

// async function getBlogPost() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('blog post'), 1000);
//   }); 
//   const result = await promise;
//   console.log(result);
//   console.log('done');
//     // .then(value => console.log(value))
//     // .finally(() => console.log('done'));
// }
// getBlogPost()

// async function getPost() { 
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');  
//   const data = await response.json();
//   console.log(data);
// }
// getPost();

// Dead-Simple Promises with async-await:

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => response.json())
//   .then(data => console.log(data));

// async function getBlogPost() {
//   return 'works here too!';  
// }
// getBlogPost().then(value => console.log(value));

// Catch Errors with async-await:

// async function getGithubUser() {
//   try {    
//     const response = await fetch('https://api.github.com/users/52542544sffds');
//     if (!response.ok) {
//       throw new Error(response.status);  
//     }
//   } catch (error) {
//     alert('Could not fetch user, try resetting your connection. "Error 404"'); 
//     console.error(error);  
//   } 
// }
// getGithubUser();

// Challenge: 
// Rewrite the GET API call from the previous challenge using async-await

// Challenge: 
// fetch('https://jsonplaceholder.typicode.com/users/3')
//   .then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);  
//       }    
//       return response.json()
//   })
//   .then(person => console.log(`${person.name} works for ${person.company.name}`))
//   .catch(err => console.error(err))
  
// Solution
// async function getUser() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users/3');
//   const person = await response.json();
//   console.log(person);
// }
// getUser()

// Solution
// async function getUser() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users/3');
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     const person = await response.json();
//     console.log(person);    
//   }
//     catch (error) {
//       alert('Could not fetch user, try resetting your connection. "Error 404"'); 
//       console.log(error);
//   }
// }
// getUser()

// Google Keep - Expanding and Closing Notes
// https://scrimba.com/learn/javascript/google-keep-expanding-and-closing-notes-c7PRzwAp

// class App {
//   constructor() {
//     console.log('app works!')  
//   }    
// }
// new App()

// Essa funçao abre e fecha o formulario "form":
// class App {
//   constructor() {
//     this.$form = document.querySelector('#form');
//     this.$noteTitle = document.querySelector('#note-title');
//     this.$formButtons = document.querySelector('#form-buttons');
    
//     this.addEventListeners();
//   }
//   addEventListeners() {
//     document.body.addEventListener('click', event => {
//       this.handleFormClick(event);
//     });
//   }
//   handleFormClick(event) {
//     const isFormClicked = this.$form.contains(event.target); 
    
//     if (isFormClicked) {
//       this.openForm();
//     } else {
//       this.closeForm()
//     }
//   }
//   openForm() {
//     this.$form.classList.add('form-open');  
//     this.$noteTitle.style.display = 'block';
//     this.$formButtons.style.display = 'block';
//   }
//   closeForm() {
//     this.$form.classList.remove('form-open');  
//     this.$noteTitle.style.display = 'none';
//     this.$formButtons.style.display = 'none';  
//   }
// } 
// new App();












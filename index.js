// chapter 35: functions

// what is a function?
// A function is a block of javaScript that robotically does the same thing again and again,
// whenever you invoke its name 

// why functions?
// it saves you reptative coding and makes your code easier to understand

// Example scenario 
// on your website , suppose there are several pages where you want to display an alert that tells 
// the user current time .

// without creating a function
// const now = new Date();
// const theHr = now.getHours();
// const theMin = now.getMinutes();
// alert("time: " + theHr + ":" + theMin);

// using function

// function tellTime() {
//     const now = new Date();
// const theHr = now.getHours();
// const theMin = now.getMinutes();
// alert("time: " + theHr + ":" + theMin);
// }

// tellTime();
// tellTime();
// tellTime();
// tellTime();

// create our own function 

// function declaration
// function sayHello() {
//     alert("Hello");
// }

// // function call
// sayHello();

// function with requirments
// function greetUser(userName) {
//   alert("hello " + userName);
// }

// greetUser("ali");
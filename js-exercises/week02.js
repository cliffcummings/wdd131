const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

// // Part 1 - for loop
// for (let i = 0; i <= studentReport.length; i++) {
//     if (studentReport[i] < LIMIT) {
//         console.log(studentReport[i]);
//     }
// }

// // Part 2 - while loop
// let i = 0;
// while (i <= studentReport.length) {
//     if (studentReport[i] < LIMIT) {
//         console.log(studentReport[i]);
//     }
//     i++;
// }

// // Part 3 - foreach loop
// studentReport.forEach(function (item) {
//     if (item < LIMIT) {
//         console.log(item);
//     }
// })

// Part 4 - for...in loop
for (let i in studentReport) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

// Part 5 - https://codepen.io/blazzard-jason/pen/wLmeXj
// get output location on document to append within list
// const output = document.getElementsByTagName("ul"); // for HTML
// Intl.DateTimeFormat Options
const options = { weekday: 'long'}; // vs. short, etc.

// BEGIN
const today = new Date();
// TODAY test output
let todaystring = new Intl.DateTimeFormat('en-US', options).format(today);
// document.getElementById('today').innerHTML = `Today is ${todaystring}. `; // for HTML

// next n days
for (let i = 1; i <= DAYS; i++ ) {
	let nextday = new Date();
	nextday.setDate(today.getDate() + i);
	let nextdaystring = new Intl.DateTimeFormat('en-US', options).format(nextday);
	// item = document.createElement("li"); // list item - for HTML
	// item.textContent = nextdaystring;
	// output[0].appendChild(item);
}
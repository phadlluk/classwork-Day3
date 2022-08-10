// 1.
let firstName = "lukman";
console.log(typeof firstName);

let lastNmae = "bayo";
console.log(typeof lastNmae);

let country;
console.log(typeof country);

let city = null;
console.log(typeof city);

let age = 40;
console.log(typeof age);

let isMarried = true;
console.log(typeof isMarried);

let year;
console.log(typeof year);

// 2.
let string = "10";
let number = 10;
console.log(parseInt(string) === number);

// 3.
let num = parseFloat(9.8);
console.log(Math.round(num));

// 4.
let x = 10;
let y = x;
console.log(y == x);

console.log(3 > 2);

console.log(2 < 9);

let u = 2;
let h = "3";
console.log(parseInt(h) === u);

console.log(2 > 4);

console.log(2 == 3);

/*5.
4 > 3
4 >= 3
4 < 3
4 <= 3
4 == 4
4 === 4
4 != 4
4 !== 4
4 != '4'
4 == '4'
4 === '4'
Find the length of python and jargon and make a falsy comparison statement.*/

// 5.
let p = 4 > 3;
console.log(p);

p = 4 >= 3;
console.log(p);

p = 4 < 3;
console.log(p);

p = 4 <= 3;
console.log(p);

p = 4 == 4;
console.log(p);

p = 4 === 4;
console.log(p);

p = 4 != 4;
console.log(p);

p = 4 !== 4;
console.log(p);

p = 4 != "4";
console.log(p);

p = 4 == "4";
console.log(p);

p = 4 === "4";
console.log(p);

let ab = "python";
let bc = "jargon";
console.log(ab.length);
console.log(bc.length);
console.log("python".length != "jargon".length);

//6.

/* 
4 > 3 && 10 < 12
4 > 3 && 10 > 12
4 > 3 || 10 < 12
4 > 3 || 10 > 12
!(4 > 3)
!(4 < 3)
!(false)
!(4 > 3 && 10 < 12)
!(4 > 3 && 10 > 12)
!(4 === '4')
There is no 'on' in both dragon and python*/

let m = 4 > 3 && 10 < 12;
console.log(m);

m = 4 > 3 && 10 > 12;
console.log(m);

m = 4 > 3 || 10 < 12;
console.log(m);

m = 4 > 3 || 10 > 12;
console.log(m);

m = !(4 > 3);
console.log(m);

m = !(4 < 3);
console.log(m);

m = !false;
console.log(m);

m = !(4 > 3 && 10 < 12);
console.log(m);

m = !(4 > 3 && 10 > 12);
console.log(m);

m = !(4 === "4");
console.log(m);

console.log("dragon".includes("on") && !"python".includes("on"));

/*
 What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
Find out the numbers of seconds elapsed from January 1, 1970 to now.*/

let now = new Date();
console.log(now.getFullYear());

now = new Date();
console.log(now.getMonth());

now = new Date();
console.log(now.getDay());

now = new Date();
console.log(now.getDay());

now = new Date();
console.log(now.getHours());

now = new Date();
console.log(now.getMinutes());

now = new Date();
console.log(now.getSeconds());

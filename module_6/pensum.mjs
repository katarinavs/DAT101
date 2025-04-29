"use strict";

const result1 = ("5" == 5); // true, because == converts the string to a number
const result2 = ("5" === 5); // false, because === checks for strict equality with


const condition1 = (5 > 3); // true, because 5 is greater than 3
const condition2 = (4 < 2); // false, because 4 is not less than 2
const result3 = (5 < 3) && (4 < 2) // false, because both conditions must be true
const result4 = (5 < 3) || (4 < 2) // true, because at least one condition is true

// Modulus (%) operator example:
// Grunntallet er 4. !! Hvor mange er til overs etter det har gått så mange ganger opp i 4 som det kan? !!
// 1 % 4 = 1
// 2 % 4 = 2
// 3 % 4 = 3
// 4 % 4 = 0
// 5 % 4 = 1
// 6 % 4 = 2
// 7 % 4 = 3
// 8 % 4 = 0
// 9 % 4 = 1

// Bruke modulus til å finne ut om det er oddetall eller partall
// 0 % 2 = 0 (partall)
// 1 % 2 = 1 (oddetall)
// 2 % 2 = 0 (partall)
// 3 % 2 = 1 (oddetall)
// 4 % 2 = 0 (partall)
// 5 % 2 = 1 (oddetall)

// 12  binær = 1100
// 15 binær = 1111
// 12 & 25 = 1100
// 12 | 15 = 1111
// 12 ^ 15 = 0011

// Disse er binære operatorer!

const weekdays = { Monday: 1, Tuesday: 2, Wednesday: 4, Thursday: 8, Friday: 16, Saturday: 32, Sunday: 64 };

// Plassering i alfabetet tilsier hvor høy verdien på teksten er; "A" er større enn "F".

let toggle = true;
toggle = !toggle; // false, because ! negates the value of toggle 

// Når en if-setning er sann, da kjøres koden. 

// Tabell eksempel:
const table1 = [1, 2, "hei på deg", (name: "Ola", age: 30), {1, 2, 3}];

const myFunction = function(aParam1, aParam2) {
    console.log("Hello World!");
    return aParam1 + aParam2;
}

myFunction(1, 2); /// 3
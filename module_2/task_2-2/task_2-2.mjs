"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/*
Use JavaScript to calculate the following expression, ensuring the result is -34:
2 + 3 * 2 - 4 * 6
Display both the original expression and the modified expression (with parentheses) along with their
results on the HTML page
*/
const result = 2 + (3 * (2 - 4)) * 6;
const result2 = "2 + (3 * (2 - 4)) * 6";

printOut("result = 2 + 3 * 2 - 4 * 6: " + result.toString());
printOut(result2  + " = " + eval(result2).toString());
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/*
Convert 25 meters and 34 centimeters to inches. An inc is 25.4 millimeters/inch*/
/*
    (25.4 / 1000) * 25.34m
*/

const millInInch = 25.4;
const millInMeters = 1000;
const meters = 25.34;
const answer = (meters * millInMeters) / millInInch;
const exactAnswer = answer.toFixed(2);

printOut("exactAnswer = " + exactAnswer.toString());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/*
Convert 3 days, 12 hours, 14 minuets, and 45 seconds to minutes
*/
const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const part3_Answer = 
 (3 * hoursInDay * minutesInHour) +
 (12 * minutesInHour) +
14 +
(45 / secondsInMinute);

printOut("part3_Answer = " + part3_Answer.toString());
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* 
Convert 6,322.52 minutes to days, hours, minutes, and seconds
*/
const numberOfMinutes = 6322.52; //dager//
let part4_Calc = numberOfMinutes / (60 * 24);
const part4_Days = Math.floor(part4_Calc);
printOut("Days = " + part4_Days);

part4_Calc = part4_Calc - part4_Days //timer//
part4_Calc = part4_Calc * hoursInDay;
const part4_Hours = Math.floor(part4_Calc);
printOut("Hours = " + part4_Hours);

part4_Calc = part4_Calc - part4_Hours; //minutter//
part4_Calc = part4_Calc * minutesInHour
const part4_Minutes = Math.floor(part4_Calc);
printOut("Minutes = " + part4_Minutes);

part4_Calc = part4_Calc - part4_Minutes;
part4_Calc = part4_Calc * secondsInMinute;
const part4_Seconds = Math.floor(part4_Calc);
printOut("Seconds = " + part4_Seconds);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/*
Convert 54 dollars to Norwegian kroner, and print the price for both:
NOK → USD and USD → NOK.
Use 76 NOK = 8.6 USD as the exchange rate.
The answer must be in whole "Kroner" and whole "dollars".
*/

const NOK = 76 / 8.6;
const USD = 8.6 / 76;
let amountUSD = 54;
const amountNOK = Math.round(amountUSD * NOK);
printOut(amountUSD + " dollars is " + amountNOK + " kroner ");
amountUSD = Math.round (amountNOK * USD);
printOut(amountNOK + " kroner is " + amountUSD + " dollars ");

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/*
Create a variable that contains the following text:
"There is much between heaven and earth that we do not understand."
● Print the number of characters in the text.
● Print the character at position number 19.
● Print the characters starting at position number 35 and 8 characters forward.
● Print the index at which "earth" starts in the text.
*/

let text = ("There is much between heaven and earth that we do not understand.")
printOut(text);

let length = text.length; 
printOut("Text Length = " + text.length);
printOut("Character at position number 19: " + text.charAt(19));
printOut("Characters from 35 and 8 forward are: " + text.substr(35, 8));
printOut("Index from earth is: = "  + text.indexOf("earth"));

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* 
Comparison, print the values for the following expressions (evaluate whether the statements are true):
● Is 5 greater than 3?
● Is 7 greater than or equal to 7?
● Is "a" greater than "b"?
● Is "1" less than "a"?
● Is "2500" less than "abcd"?
● "arne" is not equal to "thomas".
● (2 equals 5) is this statement true?
● ("abcd" is greater than "bcd") is this statement false?
*/

let nr1 = (5 > 3);
Boolean(nr1);
printOut("Is 5 greater than 3? " + Boolean(nr1));

let nr2 = (7 >= 7);
Boolean(nr2);
printOut("Is 7 greater than or equal to 7? " + Boolean(nr2));

let nr3 = ("a" > "b");
Boolean(nr3);
printOut("Is a greater than b? " + Boolean(nr3));

let nr4 = ("1" < "a");
Boolean(nr4);
printOut("Is 1 less than a? " + Boolean(nr4));

let nr5 = ("2500" < "abcd");
Boolean(nr5);
printOut("Is 2500 less than abcd? " + Boolean(nr5));

let nr6 = ("arne" != "thomas");
Boolean(nr6);
printOut("arne is not equal to thomas: " + Boolean(nr6));

let nr7 = (2 === 5);
Boolean(nr7);
printOut("2=5 is this statement true? " + (((2 === 5) === true).toString()));

let nr8 = ("abcd" > "bcd");
Boolean(nr8);
printOut("abcd is greater than bcd: " + Boolean(nr8));
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/*
Convert and print the following expressions:
● from text "254" to a number
● from text "57.23" to a number
● from text "25 kroner" to a number
*/

let str1 = "254";
let num1 = parseInt(str1, 10);
console.log(num1);
printOut("stringen 254 er nå en int: " + parseInt(str1, 10));

let str2 = "57.23";
let num2 = parseInt(str2, 10);
console.log(num2);
printOut("stringen 57.23 er nå en int: " + parseInt(str2, 10));

let str3 = "25 kroner";
let num3 = parseInt(str3, 10);
console.log(num3);
printOut("stringen 25 kroner er nå en int: " + parseInt(str3, 10));
printOut(newLine);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/*
Create a variable "r" and randomly generate a number from 1 to 360 (1 >= r <= 360).
*/

const r = Math.floor(Math.random() * 360) + 1;
printOut (r.toString());
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Use modulus (%) to calculate how many weeks and days are in 131 days
*/

let totalDays = 131;
let weeks = Math.floor(totalDays / 7);
let days = totalDays % 7;
printOut("131 days is " + (weeks.toString()) + " weeks and " + (days.toString()) + " days ");
printOut(newLine);
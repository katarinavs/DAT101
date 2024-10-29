"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* 
Complete the given "if" in the task_3-1.mjs file at part 1, statement so that it matches this: If I wake up at
exactly 7 o'clock then I can catch the bus to school. Run the program with different values of wake-up time
(6, 7, 8).
Extend part 1 to match this "if" and "else" statement: "If I wake up at exactly 7 o'clock, I can take the bus to
school, otherwise I have to take the car to school". Run the program with different values of wake-up time
(6, 7, 8).
Extend part 2 to expand more options: “If I wake up at exactly 7 o'clock, I can take the bus to school,
otherwise if I wake up exactly at 8 o'clock, I can take the train to school, otherwise I have to take the car to
school”. Run the program with a different value of wake-up time (7, 8).
*/
printOut("Task 1, 2 and 3");

let wakeUpTime = 7;
const haveToWakeUp = 7;
const wakeForTrain = 8;
if (wakeUpTime <= haveToWakeUp){
  printOut(" I can catch the bus to school if I wake up at " + haveToWakeUp);
}

  else if (wakeUpTime == wakeForTrain){
  printOut("I woke up at " + wakeUpTime + " which is too late for the bus, so I have to take the train to school");
}
  else {
  printOut("I have to drive my car to school");
}
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* 
Write an if statement that checks whether an integer variable is negative or positive, print the text
"Positive" or "Negative" accordingly. Run the program with different types of values for the variable to
check the if statement.
Change part 4 to print “Positive”, “Negative” or “Zero” accordingly. Run the program with different types of
values for the variable to check the "if" statement.
*/

let number = 5;

if (number > 3){
  printOut("The number is positive.");
} else if (number < 3){
  printOut("The number is negative.");
} else {
  printOut("The number is zero.");
}
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* 
Imagine you have a photo editing profession. And you have a website where people can upload pictures
for you to work on. However, the images must be 4MP or larger, if they are smaller, you cannot use them.
Create a variable that holds a generated random integer between 1 and 8 (inclusive). Use this variable to
simulate the uploaded image size and print it. Then create an if statement that prints out “Thank you” if the
size is equal to or greater than the limit. Otherwise, print out "The image is too small"
*/

let imageSize = Math.floor(Math.random() * 8);
const minSize = 4
const maxSize = 6

if (imageSize > minSize){
  printOut("Thank you.");
}else if (imageSize < minSize){
  printOut("The image is too small.");
} else {
  printOut("Thank you.");
}

if (imageSize > maxSize){
  printOut("Image is too large")
} else {
  printOut("Image is too large");
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* 
Expand part 6 to exclude if the image size is larger or equal to 6MP, then print out “Image is too large"
*/
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/*
Use this code:
const monthList =["January", "February", "Mars", "April", "Mai",
"Jun", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
Print if monthName contains “r”: “You must take vitamin D” else “You do not need to take vitamin D"
*/

const monthList =["January", "February", "March", "April", "May",
  "June", "July", "August", "September", "October", "November", "December"];
  const noOfMonth = monthList.length;
  const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
  printOut("Month: " + monthName);

if (monthName.includes("r")){
  printOut("You must take vitamin D.");
} else {
  printOut("You do not need to take vitamin D.")
}

let daysOfMonth = null;
switch(monthName){
case "January":
case "March":
case "May":
case "July":
case "August":
case "October":
case "December":
  daysOfMonth = 31
break;
case "February":
  daysOfMonth = 28
break;
case "April":
case "June":
case "September":
case "November":
  daysOfMonth = 30
}
printOut("There is " + daysOfMonth + " days in " + monthName);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* 
Expand exercise 8 to print how many days there are in the current month. And do not use date object.
*/
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* 
Imagine you have an art gallery, but you need to refurbish the premises, so you close the gallery from
March through May, but in April you have temporary premises in the building next door. Use the month
constant in exercise 8 to inform the status of your gallery in that month.
*/

const monthList1 =["January", "February", "March", "April", "May",
  "June", "July", "August", "September", "October", "November", "December"];
  const noOfMonth1 = monthList1.length;
  const monthName1 = monthList1[Math.floor(Math.random() * noOfMonth1)];
  printOut("Month: " + monthName1);

  let galleryStatus = null;

switch(monthName1){
  case "January":
  case "February":
  case "June":
  case "July":
  case "August":
  case "September":
  case "October":
  case "November":
  case "December":
    galleryStatus = "Open"
break;
  case "March":
  case "May":
    galleryStatus = "Closed"
break;
  case "April":
    galleryStatus = "Open next door"
  }
  printOut(galleryStatus);
printOut(newLine);

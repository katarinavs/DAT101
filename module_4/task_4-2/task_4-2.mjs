"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Create an array where you hard-code all the numbers from 1 to 20. Use a for loop to "run through" the
array and print all the elements in the array.
Hint: Look at the learning outcomes to find the solutions to the task. */

let numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20
];

for (let i = 0; i < numbers.length; i++) {   // i = index (starter på 0)
    printOut(numbers[i].toString());
} 

printOut(newLine);
// Part 2
let separator = ",";
let result = numbers.join(separator);
printOut(result);

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Take the array from task 1 and use a built-in method found in the array object to print all the elements with
a custom defined character separating all the elements. */

printOut("See part 1.");

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Create a constant that contains the text "Hei på deg, hvordan har du det?" (Hello there, how are you?)
Take this text and convert it into an array that contains all the words in the text, i.e., each element should
contain only one word from the text. Use a loop to traverse (run through) this array so that you can print
which word number, which index the word is at, and the word itself. */

const enHilsen = "Hei på deg, hvordan har du det?";
const hilsenArray = enHilsen.split(" ");

for (let i = 0; i < hilsenArray.length; i++) {
    printOut(`Word number: ${i + 1}, Index: ${i}, Word: ${hilsenArray[i]}`);
}

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Create an array with these names: "Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid",
"Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth" and "Kristin".
Then create a function that will remove an element from an array. Let the function have two parameters.
Parameter number one is the array from which you will remove the element, parameter two is the text that
should be removed from the array. Check if the element exists in the array so that you can inform whether
the element exists or not in the array. */

const girlNames = [
    "Anne", " Inger", " Kari", " Marit", " Ingrid", " Liv", " Eva", " Berit", " Astrid", " Bjørg", " Hilde",
    " Anna", " Solveig", " Marianne", " Randi", " Ida", " Nina", " Maria", " Elisabeth", " Kristin"
];
printOut(girlNames.toString());
printOut("");

const removeNames = removeNames.splice(girlNames, "Ida");
printOut(girlNames);
printOut("");


/*function removeName(array, element) {
    let index = array.indexOf(element);
    if (index !== -1) {
        array.splice(index, 1);
        printOut(`The name "${element}" has been removed.`);
    } else {
        printOut(`The name "${element}" does not exist in the array.`);
    }
    return array;
}

printOut(removeName(girlNames, "Ida")); */
printOut("");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Create a new array with these names: "Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah",
"Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor"and
"Magnus" Merge the arrays with girl names and boy names into a new array with all the names. */

let boyNames = [
    "Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah", "Elias", "Isak", "Henrik",
    "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor", "Magnus"
];
printOut(boyNames.toString());

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Create a class named TBook.
Let the constructor fill in the three attributes (title, author, and ISBN number). Create a public function
"toString" in the class, it should return a text string that contains the three attributes of the class.
Create an array that contains three instances of the TBook class. Use a loop to print out the books that are
in the list. */
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

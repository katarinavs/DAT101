"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Create an array where you hard-code all the numbers from 1 to 20. Use a for loop to "run through" the
array and print all the elements in the array.
○ Hint: Look at the learning outcomes to find the solutions to the task.*/

/*let text = "";
for(let x = 1; x < 20; x++){
    text += x.toString();
} */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let text = "";
for(let i = 0; i < numbers.length; i++){
    text += numbers[i];
    if(i < numbers.length - 1){
        text += ", "
    }
}
printOut(text);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/*Take the array from task 1 and use a built-in method found in the array object to print all the elements with
a custom defined character separating all the elements.
○ Hint: You should be able to do it with just one line of code*/

printOut(numbers.join(" 😃 "));

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Create a constant that contains the text "Hei på deg, hvordan har du det?" (Hello there, how are you?)
Take this text and convert it into an array that contains all the words in the text, i.e., each element should
contain only one word from the text. Use a loop to traverse (run through) this array so that you can print
which word number, which index the word is at, and the word itself.*/
text = "";

let greeting = "Hei på deg, hvordan har du det?"
const myArray = greeting.split(" ");
printOut(greeting);
printOut("Antall ord i min hilsen: " + myArray.length);

myArray.forEach(myFunction)

function myFunction(item, index) {
   printOut(index + " " + (index + 1) + " " + item + " "); 

}


/* EVT kan du gjøre dette: 
const greeting = "Hei på deg, hvordan har du det?";
const words = greeting.split(" ");
words.every(everyWord);

function everyWord(aWord, aIndex){
    printOut(aIndex + " " + (aIndex + 1) + " " + aWord);
    return true;
}

printOut("");*/


printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Create an array with these names: "Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid",
"Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth" and "Kristin".
Then create a function that will remove an element from an array. Let the function have two parameters.
Parameter number one is the array from which you will remove the element, parameter two is the text that
should be removed from the array. Check if the element exists in the array so that you can inform whether
the element exists or not in the array.*/

text = "";

let girls = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid",
"Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

function removeFromArray(aArray, aItem){
    const result = aArray.indexOf(aItem);
    if(result > -1){
        printOut("Can remove " + " " + aItem + " from Array");
        aArray.splice(result, 1);
        //Can remove from array
    }else{
        printOut("Can not remove " + " " + aItem + " from Array");
        //Can not remove from array
    }
}


function findAndRemoveFromArray(aArray, aItem){
     let index = -1
     const result = aArray.find(findName);
   
    if(result){
        printOut("Can remove " + " " + aItem + " from array");
        aArray.splice(index, 1);
    }else{
        printOut("Can not remove " + " " + aItem + " from array");
    }

    function findName(aName, aIndex){
        index = aIndex
        return aName === aItem;
    }
}

removeFromArray(girls, "Arne");
findAndRemoveFromArray(girls, "Ingrid");
printOut(girls);


printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Create a new array with these names: "Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah",
"Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor"and
"Magnus" Merge the arrays with girl names and boy names into a new array with all the names.
○ Hint: You can solve this with two lines of code. Remember that an empty array also has
properties and methods*/

const boys = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah", "Elias", "Isak", "Henrik", "Aksel", "Kasper", 
"Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor", "Magnus"];

const allPeople = girls.concat(boys);
allPeople.forEach(printName);
function printName(aName){
    printOut(aName);
}



printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Create a class named TBook.
Let the constructor fill in the three attributes (title, author, and ISBN number). Create a public function
"toString" in the class, it should return a text string that contains the three attributes of the class.
Create an array that contains three instances of the TBook class. Use a loop to print out the books that are
in the list.*/

class TBook {
    #Title;
    #Author;
    #ISBN;
    constructor(aTitle, aAuthor, aISBN){
        this.#Title = aTitle;
        this.#Author = aAuthor;
        this.#ISBN = aISBN;
    }
    toString(){
        return this.#Title + ", " + this.#Author + ", " + this.#ISBN;
    }
}

const books = [
new TBook("The hobbit", "J.R.R. Tolkien", "978-0-395-07122-1"),
new TBook("The shining", "Stephen King", "978-0-385-12167-5"),
new TBook("The DaVinci Code", "Dan Brown", "978-0-385-50420-5")
];

books.forEach(printBooks);
function printBooks(aBook){
    printOut(aBook.toString());
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Create a static object that looks like this: 
You can replace the language in the "name" attributes with whatever you want.
Use this function: Object.keys(EWeekDays) to create an array with the "keys" that exist in the
EWeekDays object.
Create a loop that traverses this "key" array and prints all the elements that exist in the EWeekDays object
○ Hint: Use W3Schools as I have shown you, here you see good examples of exactly this!*/

const EWeekDays = {
    WeekDay1: { value: 0x01, name: "Mandag" },
    WeekDay2: { value: 0x02, name: "Tirsdag" },
    WeekDay3: { value: 0x04, name: "Onsdag" },
    WeekDay4: { value: 0x08, name: "Torsdag" },
    WeekDay5: { value: 0x10, name: "Fredag" },
    WeekDay6: { value: 0x20, name: "Lørdag"},
    WeekDay7: { value: 0x40, name: "Søndag", type: "Helligdag" },
    Workdays: { value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Arbeidsdager" },
    Weekends: { value: 0x20 + 0x40, name: "Helg" },
  };
  
  const keys = Object.keys(EWeekDays); //Dette gir oss alle nøklene i objektet EWeekDays
  printOut("Keys: " + keys.join(", ")); // Her printer vi ut alle nøklene i objektet EWeekDays
  const values = Object.values(EWeekDays); //Dette gir oss alle verdiene i objektet EWeekDays
  printOut("Values: " + values.join(", ")); // Her printer vi ut alle verdiene i objektet EWeekDays
  let valueKeys = Object.values(EWeekDays[keys[7]]); //Her ser vi på verdien til nøkkelen Workdays (7)
  printOut("ValueKeys: " + valueKeys.join(", ")); // Her printer vi ut verdien til nøkkelen Workdays (7)
  
  //Vi går igjennom alle nøklene til objektet EWeekDays
  for(let index = 0; index < keys.length; index++){
    let text = "";
    //Vi henter ut navnet på nøkkelen (f.eks. WeekDay1)
    const key = keys[index];
    text = key + ": ";
    //TODO: Skriv ut alle nøklene og verdiene til nøklene
    const keyObject = EWeekDays[key]; //Henter vi objektet til nøkkelen (f.eks. WeekDay1)
    const keyObjectKeys = Object.keys(keyObject); //Her henter vi alle nøklene til for eksempel WeekDay1
    for(let i = 0; i < keyObjectKeys.length; i++){
      const keyObjectKey = keyObjectKeys[i]; //Her henter vi ut nøkkelen (f.eks. value)
      const keyObjectValue = keyObject[keyObjectKey]; //Her henter vi ut verdien til nøkkelen (f.eks. 0x01)
      text += " " + keyObjectKey + ": " + keyObjectValue;
    }
    printOut(text);
  }

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Create an array that contains 35 random numbers from 1 to 20 (inclusive). Sort these arrays in ascending
and descending order. To get full credit for this task, it must be solved with "callback" functions that you
use in the .sort(...) method of this array.*/

const randomValues = [];
for(let i = 0; i < 35; i++){
  const randomValue = Math.ceil(Math.random() * 20); //Math.floor(Math.random() * 20) + 1;
  randomValues.push(randomValue);
}
printOut("Random values: " + randomValues.join(", "));
//TODO: Sorter tabellen i stigende rekkefølge, og bruk en callback-funksjon
//1. Hva er en callback-funksjon?
//2. Hvordan sorterer du en tabell
//3. Hvordan velge rekkefølgen på sorteringen

randomValues.sort(sortRandomValues);
printOut("Tabellen i stigende rekkefølge: " + randomValues.join(", "));
randomValues.reverse(); //Flipper rekkefølgen på tabellen, ingen sortering. Må sorteres først.
printOut("Tabellen i synkende rekkefølge: " + randomValues.join(", "));

function sortRandomValues(aValue1, aValue2){
  return aValue1 - aValue2;
}

/*
Pilfunksjoner: ((argumenter)=>{body})
Ikke navngitte funksjoner: function(argumenter){body}
vanlige navngitte funksjoner: function navn(argumenter){body}
*/

printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Based on part 8, print out how many times the different numbers occur in the array. First, print the
numbers and their frequency, then print the frequencies and which numbers they correspond to. You must
print the most frequent ones first, and if there are multiple numbers where the frequency is the same, then
it should again be sorted from the smallest to the largest number.*/

const freq = {};
for(let i = 0; i < randomValues.length; i++){
  const value = randomValues[i];
  // Hva skjer hvis freq[value] ikke er definert?
  if(freq[value]){// Husk at undefined er false
    freq[value]++;
  }else{
    freq[value] = 1;
  }
}
//Her er alle tallene og frekvensen til tallene i objektet freq
//Sorter denne listen slik at de mest frekvente tallene kommer først
let freqKeys = Object.keys(freq);
freqKeys.sort(sortFreq);//Sorterer listen med callback-funksjonen sortFreq

function sortFreq(aValue1, aValue2){
  //Her sorter vi listen basert på frekvensen til tallene
  const freq1 = freq[aValue1];
  const freq2 = freq[aValue2];
  return freq2 - freq1;
}

text = ""; //Klargjør teksten som skal skrives ut (tømmer den)
for(let i = 0; i < freqKeys.length; i++){
  const freqKey = freqKeys[i]; //Hjelpevariabel for å hente ut nøkkelen
  const freqValue = freq[freqKey];//Hjelpevariabel for å hente ut verdien
  text += freqKey + ": " + freqValue + ", ";//Legger til tall og frekvens i teksten
}
printOut(text);//Skriver ut teksten

/*
Eksempel på tomme objekter, og definere nøkler i objektet, samt å sette verdier til nøklene
const testObject = {};
console.log(testObject);
const rand = Math.ceil(Math.random() * 20);
testObject[rand] = 0;
console.log(testObject);
testObject[rand]++;
console.log(testObject);
testObject[rand]++;
console.log(testObject);
testObject[rand]++;
console.log(testObject);
*/

printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Create an array that contains rows and columns (2 dimensions, 5x9). Start with an empty array. Use "for"
loops to create rows and columns, respectively. In each "cell," create a text that shows which row and
column the "cell" is in. Then create two new sets of "for" loops to print the array itself.
○ Hint: For each round in the loop for the rows, you create a column. And for each round in the
columns, you write the "cell" value.*/

const myTable = [];
for(let row = 0; row < 5; row++){
  //Hva gjør vi nå?
  const columns = [];
  for(let column = 0; column < 9; column++){
    const cell = + row + "," + column;
    columns.push(cell);
  }
  myTable.push(columns);
}

text = ""; //Klargjør teksten som skal skrives ut (tømmer den)
for(let row = 0; row < myTable.length; row++){
  //Hva gjør vi nå? Vi må hente ut radene
  const columns = myTable[row];
  //Traverserer kolonnene
  for(let column = 0; column < columns.length; column++){
    const cell = columns[column]; //Hjelpevariabel for å hente ut cellen
    text += "[" + cell + "]"; //Legger til cellen i teksten
  }
  printOut(text);//Skriver ut teksten
  text = ""; //Tømmer teksten
}
printOut("Replace this with you answer!");
printOut(newLine);
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

// let count = 1;
const numbers  = [20, 15, 10, 17, 25, 3, 5, 11, 13, 19, 23, 27];

printOut("Original array: " + numbers.join(", "));

// sort the numbers in ascending order
numbers.sort(compareNumbers);
printOut("Sorted array: " + numbers.join(", "));

function compareNumbers(aNumberA, aNumberB) {
   //  printOut(count + " - Comparing " + aNumberA + " and " + aNumberB + " returns " + (aNumberA - aNumberB));
    // count++;
    return aNumberA - aNumberB;
}


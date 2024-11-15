"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

const AccountType = {
    Normal: "Brukskonto",
    Savings: "Sparekonto",
    Credit: "Kredittkonto",
    Pension: "Pensonskonto"
}

class TAccount {
    #type;
    #balance;
    #withdrawCount
    constructor(aType){
        this.#type = aType;
        this.#balance = 0;
        this.#withdrawCount = 0;
    }

    toString(){
        return this.#type;
    }

    setType(aType) {
        let text = "Account type changed from " + this.#type;
        this.#type = aType;
        this.#withdrawCount = 0;
        text +=  " to " + this.#type;
        printOut(text);
    }

    getBalance(){
        return this.#balance;
    }

    deposit(aAmount){
        this.#balance += aAmount;
        this.#withdrawCount = 0;
        printOut("Deposit of " + aAmount + "kr, new balance is " + this.#balance + "kr ");
    }

    withdraw(aAmount) {
        let canWithdraw = true;
        let text = "";
        switch(this.#type) {
            case AccountType.Savings:
                if (this.#withdrawCount < 3) {
                this.#withdrawCount++;
                canWithdraw = true;
            } else {
                canWithdraw = false;
                text = "Cannnot withdraw more than 3 times from a " + this.#type + " account.";
        }
        break;
    case AccountType.Pension:
            canWithdraw = false;
            text = "Cannot withdraw from a " + this.#type + " account.";
    break;
    }
    
        if(canWithdraw) {
            this.#balance -= aAmount;
            printOut("Withdraw of " + aAmount + "kr, new balance is " + this.#balance + "kr ");
    } else {
            printOut(text);
        }
    }
}


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(AccountType.Normal + ", " + AccountType.Savings + ", " + AccountType.Credit + ", " + AccountType.Pension);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let myAccount = new TAccount(AccountType.Normal);
printOut("myAccount: " + myAccount.toString());
printOut(newLine);
myAccount.setType(AccountType.Savings);
printOut(newLine);
printOut("myAccount: " + myAccount.toString());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
myAccount.deposit(100);
printOut(newLine);
myAccount.withdraw(25);
printOut("My account balance is " + myAccount.getBalance() + "kr ");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
myAccount.deposit(25);
printOut(newLine);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30);
printOut(newLine);
myAccount.setType(AccountType.Pension);
printOut(newLine);
myAccount.withdraw(10);
printOut(newLine);
myAccount.setType(AccountType.Savings);
printOut(newLine);
myAccount.withdraw(10);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

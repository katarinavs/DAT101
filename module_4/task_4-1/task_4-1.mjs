"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

const CurrencyTypes = {
    NOK: {value: 1.0000, name: "Norske kroner", denomination: "kr"},
        EUR: {value: 0.0985, name: "Europeiske euro", denomination: "€"},
        USD: {value: 0.1091, name: "United States dollar", denomination: "$"},
        GBP: {value: 0.0847, name: "Pound sterling", denomination: "£"},
        INR: {value: 7.8309, name: "Indiske rupee", denomination: "₹"},
        AUD: {value: 0.1581, name: "Australske dollar", denomination: "A$"},
        PHP: {value: 6.5189, name: "Fillippinske peso", denomination: "₱"},
        SEK: {value: 1.0580, name: "Svenske kroner", denomination: "kr"},
        CAD: {value: 0.1435, name: "Kanadiske dollar", denomination: "C$"},
        THB: {value: 3.3289, name: "Thai baht", denomination: "฿"}
};

const AccountType = {
    Normal: "Brukskonto",
    Savings: "Sparekonto",
    Credit: "Kredittkonto",
    Pension: "Pensonskonto"
}

class TAccount {
    #type;
    #balance;
    #withdrawCount;
    #currencyType;
    constructor(aType){
        this.#type = aType;
        this.#balance = 0;
        this.#withdrawCount = 0;
        this.#currencyType = CurrencyTypes.NOK;
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

    deposit(aAmount) {
        this.#balance += aAmount;
        this.#withdrawCount = 0;
        let text = "Deposit of " + aAmount + this.#currencyType.denomination;
        text += ", new balance is ";
        text += this.#balance + this.#currencyType.denomination;
        printOut(text + ".");
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
                text = "Cannot withdraw more than 3 times from a " + this.#type + " account.";
        }
    break;
    case AccountType.Pension:
            canWithdraw = false;
            text = "Cannot withdraw from a " + this.#type + " account.";
    break;
    }
    
        if(canWithdraw) {
            this.#balance -= aAmount;
            printOut("Withdraw of " + aAmount + "kr, new balance is " + this.#balance + "kr. ");
    } else {
            printOut(text);
        }
    } // End of function withdraw

setCurrencyType(aNewCurrencyType) {
    if(this.#currencyType === aNewCurrencyType) {
        return;
    }
    this.#balance = this.#balance * this.#currencyConvert(aNewCurrencyType);
    let text = "The account currency has changed from ";
    text += this.#currencyType.name + " to " + aNewCurrencyType.name;
    printOut(newLine);
    text += newLine + "New balance is ";
    text += this.#balance.toFixed(2) + aNewCurrencyType.denomination;
    this.#currencyType = aNewCurrencyType;
    printOut(text);
}

#currencyConvert(aType) {
    return CurrencyTypes.NOK.value / this.#currencyType.value * aType.value;
}

} // End of class TAaccount

deposit(aAmount, aCurrencyType){ 
    if (aCurrencyType === undefined){
        aCurrencyType = CurrencyTypes.NOK;
    }

    let convertedAmount = aAmount * this.#currencyConvert(aCurrencyType);
    this.#balance += convertedAmount;
    this.#withdrawCount = 0;
    let text = `Deposit of ${aAmount}${aCurrencyType.denomination} (${convertedAmount.toFixed(2)}${this.#currencyType.denomination})`;
    text += `, new balance is ${this.#balance.toFixed(2)}${this.#currencyType.denomination}`;
    printOut(text + ".");
}


withdraw(aAmount, aCurrencyType = CurrencyTypes.NOK);
    let canWithdraw = true;
    let text = "";
    let convertedAmount = aAmount * this.#currencyConvert(aCurrencyType);


    switch (this.#type) {
        case AccountType.Savings:
            if (this.#withdrawCount < 3) {
                this.#withdrawCount++;
                canWithdraw = true;
            } else {
                canWithdraw = false;
                text = `Cannot withdraw more than 3 times from a ${this.#type} account.`;
            }
            break;
        case AccountType.Pension:
            canWithdraw = false;
            text = `Cannot withdraw from a ${this.#type} account.`;
            break;
    }

    if (canWithdraw) {
        this.#balance -= convertedAmount;
        printOut(`Withdraw of ${aAmount}${aCurrencyType.denomination} (${convertedAmount.toFixed(2)}${this.#currencyType.denomination}), new balance is ${this.#balance.toFixed(2)}${this.#currencyType.denomination}.`);
    } else {
        printOut(text);
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
myAccount.deposit(150);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
myAccount.setCurrencyType(CurrencyTypes.SEK);
myAccount.setCurrencyType(CurrencyTypes.USD);
myAccount.setCurrencyType(CurrencyTypes.NOK);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.deposit(12, CurrencyTypes.USD);
printOut(newLine);
myAccount.withdraw(10, CurrencyTypes.GBP);
printOut(newLine);

// Endre valuta noen ganger
myAccount.setCurrencyType(CurrencyTypes.EUR);
printOut(newLine);
myAccount.setCurrencyType(CurrencyTypes.PHP);
printOut(newLine);

// Ta ut resten av saldoen i en annen valuta
myAccount.withdraw(myAccount.getBalance(), CurrencyTypes.INR);
printOut(newLine);

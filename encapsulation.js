// /*
//     Encapsulation : - Binding data members (class variables), and method into a single unit 
//     called the encapsulation.

// */

// class BankAccount {
//     #amount = 0;

//     checkBal() {
//         return `Your Available ${this.#amount}`
//     }

//     addDeposit(depAmount) {
//         this.#amount += depAmount

//         return `Deposit Successfully Amount : ${depAmount} Total Amount : ${this.#amount}`
//     }

//     withdrawAmount(withdrawAmt) {
//         this.#amount -= withdrawAmt
//         return `Withdraw Successfully Amount : ${withdrawAmt} Remaining Amount : ${this.#amount}`
//     }
// }

// //  js object
// // literals {}, using new keyword

// //  constructor is responsible for init the object of class using new keyword 


// //  memory - [4byte],[4byte],[4byte],[4byte] hashcode - memory address ke reference
// const bank = new BankAccount();
// // console.log(bank.#amount);
// console.log(bank.addDeposit(1500));
// console.log(bank.addDeposit(500));
// console.log(bank.withdrawAmount(700));

class studentReportCard {
    #name = "";
    #marks = 0;

    addMark(mark) {
        this.#marks += mark;
        return `Marks successfuly updated : ${mark} Total marks are: ${this.#marks}`
    }
}

const student = new studentReportCard();
console.log(student.addMark(50));
console.log(student.addMark(50));



//check password
class passwordChecker {
    #password;

    setPassword(pass) {
        this.#password = pass;
        return "Password set succesfully"
    }
    checkPassword(pass) {
        return this.#password == pass ? "Access Granted  " : "Access Denied";
    }
}
const passw = new passwordChecker();
console.log(passw.setPassword("aman"));
console.log(passw.checkPassword("123"));



//wallet balance checker
class wallet {
    #balance = 0;

    addMoney(amount) {
        this.#balance += amount;
        return `amount updated ${amount} successfully : Total amount is ${this.#balance}`


    }
    withdraw(amount) {
        if (amount > this.#balance) return "insufficient balace";
        this.#balance -= amount;
        return `spend ${amount} remaining amount is ${this.#balance} `
    }
}
const transaction = new wallet();

console.log(transaction.addMoney(500));
console.log(transaction.addMoney(500));
console.log(transaction.withdraw(500));


//temp converter
class Temperature {
    #celsius = 0;

    setCelsius(c) {
        this.#celsius = c;
        return `Temperature Set: ${c}°C`;
    }

    toFahrenheit() {
        return `${(this.#celsius * 9/5) + 32}°F`;
    }
}

const temp = new Temperature();
console.log(temp.setCelsius(25));
console.log(temp.toFahrenheit()); 
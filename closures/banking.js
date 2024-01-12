function makeBankAccount(balance) {
  return {
    transactions: [{initialBalance: balance}],
    displayBalance() {
      console.log(balance);
      return balance;
    },
    deposit(amount) {
      this.transactions.push({deposit: amount});
      balance += amount;
      return amount;
    },
    withdraw(amount) {
      if (balance - amount < 0) {
        this.transactions.push({withdrawal: balance});
        let withdrawAmount = balance;
        balance = 0;
        return withdrawAmount;
      } else {
        this.transactions.push({withdrawal: amount});
        balance -= amount;
        return amount;
      }
    },
    displayTransactions() {
      this.transactions.forEach(t => console.log(t));
    },  
  }
}

function makeBank() {
  let accountID = 100;
  let accounts = [];

  return {
    openAccount() {
      newAccount = makeBankAccount(0);
      newAccount.number = (accountID += 1);
      accounts.push(newAccount);
      return newAccount;
    },
    transfer(source, destination, amount) {
      let transferAmount = source.withdraw(amount);
      destination.deposit(amount);
      return transferAmount;
    }
  }
}


let bank = makeBank();
console.log(bank.accounts);

let source = bank.openAccount();
let destination = bank.openAccount();

source.deposit(10000);
console.log(bank.transfer(source, destination, 3350));
source.displayBalance();
destination.displayBalance();








let acc = makeBankAccount(5000);
acc.displayBalance();
acc.deposit(3500);
acc.displayBalance();
acc.withdraw(2000);
acc.displayBalance();
acc.withdraw(10000);
acc.displayBalance();
acc.displayTransactions();
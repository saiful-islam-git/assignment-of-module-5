// BankAccount class definition
class BankAccount {
  constructor(accountNumber, ownerName, balance = 0) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = balance;
  }

  // Method to deposit money
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited $${amount} into account ${this.accountNumber}.`);
    } else {
      console.log("Deposit amount must be positive.");
    }
  }

  // Method to withdraw money
  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds.");
    } else if (amount > 0) {
      this.balance -= amount;
      console.log(`Withdrew $${amount} from account ${this.accountNumber}.`);
    } else {
      console.log("Withdrawal amount must be positive.");
    }
  }

  // Method to get the balance
  getBalance() {
    return this.balance;
  }

  // Method to display account information
  displayAccountInfo() {
    console.log(`Account Number: ${this.accountNumber}`);
    console.log(`Owner Name: ${this.ownerName}`);
    console.log(`Balance: $${this.balance}`);
  }
}

// Creating two instances of BankAccount
const account1 = new BankAccount(1001, "John Doe", 500);
const account2 = new BankAccount(1002, "Jane Smith", 1000);

// Demonstrating functionality
console.log("=== Account 1 Operations ===");
account1.displayAccountInfo();
account1.deposit(200); // Deposit $200
account1.withdraw(100); // Withdraw $100
account1.withdraw(700); // Withdraw $700 (should show Insufficient funds)
console.log(`Balance: $${account1.getBalance()}`);
account1.displayAccountInfo();

console.log("\n=== Account 2 Operations ===");
account2.displayAccountInfo();
account2.deposit(300); // Deposit $300
account2.withdraw(1200); // Withdraw $1200 (should show Insufficient funds)
console.log(`Balance: $${account2.getBalance()}`);
account2.displayAccountInfo();

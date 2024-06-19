let balance

// Task 1: Create a function to handle deposits into a bank account.
function deposit(amount) {
    balance += amount
}

// Task 2: Implement a function to handle withdrawals from a bank account, ensuring sufficient balance.
function withdraw(amount) {
    if (balance - amount > 0) {
        balance -= amount
    } else {
        console.log(`Insufficient funds to withdraw ${amount}`)
    }
}

// Task 3: Develop a function to check the current balance of the account.
function check() {
    console.log(`Current balance: ${balance}`)
}
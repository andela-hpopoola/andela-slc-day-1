'use strict';

class SavingsAccount {
	constructor(amount) {
		if (amount < 0){
			this.balance = 0;
		} else {
			this.balance = amount;	
		}
		this.activated = true;
		this.min_balance = 0;
	}
	
	// Deposit
	deposit(amount) {
		if (amount < 0){
			return "Invalid deposit amount";
		} else {
			var total = this.balance += amount;
			if (total > this.min_balance)
				this.activated = true;
			return total;
		}
	}

	// withdraw
	withdraw(amount){
		if (amount < 0)
			return "Invalid withdraw amount";
		else if ((this.balance - amount) < 0)
			return "Cannot withdraw beyond the current account balance";
		else return this.balance -= amount;
	}

	// Balance
	getBalance() {
	  return this.balance;
	}

	getStatus(){
		if (this.activated){
			return 'ACTIVATED'
		} else {
			return 'NOT ACTIVATED'
		}
	}

}

// var account = new SavingsAccount(-500);
// var amount = -200;
// console.log(account.deposit(amount));
// console.log(account.getBalance());

module.exports = SavingsAccount;
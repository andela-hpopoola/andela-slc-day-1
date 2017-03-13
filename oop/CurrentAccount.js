'use strict';

var SavingsAccount = require('./SavingsAccount.js');

class CurrentAccount extends SavingsAccount {
	constructor(amount) {
	    super(amount);
	    this.min_balance = 500;
	    if (amount < this.min_balance)
	    	this.activated = false;
  	}

	// overide withdraw
	withdraw(amount){
		if ((this.balance - amount) < 500)
			return "Cannot withdraw beyond the minimum account balance"
		else if ((this.balance - amount) < 0)
			return "Cannot withdraw beyond the current account balance";
		else if (amount < 0)
			return "Invalid withdraw amount";
		else {
			if (this.activated){
				return this.balance -= amount;
			} else {
				return "Cannot withdraw. Account is not ACTIVATED"
			}
		} 
			
	}

	activateAccount(){
		this.activated = true;
	}
}

module.exports = CurrentAccount;

// var account = new CurrentAccount(-500);
// var amount = -200;
// console.log(account.deposit(amount));
// console.log(account.getStatus());
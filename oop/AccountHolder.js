'use strict';

var SavingsAccount = require('./SavingsAccount.js');
var CurrentAccount = require('./CurrentAccount.js');

class AccountHolder {
	constructor(firstName, lastName, accountNo, accountType, amount) {
	  	this.firstName = firstName;
	  	this.lastName = lastName;
	  	this.accountNo = accountNo;
	  	this.accountType = accountType || 1;
	  	this.amount = amount || 0;
	  	if (this.accountType == 1)
	  		this.account = new SavingsAccount(this.amount);
	  	else
	  		this.account = new CurrentAccount(this.amount);
	}
	
	// Name
	getName() {
	  return this.firstName + " " + this.lastName;
	}
    
	getFirstName() {
	  return this.name;
	}
	
	setFirstName(firstName) {
	  this.name = firstName;
	}
	
	getLastName() {
	  return this.name;
	}
	
	setLastName(lastName) {
	  this.name = lastName;
	}


	// Account Number
	getAccountNumber() {
	  return this.accountNo;
	}

	setAccountNumber(accountNo) {
	  this.accountNo = accountNo;
	}

	
	// Account Type
	getAccountType() {
	  if (this.accountType === 1)
	  	return 'Savings Account';
	  else return 'Current Account';
	}
	
	setAccountType (accountType) {
	  this.accountType = accountType;
	}


	// Get Balance
	getBalance() {
	  return this.account.getBalance();
	}
	// Deposit
	deposit(amount) {
	  return this.account.deposit(amount);
	}
	// Withdraw
	withdraw(amount) {
	  return this.account.withdraw(amount);
	}
	
	// Get Account Details
	getAccountDetails(){
	 	return `
	 	Account Details
	 	---------------------------------------------
	  	Name:       \t${this.getName()}
      	Account N0: \t${this.getAccountNumber()}
      	Account Type:\t${this.getAccountType()}
      	Balance: 	 \t${this.getBalance()}
      	Status: 	 \t${this.account.getStatus()}
      	----------------------------------------------
      	`;
	}
	
	toString() {
		return this.getAccountDetails();
	}
}

module.exports = AccountHolder;

// var haruna = new AccountHolder('Haruna', 'Popoola', '1108023388', 2, 200);
// console.log(haruna.getAccountDetails());

	 	// Account Details
	 	// ---------------------------------------------
	  // 	Name:       	Haruna Popoola
   //    	Account N0: 	1108023388
   //    	Account Type:	Current Account
   //    	Balance: 	 	200
   //    	Status: 	 	NOT ACTIVATED
   //    	----------------------------------------------
      	

// var balance = haruna.deposit(600);
// console.log(haruna.getAccountDetails());
	 	// Account Details
	 	// ---------------------------------------------
	  // 	Name:       	Haruna Popoola
   //    	Account N0: 	1108023388
   //    	Account Type:	Current Account
   //    	Balance: 	 	800
   //    	Status: 	 	ACTIVATED
   //    	----------------------------------------------
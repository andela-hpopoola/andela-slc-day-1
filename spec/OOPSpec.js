'use strict';

var AccountHolder  = require('../oop/AccountHolder.js');
var SavingsAccount = require('../oop/SavingsAccount.js');
var CurrentAccount = require('../oop/CurrentAccount.js');


var account1 = new AccountHolder('Haruna', 'Popoola', '1108023388');
var account2 = new AccountHolder('Ilesanmi', 'Ojo', '88888888', 2, 1200);
var savings = new SavingsAccount(500);
var current = new CurrentAccount(500);

describe("Account Holder Class: Testing the Properties", function() {

  it("The account1 should be a type of `object`, and an instance of the `Account Holder` class", function() {
    expect(typeof account1).toEqual(typeof {});
    expect(account1 instanceof AccountHolder).toBeTruthy();
  });

  it("The account1 amount should be `0` if no amount is passed as a parameter", function() {
    expect(account1.amount).toEqual(0);
    expect(account1.accountType).toBe(1);
  });

  it("The first name and lastname should be a property of the AccountHolder", function() {
    expect(account1.firstName).toBe('Haruna');
    expect(account1.lastName).toBe('Popoola');
  });

  it("The AccountHolder shoud have one (1) for savings and two (2) for current accounts", function() {
    expect(account1.accountType).toBe(1);
    expect(account2.accountType).toBe(2);
  });

});

describe("Account Holder Class: withdraw and deposit", function() {

  it("The account1 should have 300 after a deposit of 300", function() {
    expect(account1.deposit(300)).toBe(300);
  });

  it("The account1 should have 200 after a withdrawal of 100", function() {
    expect(account1.withdraw(100)).toBe(200);
  });

  it("The account1 should return `Invalid deposit amount` after deposit of negative number", function() {
    expect(account1.deposit(-500)).toBe('Invalid deposit amount');
  });

  it("The account1 should return `Cannot withdraw beyond the current account balance` after withdraw of 500", function() {
    expect(account1.withdraw(500)).toBe('Cannot withdraw beyond the current account balance');
  });

  it("The account1 should return `Invalid withdraw amount` after withdraw of negative amount", function() {
    expect(account1.withdraw(-300)).toBe('Invalid withdraw amount');
  });

});


describe("Current and Savings Account Class : Inheritance, composition and polymorphism", function() {

  it("The car drive function should return the instance of the Car class", function() {
    expect(current instanceof CurrentAccount).toBeTruthy();
    expect(current instanceof SavingsAccount).toBeTruthy();
  });

  it("The account2 should be able to access SavingsAccount methods", function() {
    expect(account2.getBalance()).toBe(1200);
  });

});


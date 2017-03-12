'use strict'
// Write a *getPrimes* function that takes an integer value n as argument and generates prime numbers from 0 to n with asymptotic analysis.
// The generated prime numbers should be in an array.
// If no prime number is obtainable for the input, return an empty array.
// Your logic should be as efficient as possible (with minimal iterations).
// Your code should also address edge cases (invalid input, negative input value, or zero as input).
var getPrimes = function(num) {

    // address invalid input
    if (!Number.isInteger(num)) {
        return 'Invalid Input';
    }

    // return empty array for negative input value, zero and one
    if (num <= 1) {
        return [];
    }

    // Sieve of Eratosthenes
    var sieve  = [];
    var result  = [];

    // cater for even numbers
    for (var i = 0; i <= num / 2; i++) {
        sieve .push(true);
    }
    
    // 2 is the first prime and is an even number
    // add to the result
    result.push(2);
    
    // Start from 3 to cater for other odd numbers
    for (var i = 3; i <= num; i += 2) {

        if (sieve [Math.floor(i/2)]) {
            // current value is a prime number
            // add to results
            result.push(i);

            // Get multitudes of current value and set to false
            for (var j = i*i; j <= num; j += i * 2) {
                sieve [Math.floor(j/2)] = false;
            }
        }
    }

    return result ;
}
// asymptotic analysis
// console.time("getPrimes");
// var primes = getPrimes(10000000);
// console.timeEnd("getPrimes");
// console.log('length=',primes.length); // 664579
module.exports = {
    getPrimes: getPrimes
}
/*
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function fizzBuzz(n) {
    // Write your code here
    for (var i = 1; i <= n; i++) { 
        if (i % 3 === 0 && i % 5 === 0) { 
            console.log("FizzBuzz");
        }

        if (i % 3 === 0 && i % 5 !== 0) { 
            console.log("Fizz");
        }

        if (i % 3 !== 0 && i % 5 === 0) { 
            console.log("Buzz");
        }

        if (i % 3 !== 0 && i % 5 !== 0) { 
            console.log(i);
        }
    }
}

fizzBuzz(15);
/*
 * Complete the 'cookies' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY A
 */

function cookies(k, A) {
    // Write your code here
    
    if (k < 0 || k > Math.pow(10, 9) || A.length < 1 || A.length > Math.pow(10, 6)) {
        return -1;
    }
    
    var neededIterations = 0;

    A = A.sort((a, b) => a - b);

    while (A[0] < k) {
        var newCookie = (1 * A[0]) + (2 * A[1]);

        A = A.slice(2, A.length);

        A.push(newCookie);

        A = A.sort((a, b) => a - b);

        neededIterations++;
    }
    
    var errorCookie = A.find((item) => item > Math.pow(10, 6));
    
    if (errorCookie)
        return -1;

    return neededIterations;
}

var minSweetness = 7;
var cookiesArr = [1, 2, 3, 9, 10, 12];

console.log(cookiesArr.slice(2, cookiesArr.length));

console.log("Needed iterations: " + cookies(minSweetness, cookiesArr));
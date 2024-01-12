function isPalindrome(s) {
    for (let i = 0; i < s.length / 2; i++) {
        if (s[i] !== s[s.length - 1 - i]) {
            return false;
        }
    }
    return true;
}


function palindromeIndex(a) {
    // Write your code here

    if (a.length < 1 || a.length > Math.pow(10, 5)) {
        return -1;
    }

    if (isPalindrome(a)) {
        return -1;
    }

    for (let i = 0; i < a.length; i++) {
        var newWord = a.slice(0, i) + a.slice(i + 1);

        if (isPalindrome(newWord)) {
            return i;
        }
    }

    return -1
}

var word = "kayak";
word = "ayak";
console.log("Palindrome index of word " + word + " is: " + palindromeIndex(word))
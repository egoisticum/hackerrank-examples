function isPalindrome(s) {
    for (let i = 0; i < s.length / 2; i++) {
        if (s[i] !== s[s.length - 1 - i]) {
            return false;
        }
    }
    return true;
}


function palindromeIndex(s) {
    // Write your code here

    if (s.length < 1 || s.length > Math.pow(10, 5)) {
        return -1;
    }

    if (isPalindrome(s)) {
        return -1;
    }

    for (let i = 0; i < s.length; i++) {
        var newWord = s.slice(0, i) + s.slice(i + 1);

        if (isPalindrome(newWord)) {
            return i;
        }
    }

    return -1
}

var word = "kayak";
word = "ayak";
console.log("Palindrome index of word " + word + " is: " + palindromeIndex(word))
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

    if (s.length > Math.pow(10, 5)) { 
        return -1;
    }

    let result = isPalindrome(s);
    if (result) {
        return -1;
    }
    else {
        for (let i = 0; i < s.length; i++) {
            let newS = s.slice(0, i) + s.slice(i + 1);
            if (isPalindrome(newS)) {
                return i;
            }
        }
        return -1
    }
}

word = "kayak"
word = "ayak"
console.log("Palindrome index of word " + word + " is: " + palindromeIndex(word))
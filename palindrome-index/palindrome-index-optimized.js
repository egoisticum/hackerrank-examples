function isPal(s, l, r) {
    if (s == null || l > r) {
        return false;
    }

    while (l < r) {
        if (s[l] != s[r]) {
            return false;
        }
        l++;
        r--;
    }

    return true;
}

function palindromeIndex(s) {
    // Write your code here
    if (s == null || s.length < 2) {
        return -1;
    }

    var ss = s.split('');
    var l = 0, r = ss.length - 1;

    if (isPal(ss, l, r)) {
        return -1;
    }

    while (l < r) {
        if (ss[l] != ss[r]) {
            if (isPal(ss, l + 1, r))
                return l;
            if (isPal(ss, l, r - 1))
                return r;
        }
        l++;
        r--;
    }

    return -1;
}


var word = "kayak";
word = "ayak";
console.log("Palindrome index of word " + word + " is: " + palindromeIndex(word))
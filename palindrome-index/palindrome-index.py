def isPalindrome(s):
    for i in range(len(s)):
        if s[i] != s[len(s) - 1 - i]:
            return False
    return True


def palindromeIndex(a): 
    # Write your code here
    
    if len(a) < 1 or len(a) > pow(10, 5):
        return -1
    
    if isPalindrome(a):
        return -1
        
    for i in range(len(a)):
        newWord = a[0:i] + a[i+1:len(a)]

        if isPalindrome(newWord):
            return i

    return -1

word = "kayak"
word = "ayak"
print("Palindrome index of word " + word + " is: " + str(palindromeIndex(word)))
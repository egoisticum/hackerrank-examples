def palindromeIndex(a): 
    # Write your code here
    
    if a[0] == a[len(a) - 1] or len(a) < 1 or len(a) > pow(10, 5):
        return -1
        
    for i in range(len(a)):
        word = a[0:i] + a[i+1:len(a)]

        if word[0] == word[len(word) - 1]:
            return i

    return -1

word = "kayak"
word = "ayak"
print("Palindrome index of word " + word + " is: " + str(palindromeIndex(word)))
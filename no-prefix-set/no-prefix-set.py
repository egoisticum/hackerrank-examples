#
# Complete the 'noPrefix' function below.
#
# The function accepts STRING_ARRAY words as parameter.
#

def insertTrie(trie, word):
    for i, char in enumerate(word):
        if char in trie:
            if trie[char][1] or i == len(word) - 1:
                return True
        else:
            trie[char] = {}, i == len(word) - 1


        trie, _ = trie[char]

    return False

def noPrefix(words):
    # Write your code here
    trie = {}
    for word in words:
        if insertTrie(trie, word):
            print("BAD SET")
            print(word)
            return

    print("GOOD SET")


strArr = [
    'aab',
    'defgab',
    'abcde',
    'aabcde',
    'cedaaa',
    'bbbbbbbbbb',
    'jabjjjad'
]

noPrefix(strArr)

strArr = ['aab', 'aac', 'aacghgh', 'aabghgh']

noPrefix(strArr)
/*
 * Complete the 'noPrefix' function below.
 *
 * The function accepts STRING_ARRAY words as parameter.
 */

function insertTrie(trie, word) {

    for (var i = 0; i < word.length; i++) {
        if (word[i] in trie) {
            if (trie[word[i]][1] || i === word.length - 1) { 
                return true;
            }
        } else {
            trie[word[i]] = {};
            trie[word[i]][1] = i === word.length - 1;
        }

        trie, _ = trie[word[i]]
    }

    return false;

}

function noPrefix(words) {
    // Write your code here
    trie = {};

    for (var i = 0; i < words.length; i++) {
        if (insertTrie(trie, words[i])) {
            console.log("BAD SET\n" + words[i]);
            return;
        }
    }

    console.log("GOOD SET");

}


var strArr = [
    'aab',
    'defgab',
    'abcde',
    'aabcde',
    'cedaaa',
    'bbbbbbbbbb',
    'jabjjjad'
];

noPrefix(strArr);

var strArr = ['aab', 'aac', 'aacghgh', 'aabghgh'];

noPrefix(strArr);
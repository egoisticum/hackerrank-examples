/*
 * Complete the 'noPrefix' function below.
 *
 * The function accepts STRING_ARRAY words as parameter.
 */

function noPrefix1(words) {
    // Write your code here
    var retVal = "GOOD SET";

    if (words.length >= 1 && words.length <= Math.pow(10, 5)) {
        for (var i = 0; i < words.length; i++) {

            if (words[i].length < 1 && words[i].length > 60) {
                retVal = "BAD SET\n" + words[j];
                continue;
            }

            if (words[i].length >= 1 && words[i].length <= 60) {

                for (var j = 0; j < words.length; j++) {
                    if (i !== j && words[j].indexOf(words[i]) === 0) {
                        retVal = "BAD SET\n" + words[j];
                    }
                }

            }
        }
    } else {
        retVal = "BAD SET";
    }


    console.log(retVal);
}

function noPrefix(words) {
    var retVal = "GOOD SET";
    words = words.sort();

    console.log(words);

    for (var i = 0; i < words.length; i++) { 
        if(i < words.length - 1) {
            if (words[i + 1].indexOf(words[i]) === 0) { 
                retVal = "BAD SET\n" + words[i + 1];
            }
        }
    }

    console.log(retVal);
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
/*
 * Complete the 'anagram' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function anagram(s) {
    // Write your code here
    l = s.length;

    if (l % 2 === 0) { 
        var half = parseInt(l / 2, 10);
        a = s.substring(0, half);
        b = s.substring(half, l);
        var count = 0;

        for (c of a) { 
            if (b.indexOf(c) !== -1) { 
                var pos = b.indexOf(c);
                b = b.substring(0, pos) + b.substring(pos + 1, b.length);
            } else {
                count += 1;
            }
        }

        return count;
    } else { 
        return -1;
    }
}

var words = ["abccde", "aaabbb", "ab", "abc", "mnop", "xyyx", "xaxbbbxx"];

// console.log(words[0] + " needs: " + anagram(words[0]) + " moves.");

for (word of words) {
    console.log(word + " needs: " + anagram(word) + " moves.");
}
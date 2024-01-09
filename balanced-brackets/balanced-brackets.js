/*
 * Complete the 'isBalanced' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function isBalanced(s) {
    // Write your code here

    var stack = [];

    for (var i = 0; i < s.length; i++) {
        if (stack.length === 0) {
            stack.push(s[i]);
            continue;
        }

        if (s[i] === "}" && stack[stack.length - 1] === "{") {
            stack.pop();
        }
        else if (s[i] === "]" && stack[stack.length - 1] === "[") {
            stack.pop();
        }
        else if (s[i] === ")" && stack[stack.length - 1] === "(") {
            stack.pop();
        }
        else {
            stack.push(s[i]);
        }
    }

    if (stack.length === 0) {
        return "YES";
    }

    return "NO";

}

console.log(isBalanced("{[()]}"));
console.log(isBalanced("{[(])}"));
console.log(isBalanced("{{[[(())]]}}"));
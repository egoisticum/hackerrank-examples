#
# Complete the 'anagram' function below.
#
# The function is expected to return an INTEGER.
# The function accepts STRING s as parameter.
#

def anagram(s):
    # Write your code here
    l = len(s)

    if l % 2 == 0:
        half = int(l / 2)
        a = s[:half]
        b = s[half:]
        count = 0

        for c in a:
            if c in b:
                pos = b.find(c)
                b = b[:pos] + b[pos + 1:]
            else:
                count += 1

        return count
    else:
        return -1

words = ["abccde", "aaabbb", "ab", "abc", "mnop", "xyyx", "xaxbbbxx"]

for word in words:
    print(word + " needs: " + str(anagram(word)) + " moves.")
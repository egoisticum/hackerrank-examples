import math
import os
import random
import re
import sys

#
# Complete the 'superDigit' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. STRING n
#  2. INTEGER k
#

def superDigit(n, k):
    # Write your code here
    multiplied_n = n * k
    multiplied_n = int(multiplied_n)
    super_digit = 0

    # print(multiplied_n)

    while (multiplied_n > 0 or super_digit > 9):
        if multiplied_n == 0:
            multiplied_n = super_digit
            super_digit = 0

        super_digit = super_digit + (multiplied_n % 10)
        multiplied_n //= 10


    return super_digit
    

initial_digit = "9875"
digit_count = 4

result = superDigit(initial_digit, digit_count)

print("super digit is: ")
print(result)
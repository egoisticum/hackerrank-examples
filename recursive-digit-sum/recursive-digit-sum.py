import math
import os
import random
import re
import sys

def sup_digits(x,k):
    a = digsum(x)
    return sup_digit(str(int(a)*k))

def sup_digit(x):
    if len(x) <= 1:
        return x
    else:
        return sup_digit( digsum(x) )

def digsum(x):
    return str(sum((int(i) for i in list(x))))


    
print("super digit of 9875 * 4 is: " + str(sup_digits("9875", 4)))
print("super digit of 123 * 3 is: " + str(sup_digits("123", 3)))

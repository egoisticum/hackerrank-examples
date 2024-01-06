#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'minimumBribes' function below.
#
# The function accepts INTEGER_ARRAY q as parameter.
#

def minimumBribes(q):
    bribes = 0
    for i in range(len(q)-1,-1,-1):
        if q[i] - (i + 1) > 2:
            print('Too chaotic')
            return
        for j in range(max(0, q[i] - 2),i):
            if q[j] > q[i]:
                bribes+=1
    print(bribes)


# queue = [1, 2, 3, 4, 5]
# minimumBribes(queue)

# queue = [2, 1, 5, 3, 4]
# minimumBribes(queue)

# queue = [2, 5, 1, 3, 4]
# minimumBribes(queue)

queue = [5, 1, 2, 3, 7, 8, 6, 4]
minimumBribes(queue)

queue = [1, 2, 5, 3, 7, 8, 6, 4]
minimumBribes(queue)

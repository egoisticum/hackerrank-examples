import heapq

#
# Complete the 'cookies' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER k
#  2. INTEGER_ARRAY A
#

def cookies(k, A):
    # Write your code here
    heapq.heapify(A)
    ops = 0
    
    while A[0] < k:
        try:
            ops += 1
            cookie1 = heapq.heappop(A)
            cookie2 = heapq.heappop(A)

            newCookie = 1 * cookie1 + 2 * cookie2
            
            heapq.heappush(A, newCookie)
        except IndexError:
            ops = -1
            break
    
    return ops


minSweetness = 7
cookiesArr = [1, 2, 3, 9, 10, 12]
print("Needed iterations: " + str(cookies(minSweetness, cookiesArr)))
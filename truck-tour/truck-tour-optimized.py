#
# Complete the 'truckTour' function below.
#
# The function is expected to return an INTEGER.
# The function accepts 2D_INTEGER_ARRAY petrolpumps as parameter.
#

def truckTour(petrolpumps):
    # Write your code here

    petrolpumpsLen = len(petrolpumps)
    balance = []
    minimum = 0

    for i in range(petrolpumpsLen):
        balance.append(petrolpumps[i][0] - petrolpumps[i][1])

    for start in range(petrolpumpsLen):
        s = balance[start]
        i = (start + 1) % petrolpumpsLen
        
        while s >= 0 and i != start:
            s += balance[i]
            i = (i + 1) % petrolpumpsLen

        if i == start:
            minimum = start
            break

    return minimum


inputArr = [[1, 5], [10, 3], [3, 4]]

print(str(truckTour(inputArr)))
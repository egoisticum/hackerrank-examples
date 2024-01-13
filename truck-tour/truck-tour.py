#
# Complete the 'truckTour' function below.
#
# The function is expected to return an INTEGER.
# The function accepts 2D_INTEGER_ARRAY petrolpumps as parameter.
#

def truckTour(petrolpumps):
    # Write your code here

    for i in range(len(petrolpumps)):
        if petrolpumps[i][0] >= petrolpumps[i][1]:
            circleArr = petrolpumps[i:len(petrolpumps)] + petrolpumps[0:i]
            tank = 0

            for j in range(len(circleArr)):
                tank = tank + (circleArr[j][0] - circleArr[j][1])

                if tank < 0:
                    break

                if j == len(circleArr) - 1:
                    return i

    return -1


inputArr = [[1, 5], [10, 3], [3, 4]]

print(str(truckTour(inputArr)))
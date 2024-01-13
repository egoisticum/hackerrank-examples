#
# Complete the 'truckTour' function below.
#
# The function is expected to return an INTEGER.
# The function accepts 2D_INTEGER_ARRAY petrolpumps as parameter.
#

def truckTour(petrolpumps):
    # Write your code here
    petrolpumpsLen = len(petrolpumps)
    bal = []

    for i in range(petrolpumpsLen):
        bal.append(petrolpumps[i][0] - petrolpumps[i][1])


    small = 0    
    for strt in range(petrolpumpsLen):
        s = bal[strt]
        i = (strt + 1) % petrolpumpsLen
        
        while(s >= 0 and i != strt): 
            s += bal[i]    
            i = (i + 1) % petrolpumpsLen
        if(i == strt):
            small = strt
            break

    return small


inputArr = [[1, 5], [10, 3], [3, 4]]

print(str(truckTour(inputArr)))
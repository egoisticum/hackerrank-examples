#
# Complete the 'flippingMatrix' function below.
#
# The function is expected to return an INTEGER.
# The function accepts 2D_INTEGER_ARRAY matrix as parameter.
#

def flippingMatrix(matrix):
    # Write your code here
    total = 0
    n = int(len(matrix) / 2)
    
    # print(a)

    for i in range(n):
        for j in range(n):
            # print(a[i])
            # total += max(max(a[i][j], a[2 * n - i - 1][j]), max(a[i][2 * n - j - 1], a[2 * n - i - 1][2 * n - j - 1]))

            maxItem = 0

            maxItem = max(matrix[i][j], maxItem)
            maxItem = max(matrix[i][2 * n - j - 1], maxItem)
            maxItem = max(matrix[2 * n - i - 1][j], maxItem)
            maxItem = max(matrix[2 * n - i - 1][2 * n - j - 1], maxItem)

            total += maxItem

    return total

T = [[112, 42, 83, 119], [56, 125, 56, 49], [15, 78, 101, 43], [62, 98, 114, 108]]

print(str(flippingMatrix(T)))
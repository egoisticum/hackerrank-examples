
multi_line_string = """iv
sm"""

#
# Complete the 'gridChallenge' function below.
#
# The function is expected to return a STRING.
# The function accepts STRING_ARRAY grid as parameter.
#

def gridChallenge(grid):
    # Write your code here
    n = len(grid)

    if n < 1 or n > 100:
        return "NO"

    # Sort each row
    for i in range(1, n):
        grid[i] = "".join(sorted(grid[i]))

    # Check if columns are sorted
    for i in range(n):
        for j in range(i, n):
            if grid[j] < grid[i]:
                print(grid[j])
                return "NO"
    
    return "YES"


arr = multi_line_string.splitlines()
# print(arr)

print(gridChallenge(arr))

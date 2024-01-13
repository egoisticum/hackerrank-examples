/*
 * Complete the 'truckTour' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY petrolpumps as parameter.
 */

function truckTour(petrolpumps) { 
    // Write your code here
    for (var i = 0; i < petrolpumps.length; i++) { 
        if (petrolpumps[i][0] >= petrolpumps[i][1]) { 
            var circleArr = petrolpumps.slice(i, petrolpumps.length) + petrolpumps.slice(0, i);
            var tank = 0;

            for (var j = 0; j < circleArr.length; j++) { 
                tank = tank + (circleArr[j][0] - circleArr[j][1])

                if (tank < 0) { 
                    break;
                }

                if (j == circleArr.length - 1) { 
                    return i;
                }
            }
        }
    }

    return -1
}


var inputArr = [[1, 5], [10, 3], [3, 4]];

console.log(truckTour(inputArr));
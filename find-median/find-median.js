function findMedian(arr) {
    // Write your code here
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= -10000 && arr[i] <= 10000) {
            newArr.push(arr[i]);
        }
    }
    newArr = newArr.sort((a, b) => a - b);

    console.log(newArr);

    var middle = newArr[Math.round((newArr.length - 1) / 2)];

    return middle;
}

console.log(findMedian([0, 1, 2, 4, 6, 5, 3]));
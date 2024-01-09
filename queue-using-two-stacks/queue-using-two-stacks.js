function processData(input) {
    //Enter your code here
    var inputArrLength = parseInt(input.substring(0, input.indexOf("\n")), 10);
    var inputArr = input.substring(input.indexOf("\n") + 1, input.length).split("\n");
    var queue = [];
    //console.log(typeof inputArr);
    //console.log(inputArr);
    
    for(var i = 0; i < inputArrLength; i++) {
        //console.log(inputArr[i]);
        var command = inputArr[i].split(" ");
        //console.log(command);

        if(command.length > 1) {
            //Push new array item on 0th index
            queue.push(command[1]);
        }
        if(command.length === 1 && command[0] === "2") {
            //Remove from 0th position
            queue.shift();
        }
        if(command.length === 1 && command[0] === "3" && queue.length) {
            //Print 0th position item
            console.log(queue[0]);
        }
    }

    //console.log(queue);
}

var temp = `10
1 42
2
1 14
3
1 28
3
1 60
1 78
2
2`;

processData(temp);
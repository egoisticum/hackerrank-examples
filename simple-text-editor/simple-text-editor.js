function processData(input) {
    //Enter your code here
    //console.log(input);
    //console.log(typeof input);

    var inputArrLength = parseInt(input.substring(0, input.indexOf("\n")), 10);
    var inputArr = input.substring(input.indexOf("\n") + 1, input.length).split("\n");
    var currentStr = "";
    var undoCommands = [];

    for (var i = 0; i < inputArrLength; i++) {
        var command = inputArr[i].split(" ");

        if (command.length > 1 && command[0] === "1") {
            //Append to string
            currentStr += command[1];

            var undoCommand = [];
            undoCommand[0] = "2";
            undoCommand[1] = command[1].length.toString();
            undoCommands.push(undoCommand);
        }
        if (command.length > 1 && command[0] === "2") {
            //Remove from last n characters
            var removedChars = currentStr.substring(currentStr.length - parseInt(command[1], 10), currentStr.length);
            currentStr = currentStr.substring(0, currentStr.length - parseInt(command[1], 10));

            var undoCommand = [];
            undoCommand[0] = "1";
            undoCommand[1] = removedChars;
            undoCommands.push(undoCommand);
        }
        if (command.length > 1 && command[0] === "3") {
            //Print the kth character from S
            console.log(currentStr[parseInt(command[1], 10) - 1]);
        }

        if (command.length === 1 && command[0] === "4") {
            //Undo
            var undoCommand = undoCommands[undoCommands.length - 1];

            if (undoCommand.length && undoCommand[0] === "1") {
                //Append
                currentStr += undoCommand[1];
                undoCommand = [];
                undoCommands.pop();
            }
            if (undoCommand.length && undoCommand[0] === "2") {
                //Remove
                currentStr = currentStr.substring(0, currentStr.length - parseInt(undoCommand[1], 10));
                undoCommand = [];
                undoCommands.pop();
            }
        }
    }
}

var inputStr = `8
1 abc
3 3
2 3
1 xy
3 2
4
4
3 1`;

processData(inputStr);
function cake(input){
    let width = Number(input[0]);
    let length = Number(input[1]);
    let NumberOfPieces = width * length;
    let index = 2;
    let command = input[index];

    while (true) {
        if (command === "STOP") {
            if (NumberOfPieces > 0) {
                console.log(`${NumberOfPieces} pieces are left.`);
                return;    
            } else {
                console.log(`No more cake left! You need ${NumberOfPieces * (-1)} pieces more.`);
                return;
            }
            break;
        }
        if (NumberOfPieces <= 0) {
            console.log(`No more cake left! You need ${NumberOfPieces * (-1)} pieces more.`);
            return;
        }
        NumberOfPieces -= Number(command);
        index++;
        command = input[index];
    }
}

cake(["10",
"2",
"2",
"4",
"6",
"STOP"]);
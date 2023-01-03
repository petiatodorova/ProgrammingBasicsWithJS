function examPrep(input){
    let allowedBadScores = Number(input[0]);
    let command = "Enough";
    let countBadScores = 0;
    let countAllScores = 0;
    let sumScores = 0;
    let i = 1;
    let LastName = "";

    while (true) {
        let currentName = input[i];
        if (currentName === command) {
            break;
        }
        LastName = currentName;
        let currentScore = Number(input[i+1]);
        countAllScores++;
        if (currentScore <= 4) {
            countBadScores++;
        }
        if (countBadScores >= allowedBadScores) {
            console.log(`You need a break, ${countBadScores} poor grades.`);
            return;
        }
        sumScores += currentScore;
        i+= 2;
    }

    console.log(`Average score: ${(sumScores / countAllScores).toFixed(2)}`);
    console.log(`Number of problems: ${countAllScores}`);
    console.log(`Last problem: ${LastName}`);
}

examPrep(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"]);
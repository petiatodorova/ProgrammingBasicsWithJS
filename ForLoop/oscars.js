function oscars(input) {
    let actorName = input[0];
    let points = Number(input[1]);
    let countEvaluators = Number(input[2]);

    for (let i = 3; i < countEvaluators * 2 + 3; i+= 2) {
        let nameEvaluator = input[i];
        let pointsEvaluator = Number(input[i+1]);
        let pointsToAdd = (nameEvaluator.length * pointsEvaluator) / 2;
        points += pointsToAdd;
        if (points >= 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${points.toFixed(1)}!`);
            return;
        }
    }

    if (points >= 1250.5) {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${points.toFixed(1)}!`);
    } else {
        let pointsNeeded = (1250.5 - points).toFixed(1);
        console.log(`Sorry, ${actorName} you need ${pointsNeeded} more!`);
    }
}

oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"]);
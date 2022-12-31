function bonusPoints(input) {
    let points = Number(input[0]);
    let bonusPoints = 0;
    if (points <= 100) {
        bonusPoints = 5;
    } else if(points <= 1000) {
        bonusPoints = 0.2 * points;
    } else {
        bonusPoints = 0.1 * points;
    }

    let additionalPoints = 0;
    if (points % 2 == 0) {
        additionalPoints = 1;
    } else if (points % 10 == 5) {
        additionalPoints = 2;
    } 

    let totalBonusPoints = bonusPoints + additionalPoints;
    let totalPoints = points + totalBonusPoints;

    console.log(totalBonusPoints);
    console.log(totalPoints);
}
bonusPoints(["2703"])


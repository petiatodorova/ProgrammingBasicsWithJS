function shopping(input){
    const videokartaPrice = 250;

    let budget = Number(input[0]);
    let countVideokarti = Number(input[1]);
    let countProcesori = Number(input[2]);
    let countRam = Number(input[3]);

    let videokartiTotalSum = videokartaPrice * countVideokarti;
    let procesorPrice = 0.35 * videokartiTotalSum;
    let ramPrice = 0.10 * videokartiTotalSum;


    let procesoriTotalSum = countProcesori * procesorPrice;
    let ramTotalSum = countRam * ramPrice;

    let totalSum = videokartiTotalSum + procesoriTotalSum + ramTotalSum;
    if (countVideokarti > countProcesori) {
        totalSum = 0.85 * totalSum;
    }

    if (budget >= totalSum) {
        let moneyLeft = budget - totalSum;
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
    } else {
        let moneyNeeded = totalSum - budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`);
    }
}

shopping(["920.45",
"3",
"1",
"1"]);
function toyShop(input){
    const pyzelPrice = 2.60;
    const kuklaPrice = 3;
    const mechePrice = 4.10;
    const minionPrice = 8.20;
    const kamionPrice = 2;

    let vacation = Number(input[0]);
    let pyzeli = Number(input[1]);
    let kukli = Number(input[2]);
    let mecheta = Number(input[3]);
    let minioni = Number(input[4]);
    let kamioni = Number(input[5]);

    let pyzelTotal = pyzelPrice * pyzeli;
    let kuklaTotal = kuklaPrice * kukli;
    let mecheTotal = mechePrice * mecheta;
    let minionTotal = minionPrice * minioni;
    let kamionTotal = kamionPrice * kamioni;

    let countToys = pyzeli + kukli + mecheta + minioni + kamioni;
    let totalMoney =  pyzelTotal + kuklaTotal + mecheTotal + minionTotal + kamionTotal;

    if (countToys >= 50) {
        totalMoney = 0.75 * totalMoney;
    } 

    totalMoney = 0.9 * totalMoney;

    if (totalMoney >= vacation) {
        console.log(`Yes! ${(totalMoney - vacation).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(vacation - totalMoney).toFixed(2)} lv needed.`);
    }
}
toyShop(["320",
"8",
"2",
"5",
"5",
"1"])
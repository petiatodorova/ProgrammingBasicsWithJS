function godzilaKong(input){
    let budget = Number(input[0]);
    let statistsCount = Number(input[1]);
    let statistDressPrice = Number(input[2]);

    let decor = budget * 0.10;
    let totalSumStatistsDress = statistsCount * statistDressPrice;
    if (statistsCount > 150) {
        totalSumStatistsDress = 0.9 * totalSumStatistsDress;
    }

    if (decor + totalSumStatistsDress > budget ) {
        console.log(`Not enough money!`);
        let moneyNeeded = decor + totalSumStatistsDress - budget;
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
    } else {
        console.log(`Action!`);
        let moneyLeft = budget - (decor + totalSumStatistsDress);
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    }
}
godzilaKong(["9587.88",
"222",
"55.68"])
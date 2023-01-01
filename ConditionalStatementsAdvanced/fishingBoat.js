function fishingBoat(input) {
    const SpringPrice = 3000;
    const SummerPrice = 4200;
    const WinterPrice = 2600; 

    let budget = Number(input[0]);
    let sezon = input[1];
    let countFishermen = Number(input[2]);

    let totalSum = 0;
    switch (sezon) {
        case "Spring":
            totalSum = SpringPrice;
            break;

        case "Summer":
        case "Autumn":
            totalSum = SummerPrice;
            break;

        case "Winter":
            totalSum = WinterPrice;
            break;
    }

    if (0 < countFishermen && countFishermen <= 6) {
        totalSum = 0.9 * totalSum;
    } else if(7 <= countFishermen && countFishermen <= 11) {
        totalSum = 0.85 * totalSum;
    } else if(totalSum >= 12) {
        totalSum = 0.75 * totalSum;
    }

    if (countFishermen % 2 == 0 && sezon !== "Autumn") {
        totalSum = 0.95 * totalSum;
    }

    if (budget >= totalSum) {
        console.log(`Yes! You have ${(budget - totalSum).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(totalSum - budget).toFixed(2)} leva.`);
    }
}

fishingBoat(["2000",
"Winter",
"13"])
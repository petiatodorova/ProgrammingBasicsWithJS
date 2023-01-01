function newHouse(input){
    const RosePrice = 5;
    const DaliaPrice = 3.80;
    const LalePrice = 2.80;
    const NarcisPrice = 3;
    const GladiolaPrice = 2.50;

    let flower = input[0];
    let countFlowers = Number(input[1]);
    let budget = Number(input[2]);

    let totalSum = 0;
    switch (flower) {
        case "Roses":
            totalSum = RosePrice * countFlowers;
            if (countFlowers > 80) {
                totalSum = 0.9 * totalSum;
            }
            break;
        case "Dahlias":
            totalSum = DaliaPrice * countFlowers;
            if (countFlowers > 90) {
                totalSum = 0.85 * totalSum;
            }
            break;
        case "Tulips":
            totalSum = LalePrice * countFlowers;
            if (countFlowers > 80) {
                totalSum = 0.85 * totalSum;
            }
            break;
        case "Narcissus":
            totalSum = NarcisPrice * countFlowers;
            if (countFlowers < 120) {
                totalSum = 1.15 * totalSum;
            }
            break;
        case "Gladiolus":
            totalSum = GladiolaPrice * countFlowers;
            if (countFlowers < 80) {
                totalSum = 1.20 * totalSum;
            }
            break;
    }

    if (budget >= totalSum) {
        console.log(`Hey, you have a great garden with ${countFlowers} ${flower} and ${(budget - totalSum).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(totalSum - budget).toFixed(2)} leva more.`);
    }
}

newHouse(["Tulips",
"88",
"260"])
function trekkingMania(input) {
    let countGroups = Number(input[0]);

    let musalaCount = 0;
    let monblanCount = 0;
    let kilimandjaroCount = 0;
    let k2Count = 0;
    let everestCount = 0;
    let totalCount = 0;

    for (let i = 1; i <= countGroups; i++) {
        let currentCount = Number(input[i]);
        if (currentCount <= 5) {
            musalaCount += currentCount;
            totalCount += currentCount;
        } else if (6 <= currentCount && currentCount <= 12) {
            monblanCount += currentCount;
            totalCount += currentCount;
        } else if (13 <= currentCount && currentCount <= 25) {
            kilimandjaroCount += currentCount;
            totalCount += currentCount;
        } else if (26 <= currentCount && currentCount <= 40) {
            k2Count += currentCount;
            totalCount += currentCount;
        } else if (currentCount >= 41) {
            everestCount += currentCount;
            totalCount += currentCount;
        }
    }

console.log(`${(musalaCount / totalCount * 100).toFixed(2)}%`);
console.log(`${(monblanCount / totalCount * 100).toFixed(2)}%`);
console.log(`${(kilimandjaroCount / totalCount * 100).toFixed(2)}%`);
console.log(`${(k2Count / totalCount * 100).toFixed(2)}%`);
console.log(`${(everestCount / totalCount * 100).toFixed(2)}%`);
}

trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"]);
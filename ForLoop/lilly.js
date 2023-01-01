function lilly(input) {
    let age = Number(input[0]);
    let laundryPrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let countToys = 0;
    let totalMoney = 0;
    let currentMoney = 10;

    for (let i = 1; i <= age; i++ ) {
        if (i % 2 == 0) {
            totalMoney = totalMoney + currentMoney - 1;
            currentMoney += 10;
        } else {
            countToys++;
        }
    }

    totalMoney = totalMoney + toyPrice * countToys;

    if (totalMoney >= laundryPrice) {
        let n = (totalMoney - laundryPrice).toFixed(2);
        console.log(`Yes! ${n}`);
    } else {
        let m = (laundryPrice - totalMoney).toFixed(2);
        console.log(`No! ${m}`);
    }
}

lilly(["21",
"1570.98",
"3"]);
function cinema(input){
    const PremierePrice = 12.00;
    const NormalPrice = 7.50;
    const DiscountPrice = 5.00;

    let typeProjection = input[0];
    let rowsCount = Number(input[1]);
    let columnssCount = Number(input[2]);

    let profit = 0;
    switch (typeProjection) {
        case "Premiere":
            profit = rowsCount * columnssCount * PremierePrice;
            break;
        case "Normal":
            profit = rowsCount * columnssCount * NormalPrice;
            break;
        case "Discount":
            profit = rowsCount * columnssCount * DiscountPrice;
            break;
    }

    console.log(`${profit.toFixed(2)} leva`);
}

cinema(["Discount",
"12",
"30"])
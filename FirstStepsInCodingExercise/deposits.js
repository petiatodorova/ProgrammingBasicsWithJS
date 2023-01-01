function depositsCalculator(input){
    let depositSum = parseFloat(input[0]);
    let depositMonths = parseFloat(input[1]);
    let yearPercent = parseFloat(input[2]);
    let totalSum = depositSum + depositMonths * ((depositSum * (yearPercent/100)) / 12);
    console.log(totalSum);
}
depositsCalculator(["200 ",
"3 ",
"5.7 "]);
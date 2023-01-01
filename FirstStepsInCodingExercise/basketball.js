function basketball(input) {
    let tax = parseInt(input[0]);
    let snickers = 0.6 * tax;
    let ekip = 0.8 * snickers;
    let ball = 0.25 * ekip;
    let accessories = 0.2 * ball;

    let total = tax + snickers + ekip + ball + accessories;

    console.log(total);
}

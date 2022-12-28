function repainting(input) {
    const naylonPrice = 1.50;
    const paintPerLiter = 14.50;
    const razreditelPerLiter = 5.00;

    let naylonSqMeters = parseInt(input[0]);
    let paintLiters = parseInt(input[1]);
    let razreditelLiters = parseInt(input[2]);
    let hours = parseInt(input[3]);

    let materials = (naylonSqMeters + 2) * naylonPrice + paintLiters * 1.1 * paintPerLiter + razreditelLiters * razreditelPerLiter + 0.40;
    let masters = 0.3 * materials * hours;
    let total = materials + masters;

    console.log(total);
}

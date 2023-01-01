function fishTank(input) {
    let length = parseInt(input[0])/10;
    let width = parseInt(input[1])/10
    let height = parseInt(input[2])/10;
    let percent = parseFloat(input[3])/100;

    let liters = length * width * height * (1 - percent);

    console.log(liters);
}

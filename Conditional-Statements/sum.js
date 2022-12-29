function sumSecunds(input){
    let firstSeconds = Number(input[0]);
    let secondSeconds = Number(input[1]);
    let thirdSeconds = Number(input[2]);

    let totalSeconds = firstSeconds + secondSeconds + thirdSeconds;
    let seconds = totalSeconds % 60;
    let minutes = (totalSeconds - seconds) / 60;
    if (seconds <= 9) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}
sumSecunds(["14", "12",
"10"])
function fiftheenMinutes(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    if (minutes + 15 < 60) {
        minutes = minutes + 15;
    } else {
        minutes = (minutes + 15) % 60;
        hours++;
    }

    if (hours == 24) {
        hours = 0;
    } 

    if (minutes < 10) {
        minutes = "0" + minutes;
    } 

    console.log(`${hours}:${minutes}`);
}
fiftheenMinutes(["11", "08"]);
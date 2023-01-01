function calculateHours(input) {
    let pagesCount = parseInt(input[0]);
    let pagesPerHour = parseInt(input[1]);
    let daysCount = parseInt(input[2]);
    let hoursPerDay = (pagesCount / pagesPerHour) / daysCount;
    console.log(hoursPerDay);
}
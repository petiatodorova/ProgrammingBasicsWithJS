function worldSwimmingRecord(input){
    let worldRecord = Number(input[0]);
    let distance = Number(input[1]);
    let timePerMeter = Number(input[2]);

    let secondsIvan = distance * timePerMeter;
    let zabaviane = Math.floor(distance / 15) * 12.5;
    let totalSecondsIvan = secondsIvan + zabaviane;

    if (totalSecondsIvan < worldRecord) {
        console.log(`Yes, he succeeded! The new world record is ${totalSecondsIvan.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(totalSecondsIvan - worldRecord).toFixed(2)} seconds slower.`);
    }
}
worldSwimmingRecord(["10464",
"1500",
"20"]);
worldSwimmingRecord(["55555.67",
"3017",
"5.03"])
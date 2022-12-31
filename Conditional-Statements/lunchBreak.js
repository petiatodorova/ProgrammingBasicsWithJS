function lunchBreak(input){
    let serialName = input[0];
    let episodeTime = Number(input[1]);
    let breakTime = Number(input[2]);

    let lunchTime = breakTime / 8;
    let relaxTime = breakTime / 4;
    let allTimeNeeded = episodeTime + lunchTime + relaxTime;

    if (breakTime >= allTimeNeeded) {
        let leftTime = breakTime - allTimeNeeded;
        console.log(`You have enough time to watch ${serialName} and left with ${Math.ceil(leftTime)} minutes free time.`);
    } else {
        let neededTime = allTimeNeeded - breakTime;
        console.log(`You don't have enough time to watch ${serialName}, you need ${Math.ceil(neededTime)} more minutes.`);
    }
}

lunchBreak(["Teen Wolf",
"48",
"60"]);
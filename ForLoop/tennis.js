function tennis(input) {
    const wTournament = 2000;
    const fTournament = 1200;
    const sfTournament = 720;

    let countTournaments = Number(input[0]);
    let wins = 0;
    let points = Number(input[1]);
    let initialPoints = points;


    for (let i = 2; i < 2 + countTournaments; i++) {
        let currentTournament = input[i];
        switch (currentTournament) {
            case "W":
                points += wTournament;
                wins++;
                break;
            case "F":
                points += fTournament;
                break;
            case "SF":
                points += sfTournament;
                break;
        }
    }

    console.log(`Final points: ${points}`);
    console.log(`Average points: ${Math.floor((points - initialPoints)/countTournaments)}`);
    console.log(`${((wins/countTournaments)*100).toFixed(2)}%`);
}

tennis(["4",
"750",
"SF",
"W",
"SF",
"W"])
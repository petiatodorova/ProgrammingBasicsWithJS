function salary(input) {
    const FacebookFine = 150;
    const InstagramFine = 100;
    const RedditFine = 50;

    let tabsCount = Number(input[0]);
    let salary = Number(input[1]);

    for (let i = 2; i < (tabsCount + 2); i++) {
        let currentTab = input[i];
        switch (currentTab) {
            case "Facebook":
                salary -= FacebookFine;
                break;

            case "Instagram":
                salary -= InstagramFine;
                break;

            case "Reddit":
                salary -= RedditFine;
                break;

            default:
                    break;
        }

        if (salary <= 0) {
            console.log(`You have lost your salary.`);
            return;
        }
    }

    if (salary <= 0) {
        console.log(`You have lost your salary.`);
    } else {
        console.log(salary.toFixed(0));
    }
}

salary(["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"])
function vacation(input) {
    const RoomForOnePrice = 18.00;
    const ApartmentPrice = 25.00;
    const PresidentApartment = 35.00;

    let daysVacation = Number(input[0]);
    let roomType = input[1];
    let evaluation = input[2];

    let totalSum = 0;
    switch (roomType) {
        case "room for one person":
            totalSum = (daysVacation - 1) * RoomForOnePrice;
            break;

        case "apartment":
            totalSum = (daysVacation - 1) * ApartmentPrice;
            if (0 <= daysVacation && daysVacation < 10) {
                totalSum = 0.7 * totalSum;
            } else if (daysVacation <= 15) {
                totalSum = 0.65 * totalSum;
            } else {
                totalSum = 0.5 * totalSum;
            }
            break;

        case "president apartment":
            totalSum = (daysVacation - 1) * PresidentApartment;
            if (0 <= daysVacation && daysVacation < 10) {
                totalSum = 0.9 * totalSum;
            } else if (daysVacation <= 15) {
                totalSum = 0.85 * totalSum;
            } else {
                totalSum = 0.8 * totalSum;
            }
            break;
    }

    if (evaluation == "positive") {
        totalSum = 1.25 * totalSum;
    } else if (evaluation == "negative") {
        totalSum = 0.9 * totalSum;
    }

    console.log(totalSum.toFixed(2));
}

vacation(["2",
    "apartment",
    "positive"]);
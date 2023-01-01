function foodDelivery(input) {
    const chickenPrice = 10.35;
    const fishPrice = 12.40;
    const vegetarianPrice = 8.15;

    let countChicken = parseInt(input[0]);
    let countFish = parseInt(input[1]);
    let countVegetarian = parseInt(input[2]);

    let sum = countChicken * chickenPrice + countFish * fishPrice + countVegetarian * vegetarianPrice;
    let total = sum + 0.2 * sum + 2.50;

    console.log(total);

}

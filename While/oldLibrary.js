function oldLibrary(input){
    let favoriteBook = input[0];
    let index = 1;
    let stopText = "No More Books";
    let count = 0;
    let isFound = false;

    while (true) {
        let currentText = input[index];
        if (currentText === favoriteBook) {
            isFound = true;
            break;
        }
        if (currentText === stopText) {
            break;
        }
        index++;
        count++
    }

    if (!isFound) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${count} books.`);
    } else {
        console.log(`You checked ${count} books and found it.`);
    }
}

oldLibrary(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])
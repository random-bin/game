
function checkWhoWon(userChoice, computerChoice) {
    if (userChoice == computerChoice) {
       return 0
    }

    if (userChoice == "KAMIEŃ" & computerChoice == "PAPIER") {
        return -1
    } 
    if (userChoice == "NOŻYCE" & computerChoice == "KAMIEŃ") {
        return -1
    } 
    if (userChoice == "PAPIER" & computerChoice == "NOŻYCE") {
        return -1
    } 
    if (userChoice == "KAMIEŃ" & computerChoice == "NOŻYCE") {
        return 1
    } 
    if (userChoice == "NOŻYCE" & computerChoice == "PAPIER") {
        return 1
    } 
    if (userChoice == "PAPIER" & computerChoice == "KAMIEŃ") {
        return 1
    }
}


function play(value){

    var choiceArr = ["PAPIER", "NOŻYCE", "KAMIEŃ"];

    // Computer choice shuffle

    function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let computerChoice = choiceArr[getRandomIntInclusive(0, 2)];

    document.getElementById("compChoicePar").innerHTML = computerChoice;

    // User choice

    let userChoice = choiceArr[value];
    document.getElementById("userChoicePar").innerHTML = userChoice;

    // Victory logic

    switch (checkWhoWon(userChoice, computerChoice)) {
        case 0:
            document.getElementById("result").innerHTML = "REMIS"
            break
        case 1:
            document.getElementById("result").innerHTML = "WYGRAŁEŚ"
            break
        case 2:
            document.getElementById("result").innerHTML = "PRZEGRAŁEŚ"
            break
    }

} 
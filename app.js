
class Game {

    constructor() { 
        this.choiceArr = ["PAPIER", "NOŻYCE", "KAMIEŃ"]
    }
    
    checkWhoWon(userChoice, computerChoice) {
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

    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    play() {
        this.computerChoice = this.choiceArr[this.getRandomIntInclusive(0, 2)]
    }
}

function play(value){


    const game = new Game()

    game.play()

    document.getElementById("compChoicePar").innerHTML = game.computerChoice;

    // User choice

    let userChoice = game.choiceArr[value];
    document.getElementById("userChoicePar").innerHTML = userChoice;

    // Victory logic

    switch (game.checkWhoWon(userChoice, game.computerChoice)) {
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
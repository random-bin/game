Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))]
}

class Result {
    static DRAW = new Result(0)
    static WIN = new Result(1)
    static LOSE = new Result(-1)

    constructor(val) {
        this.val = val

        switch (val) {
            case 0: this.displayString = "Remis"; break
            case 1: this.displayString = "Wygrałeś"; break
            case -1: this.displayString = "Przegrałeś"; break
        }
    }
}

class Choice {
    static STONE = "STONE"
    static PAPPER = "PAPPER"
    static SCISSOR = "SCISSOR"
    
    static allValues = {}

    static choice(val) {
        if (Object.keys(Choice.allValues).length == 0) {
            const stone = new Choice(Choice.STONE)
            stone.displayString = "Kamień"
            Choice.allValues[Choice.STONE] = stone

            const papper = new Choice(Choice.PAPPER)
            papper.displayString = "Papier"
            Choice.allValues[Choice.PAPPER] = papper

            const scissor = new Choice(Choice.SCISSOR)
            scissor.displayString = "Nożyce"
            Choice.allValues[Choice.SCISSOR] = scissor

            stone.winsWith = scissor
            scissor.winsWith = papper
            papper.winsWith = stone
        }
        return this.allValues[val]
    }

    static random() {
        return Object.values(this.allValues).random()
    }

    constructor(value) {
        this.value = value
        this.winsWith = null
        this.displayString = ""
    }


    wins(other) {
        if (this === other) {
            return Result.DRAW
        }
        return this.winsWith == other ? Result.WIN : Result.LOSE
    }
} 

class Game {

    constructor() {
        this.computerChoice = null
        this.userChoice = null
    }
    
    play(userChoice) {
        this.computerChoice = Choice.random()
        this.userChoice = userChoice
    }

    get result() {
        return this.userChoice.wins(this.computerChoice)
    }
}

function play(userChoice){

    const game = new Game()
    game.play(userChoice)

    document.getElementById("compChoicePar").innerHTML = game.computerChoice.displayString;
    document.getElementById("userChoicePar").innerHTML = game.userChoice.displayString;
    document.getElementById("result").innerHTML = game.result.displayString
} 

window.onload = function() {
    document.getElementById("STONE").onclick = function() {
        const userChoice = Choice.choice(Choice.STONE)
        play(userChoice)
    }

    document.getElementById("PAPPER").onclick = function() {
        const userChoice = Choice.choice(Choice.PAPPER)
        play(userChoice)
    }

    document.getElementById("SCISSOR").onclick = function() {
        const userChoice = Choice.choice(Choice.SCISSOR)
        play(userChoice)
    }
}
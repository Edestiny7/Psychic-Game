$(function() {
    // Array holding Psychic options
    let psychicSelection = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    // Psychic selects a letter from the array options
    function random_letter(psychicSelection) {
        return psychicSelection[Math.floor(Math.random() * psychicSelection.length)];
    }

    // reset the game when score increases
    function reset() {
        guessesRemaining = 9;
        userSelection = [];
        psychicChoice = random_letter(psychicSelection);
    }

    // Psychic letter selection from the js function
    let psychicChoice = random_letter(psychicSelection);
    let guessesRemaining = 9;
    let userSelection = [];
    let psychicScore = 0;
    let userScore = 0;

    //Variable references
    let winsText = document.getElementById("wins-text");
    let lossesText = document.getElementById("losses-text");
    let guessesRemainingText = document.getElementById("guessesRemaining-text");
    let userSelectionText = document.getElementById("userSelection-text");

    //Runs when user enters guess
    reset();
    document.onkeyup = function(event) {

        // User guess
        let userChoice = event.key.toLowerCase();

        if (guessesRemaining != 0) {
            guessesRemaining = (guessesRemaining - 1);
            userSelection.push(userChoice);
            if (userChoice === psychicChoice) {
                userScore++;
                guessesRemaining = 0;
                reset();
            } else if (guessesRemaining == 0) {
                psychicScore++
                reset();
            }
        }

        winsText.textContent = "Wins: " + userScore;
        lossesText.textContent = "Losses: " + psychicScore;
        guessesRemainingText.textContent = "Guesses remaining: " + guessesRemaining;
        userSelectionText.textContent = "Your guesses so far: " + userSelection.join();
    }
});
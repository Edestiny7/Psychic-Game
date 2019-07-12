// Array holding Psychic options
let psychicSelection = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Psychic selects a letter from the array options
function random_letter(psychicSelection) {
    return psychicSelection[Math.floor(Math.random() * psychicSelection.length)];
}

// reset the game when score increases
function reset(){
    guessesRemaining = 9;
    userSelection = [];
    psychicChoice = random_letter(psychicSelection);
}
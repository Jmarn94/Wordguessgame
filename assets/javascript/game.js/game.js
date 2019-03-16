var win = 0;
var maxmistakes = 15;

var lettersguessedElement = document.getElementById(letters-guessed);
var winCountElement = document.getElementById(win-Count);
var guessesLeftElement = document.getElementById(guesses-left);

var validguesses = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o","p", "q", "r","s", "t", "u", "w","x","y","z"]
var game = new Hangman();

document.onkeyup = function(event) {
    var userGuess = event.key;

    if (!game.gameOver) {
        if (validGuesses.includes(userGuess) && !game.guessedLetters.includes(userGuess)) {
            game.checkGuess(userGuess);
        }
    } else {
        game = new Hangman();
        game.updatePageData();
    }
}

function Hangman(){
    this.wordlist = [
        "word1",
        "word2",
        "word3",
        "word4",
        "word5",
        "word6",
        "word7",
        "word8",
        "word9",
        "word10",
        "word11",
        "word12",
        "word13",
        "word14",
        "word15",

    ]
    this.word = this.wordlist[Math.floor(Math.random()* this.wordlist.length)];
    this.lettersguessed = [];
    this.maxmistakes = 0;
    this.visableletters =[];
    this.gameover = false;
    for (var i = 0; i < this.word.length; i++){
        this.visableletters[i] = (false);
    }
}

Hangman.prototype.checkguess = function(char) {
    this.lettersguessed.push(char);
        var isinword = false;
        if (this.word.charAt(i) === char) {
            isInWord = true;
            this.visibleLetters[i] = true;
        }

}

    if (!isinword){
        this.mistakes++;
    }

    var youWin = [
        "__  __ ____   __  __   _      __ ____ _  __",
        "\\ \\/ // __ \\ / / / /  | | /| / //  _// |/ /",
        " \\  // /_/ // /_/ /   | |/ |/ /_/ / /    / ",
        " /_/ \\____/ \\____/    |__/|__//___//_/|_/  ",
        "                                           "
    ];

        var youLose = [
            "__  __ ____   __  __  __   ____   ____ ____",
            "\\ \\/ // __ \\ / / / / / /  / __ \\ / __// __/",
            " \\  // /_/ // /_/ / / /__/ /_/ /_\\ \\ / _/  ",
            " /_/ \\____/ \\____/ /____/\\____//___//___/  ",
            "                                           "
        ];

        if (this.mistakes >= maxmistakes) {
            losses++;
            this.alertLines = youLose;
            this.gameOver = true;
        }

        if (!this.visibleLetters.includes(false)) {
            wins++;
            this.alertLines = youWin;
            this.gameOver = true;
        }



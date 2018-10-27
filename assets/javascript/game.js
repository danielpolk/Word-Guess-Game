var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

var alphabet = ["a", 
				"b", 
				"c", 
				"d", 
				"e", 
				"f", 
				"g", 
				"h", 
				"i", 
				"j", 
				"k", 
				"l", 
				"m", 
				"n", 
				"o", 
				"p", 
				"q", 
				"r", 
				"s", 
				"t", 
				"u", 
				"v", 
				"x", 
				"y", 
                "z"];
                

var wins = 0;
var losses = 0;
var currentWord = [];
var left = 9;
var guessesSoFar = [];
var psychicWord = ["help", "demogorgan", "upside", "steve", "mouthbreather", "dungeon", "pollywog"];


var guessesLeft = function() {
    document.getElementById("guesses-left-text").innerHTML = "Guesses Left: " + left;
};

var soFar = function() {
    document.getElementById("guesses-input-text").innerHTML = "Your guesses so far: " + guessesSoFar.join(", ");
};

var newGame = function() {
	guessedLetters = [];
    left = 9;
    newLetter();
    guessesLeft();
    soFar();
}

var computerGuessWord = function() {
    var rand = psychicWord[Math.floor(Math.random() * psychicWord.length)];
    
    console.log(rand)

    for (var i = 0; i < rand.length; i++) {
    document.getElementById("current-word-text").append("_ "); 
    
    console.log(rand[i])

    document.onkeyup = function(event) {
        var userGuess = event.key;
        if (left > 0) {
            if (userGuess==rand[i]) {
                rand[i].push(userGuess);
                // if (psychicWord) {
                //     wins++;
                //     document.getElementById("wins-text").innerHTML = "Wins: " + wins;
                //     newGame();
                // }
            } else {
                left--;  
                guessesSoFar.push(userGuess);
                soFar();
                guessesLeft();
            }    
        } else if (left == 0) {
            losses++;
            document.getElementById("losses-text").innerHTML = "Losses: " + losses;
            newGame();
        }
    };

    }

};
computerGuessWord();
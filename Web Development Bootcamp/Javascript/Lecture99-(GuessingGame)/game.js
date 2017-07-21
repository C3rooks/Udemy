// Create secretNumber

// ask user for guess

// check guess


var secretNumber = 4; 
var guess = Number(prompt("Guess a number"));

if(guess === secretNumber)
	alert("CONGRATULATIONS!!! YOU GUESSED THE SECRET NUMBER!");
else if (guess  > secretNumber)
	alert("Sorry, too high guess again!"); 
else 
	alert("Sorry, too low guess again!"); 
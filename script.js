var secretVariable = 4;

var guess = Number(prompt("Guess a number"));

if(guess === secretVariable){
	alert("You got it right!")
}

else if(guess > secretVariable){
	alert("Too high. Guess again")
}

else {
	alert("Too low")
}
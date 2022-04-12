var playMap = new Array(7).fill(false);
var shipLocation =  Math.floor(Math.random() * 5);

for(var i = 0; i < 3; i++){
    playMap[shipLocation + i] = true;
}

var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while(!isSunk){
    guess = prompt("Ready, aim, fire! (enter a number 0-6):");

    if (guess == null){
        alert("Press number for shot!");
        continue;
    }

    if ((guess > 6) || (guess < 0)){
        alert("Incorrect number, press new number");
    }
    else{
        guesses++;
        if (playMap[guess]){
            alert("There is a hit!");
            playMap[guess] = false;
            hits++;

            if (hits == 3){
                isSunk = true;
                alert("Ship is sunk! - " + guesses + " shots was done");
            }
        }
        else {
            alert("Miss!");
        }
    }
}
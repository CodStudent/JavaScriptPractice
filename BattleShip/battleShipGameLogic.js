var location1 =  Math.floor(Math.random() * 5);
var location2 = location1 + 1;
var location3 = location2 + 1;

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
        if (guess == location1){
            alert("There is a hit!");
            location1 = 7;
            hits++;
        }
        else if (guess == location2){
            alert("There is a hit!");
            location2 = 7;
            hits++;
        }
        else if (guess == location3){
            alert("There is a hit!");
            location3 = 7;
            hits++;
        }
        else {
            alert("Miss!");
        }

        if (hits == 3){
            isSunk = true;
            alert("Ship is sunk! - " + guesses + " shots was done");
        }
    }
}
var playerName = window.prompt("What is your robot's name?"); // Runs bc there isn't a function keyword.  prompt is a funtion and we're passing in a string 
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiple values at once like this:
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyName + " is starting with " + enemyHealth + " health points " + " and has " + enemyAttack + " attack points.");

// Below creates a funciton by expression 
var fight = function() {
    // Alert players that they are starting the round 
    window.alert("Welcome to Robot Gladiators");

    // Subtract the value of 'playerAttack' from the value of 'enemyHealth'. Use result to update the value in the 'enemyHealth variable
    enemyHealth = enemyHealth - playerAttack; // enemyHealth now 50 - 10 = 40

    //Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " has attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health points."
    );
    //subtract the value of 'enemyAttack' from the value of 'playerHealth'. Use that result to update the value in the 'playerHealth' var
    playerHealth = playerHealth - enemyAttack; // playerHealth 100 - 12 = 88

    //Log a resulting message to the console so we know it worked. 
    console.log(
        playerName + " was attacked by " + enemyName + ". " + playerName + " now has " + playerHealth + " health points."
    );
}

// executes the function 
fight();
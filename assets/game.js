var playerName = window.prompt("What is your robot's name?"); // Runs bc there isn't a function keyword.  prompt is a funtion and we're passing in a string 
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
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
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    console.log(promptFight);
    // Check if player chose fight or FIGHT, then fight 
    if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {
        enemyHealth = enemyHealth - playerAttack;
        console.log(playerName + " has attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health points.");
        //Check enemy's health after the fight 
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        } else {
            window.alert(enemyName + " has " + enemyHealth + " health points left!");
        }
        //Remove player's health by subtracting the amount set in the enemyAttack variable 
        playerHealth = playerHealth - enemyAttack;
        console.log(
            playerName + " was attacked by " + enemyName + ". " + playerName + " now has " + playerHealth + " health points."
        );
        // Check player's health 
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        } else {
            console.log(playerName + " still has " + playerHealth + " health points left!");
        }
    } else if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
        //Confrim the player would like to skip the fight 
        var confirmSkip = window.confirm("Are you sure you'd like to skip the fight?");

        // if yes, leave the fight 
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip the fight. Goodbye!");
            //subtract money from playerMoney for skipping 
            playerMoney = playerMoney - 2;
            console.log(playerMoney);
        } 
        // if no (false), ask question again by running fight() agian 
        else {
            fight();
        }
    } 
    else {
        window.alert("You need to choose a valid option. Try agian!");
    }
}

// executes the function 
fight();
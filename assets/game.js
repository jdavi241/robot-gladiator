// this creates a function named "fight"

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
// You can log multiple values at once:
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Roboto Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    //Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    console.log(promptFight);

    //if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {
        // remove enemy's health by subtracting the amount set in the playerAttack variable 
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " +  + ". " +  + " now has " + enemyHealth + " health reamianing."
        );

        //check enemy's health 
        if (enemyHealth <= 0) {
            window.alert( + " has died!");
        } else {
            window.alert( + " still has " + enemyHealth + " health left.");
        }

        // remove player's health by subtracting the amount set in the enemyAttack var 
        playerHealth = playerHealth - enemyAttack;
        console.log(
             + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        )
        //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth'.
        enemyHealth = playerAttack - enemyHealth;
        //Log a resulting message to the console so we know that it worked.
        console.log(
            playerName + " attacked " +  + ". " +  + " now has " + enemyHealth + " health reamining."
        );
        // Check enemy's health
        if (enemyHealth <= 0) {
            window.alert( + " has died!");
        }
        else {
            window.alert( + " still has " + enemyHealth + " health left.");
        }
        //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
        playerHealth = enemyAttack - playerHealth;
        //Log a resulting message to the console so we know that it worked.
        console.log(
             + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        //check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }    
    // if player choses to skip
    else if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
        // Confirm player wants to skip 
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes (true), leave the fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerName for skipping 
            playerMoney = playerMoney - 2;
        }
        // if no (false), ask question again by running fight() again 
        else {
            fight();
        }
        window.alert(playerName + " has chosen to skip the fight!");
    } else {
        window.alert("You need to choose a valid option. Try again!");
    }

};

// fight();


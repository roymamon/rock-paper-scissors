let humansScore = 0;
let computersScore = 0;

console.log("Hey, welcome to Rock-Paper-Scissors!");

function getComputersChoice() {
    let computersChoice = Math.floor(Math.random()*3);
    switch(computersChoice){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";            
    }
}

function getHumansChoice() {
    let humansChoice = prompt("Choose: Rock, Paper, Scissors");
    switch (humansChoice.toLowerCase()) {
        case "rock":
            return "rock";
        case "paper":    
            return "paper";  
        case "scissors":    
            return "scissors"; 
        default:
            alert("Invalid Input, Please Try Again");
            return getHumansChoice();     
    }
}

function playRound(humansChoice, computersChoice){
    if (humansChoice == computersChoice) {
        return "ITS A TIE!";
    }
    if ((humansChoice == "rock" && computersChoice == "scissors")
      || (humansChoice == "paper" && computersChoice == "rock")
        || (humansChoice == "scissors" && computersChoice == "paper")) {
            humansScore++;
            return "YOU WIN!";
        }
    else {
        computersScore++;
        return "YOU LOSE!";
    }    
}

function playGame() {
    
    for (let i = 0 ; i <= 4 ; i++) {
        
        const humansSelection = getHumansChoice();
        console.log("Round " + (i+1));
        const computersSelection = getComputersChoice();
        console.log("You Chose: " + humansSelection);
        console.log("Opponent Chose: " + computersSelection);
        console.log(playRound(humansSelection, computersSelection));
    }
    console.log("Game over, Results:");
    console.log("Your Score: " + humansScore);
    console.log("Opponents Score: " + computersScore);
    if ( humansScore == computersScore) {
        console.log("ITS A TIE!");
    }
    else if (humansScore > computersScore) {
        console.log("Congrats, YOU WON");
    }
    else {
        console.log("YOU LOST :(");
    }

}

playGame();
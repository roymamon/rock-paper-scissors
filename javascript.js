let humanScore = 0;
let computerScore = 0;
console.log("Hey, welcome to Rock-Paper-Scissors!");
function getComputerChoice() {
    let c = Math.floor(Math.random()*3);
    switch(c){
        case 0:
            return "Opponent: Rock";
        case 1:
            return "Opponent: Paper";
        case 2:
            return "Opponent: Scissors";            
    }
}
console.log(getComputerChoice());
function getHumanChoice() {
    let playersChoice = prompt("Choose: Rock, Paper, Scissors");
    switch (playersChoice.toLowerCase()) {
        case "rock":
            return "Player: Rock";
        case "paper":    
            return "Player: Paper"  
        case "scissors":    
            return "Player: Scissors" 
        default:
            alert("Invalid Input, Please Try Again");
            return getHumanChoice();     
    }
}
console.log(getHumanChoice());
function playRound(humanChoise,computerChoise){
    
}
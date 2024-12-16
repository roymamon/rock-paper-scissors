console.log("Hey, welcome to Rock-Paper-Scissors!");
// Initialize game variables
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

// Function for computer's choice
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

// Play one round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

// Function to display results
function displayResult(result) {
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = result;

    const scoreDiv = document.getElementById("score");
    scoreDiv.textContent = `Score: Player ${playerScore} - Computer ${computerScore}`;

    // End the game after 5 rounds
    if (roundsPlayed === 5) {
        declareWinner();
    }
}

// Declare the final winner
function declareWinner() {
    const resultDiv = document.getElementById("result");
    if (playerScore > computerScore) {
        resultDiv.textContent = "🎉 You won the game! 🎉";
    } else if (playerScore < computerScore) {
        resultDiv.textContent = "😢 You lost the game! 😢";
    } else {
        resultDiv.textContent = "🤝 It's a tie! 🤝";
    }

    // Disable buttons
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

// Add event listeners to buttons
document.getElementById("rock").addEventListener("click", () => {
    if (roundsPlayed < 5) {
        const result = playRound("Rock", getComputerChoice());
        roundsPlayed++;
        displayResult(result);
    }
});

document.getElementById("paper").addEventListener("click", () => {
    if (roundsPlayed < 5) {
        const result = playRound("Paper", getComputerChoice());
        roundsPlayed++;
        displayResult(result);
    }
});

document.getElementById("scissors").addEventListener("click", () => {
    if (roundsPlayed < 5) {
        const result = playRound("Scissors", getComputerChoice());
        roundsPlayed++;
        displayResult(result);
    }
});
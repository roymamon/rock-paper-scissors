console.log("Hey, welcome to Rock-Paper-Scissors!");
function getComputerChoice() {
    let c = Math.floor(Math.random()*3);
    switch(c){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";            
    }
}
console.log(getComputerChoice());
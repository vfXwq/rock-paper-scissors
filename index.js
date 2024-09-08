function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * choice.length)];
}
function getHumanChoice() {
    while (true) {
        let choice = prompt("Enter your choice: ").toLowerCase();
        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            return choice;
        }
        else {
            alert("Incorrect choice, please try again");
        }
    }
}
function capitalizeFirstWord(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(capitalizeFirstWord(humanChoice) + " and " + computerChoice + " is a tie!")
    }
    else if (humanChoice === "rock" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! " + capitalizeFirstWord(computerChoice) + " beats " + humanChoice + "!");
        computerScore = computerScore + 1;
    }
    else {
        console.log("You win! " + capitalizeFirstWord(humanChoice) + " beats " + computerChoice + "!");
        humanScore = humanScore + 1;
    }
    console.log("Your score is: " + humanScore + ".\n" + "The computer's score is: " + computerScore + ".");
    console.log(" ");
}


let humanScore = 0;
let computerScore = 0;

playRound(getHumanChoice(), getComputerChoice());
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
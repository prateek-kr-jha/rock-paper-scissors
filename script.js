const options = ["Rock", "Paper", "Scissors"];
let playerWins = 0;
let computerWins = 0;

function getComputerSelection(){
    let idx = Math.floor((Math.random() * 3));
    return options[idx];
}

function winner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return 0;
    }

    if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ) {
        return 1;
    }

    return -1;
        
}

function playRound(playerSelection, computerSelection){
    let win = winner(playerSelection.toLowerCase(), computerSelection.toLowerCase());
    if(win == 1){
        playerWins++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if(win == -1){
        computerWins++;
        return `You Loose! ${computerSelection} beats ${playerSelection}`;
    } else if(win == 0){
        return `It's a Draw.`
    }
    
}

function game(){
    for(let i = 0; i < 5; i++){
        const playerSelection = prompt("Enter your choice");
        const computerSelection = getComputerSelection();
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log(`Final Score: ${playerWins} - ${computerWins}`);
    if(playerWins > computerWins){
        console.log("WINNER!!!");
    } else if(computerWins > playerWins){
        console.log("LOOSERR!!!!!");
    } else {
        console.log("It's a DRAWWW!!!");
    }
}

game();
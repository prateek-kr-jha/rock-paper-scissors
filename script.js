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

function game(e){
    if(playerWins == 5 || computerWins == 5){
        let messageDisplay = document.querySelector(".message");
        messageDisplay.innerText = "Please restart game";
        return;

    }
    let playerSelection = e.target.className;
    let computerSelection = getComputerSelection();

    let playerSelectDiv = document.querySelector(".player .display-select-text");
    playerSelectDiv.innerText = playerSelection[0].toUpperCase() + playerSelection.slice(1,);
    let computerSelectDiv = document.querySelector(".computer .display-select-text");
    computerSelectDiv.innerText = computerSelection;
    let playerDisplay = document.querySelector(".player .display-select");
    let computerDisplay = document.querySelector(".computer .display-select");
    let playerImg = document.createElement("img");
    let computerImg = document.createElement("img");
    if(computerSelection == "Rock"){
        computerImg["src"] = "./style/icons/noun-rock-711504.svg";

    } else if(computerSelection == "Scissors"){
        computerImg["src"] = "./style/icons/noun-scissors-5847042.svg";

        
    } else if(computerSelection == "Paper"){
        computerImg["src"] = "./style/icons/noun-paper-135860.svg";

    }

    if(e.target.className == "rock"){
        playerImg["src"] = "./style/icons/noun-rock-711504.svg";
    } else if(e.target.className == "scissors"){
        playerImg["src"] = "./style/icons/noun-scissors-5847042.svg";
    } else if(e.target.className == "paper"){
        playerImg["src"] = "./style/icons/noun-paper-135860.svg";
    }
    playerImg.className = "display-pic";
    computerImg.className = "display-pic";

    playerDisplay.innerHTML = "";
    computerDisplay.innerHTML = "";
    playerDisplay.appendChild(playerImg);
    computerDisplay.appendChild(computerImg);
    let winner = playRound(playerSelection, computerSelection);
    console.log(winner);
    let messageDisplay = document.querySelector(".message");
    messageDisplay.innerText = winner;
    let scoreDisplay = document.querySelector(".score");
    scoreDisplay.innerText = `${computerWins} - ${playerWins}`;
}


let rpsButtons = document.querySelectorAll("img");
rpsButtons.forEach(button => {
    button.addEventListener('click', game)
})
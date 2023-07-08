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

// function game(){
//     for(let i = 0; i < 5; i++){
//         const playerSelection = prompt("Enter your choice");
//         const computerSelection = getComputerSelection();
//         console.log(playRound(playerSelection, computerSelection));
//     }
//     console.log(`Final Score: ${playerWins} - ${computerWins}`);
//     if(playerWins > computerWins){
//         console.log("WINNER!!!");
//     } else if(computerWins > playerWins){
//         console.log("LOOSERR!!!!!");
//     } else {
//         console.log("It's a DRAWWW!!!");
//     }
// }

// game();

let rpsButtons = document.querySelectorAll("img");
// console.log(rpsButton);
rpsButtons.forEach(button => {
    button.addEventListener('click', (e) =>{

        console.log(e.target.className, "hi");

        let playerSelection = e.target.className;
        let computerSelection = getComputerSelection();


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
    })
})
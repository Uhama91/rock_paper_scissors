const getComputerChoice = () => {
    //randomly decide console rock, paper or scissors
    let randomNumber = Math.floor(Math.random()*3)
    if(randomNumber===0){
        alert("Computer choose rock");
        return "rock";
    }else if(randomNumber===1) {
        alert("Computer choose paper");
        return "paper";
    } else {
        alert("Computer choose scissors");
        return "scissors"
    }
}

// user choice
let playerPrompt = prompt("Rock, paper or scissors?");

// what player choose and alert the choice
const getHumanChoice = (playerChoice) => {
    playerChoice = playerPrompt;

    switch(playerChoice){
        case "rock":
            alert("You played rock");
            break;
        
        case "paper":
            alert("You played paper");
            break;
        
        case "scissors":
            alert("You played scissors");
            break;
    }

}

let humanScore = 0;
let computerScore = 0;

//One round of the game nd counts a point
const playRound =(humanChoice, computerChoice)=>{
    
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
        
    switch(humanChoice){
                case "rock":
                    if(computerChoice==="rock"){
                        alert("DRAW, no looser no winner");
                    } else if(computerChoice==="paper"){
                        alert("You LOOSE! Paper wraps rock...");
                        return computerScore += 1;
                    } else{
                        alert("You WIN! Rock crashes scissors!");
                        return humanScore += 1;
                    }
                    break;
        
                case "paper":
                    if(computerChoice==="rock"){
                        alert("You WIN! Paper wraps rock!");
                        return humanScore += 1;
                    } else if(computerChoice==="paper"){
                        alert("DRAW, no looser no winner");
                    } else{
                        alert("You LOOSE! Scissors cut paper...");
                        return computerScore += 1;
                    }
                    break;
        
                    case "scissors":
                    if(computerChoice==="rock"){
                        alert("You LOOSE! Rock crashes scissors...");
                        return computerScore += 1;
                    } else if(computerChoice==="paper"){
                        alert("You WIN! Scissors cut paper!");
                        return humanScore += 1;
                    } else{
                        alert("DRAW, no looser no winner");
                    }
                    break;
            }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

    
//logic of the game

const playGame = (oneParty) => {
    for(let i=0; i<=5; i++){
        oneParty = playRound(humanSelection, computerSelection);
    }
    return oneParty;
}

playGame();
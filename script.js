const getComputerChoice = () => {
    //randomly decide console rock, paper or scissors
    let randomNumber = Math.floor(Math.random()*3)
    if(randomNumber===0){
        alert("Computer chose rock");
        return "rock";
    }else if(randomNumber===1) {
        alert("Computer chose paper");
        return "paper";
    } else {
        alert("Computer chose scissors");
        return "scissors"
    }
}

// Ask what player choose and alert the choice
const getHumanChoice = () => {

    // user choice
let playerPrompt = prompt("Rock, paper or scissors?");

    switch(playerPrompt.toLowerCase()){
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
    return playerPrompt.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

//One round of the game nd counts a point
const playRound =(humanChoice, computerChoice)=>{
        
    switch(humanChoice){
                case "rock":
                    if(computerChoice==="rock"){
                        alert("DRAW, no loser no winner");
                    } else if(computerChoice==="paper"){
                        alert("You LOSE! Paper wraps rock...");
                        return computerScore++;
                    } else{
                        alert("You WIN! Rock crashes scissors!");
                        return humanScore++;
                    }
                    break;
        
                case "paper":
                    if(computerChoice==="rock"){
                        alert("You WIN! Paper wraps rock!");
                        return humanScore++;
                    } else if(computerChoice==="paper"){
                        alert("DRAW, no looser no winner");
                    } else{
                        alert("You LOOSE! Scissors cut paper...");
                        return computerScore++;
                    }
                    break;
        
                    case "scissors":
                    if(computerChoice==="rock"){
                        alert("You LOOSE! Rock crashes scissors...");
                        return computerScore++;
                    } else if(computerChoice==="paper"){
                        alert("You WIN! Scissors cut paper!");
                        return humanScore++;
                    } else{
                        alert("DRAW, no looser no winner");
                    }
                    break;
            }
            return humanChoice;
}

    
//logic of the game

const playGame = () => {
    
    let humanPlayingScore;
    let computerPlayingScore;
    
    for(let i=0; i<=5; i++){

        const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);
        
        humanPlayingScore = humanScore++;
        computerPlayingScore = computerScore++;
        
        let score = (`Score player ${humanPlayingScore} computer ${computerPlayingScore}`)
        
        alert(score);
    }
    return score;
}

playGame();
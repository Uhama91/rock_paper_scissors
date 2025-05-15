const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');

const paraComputer = document.querySelector('#paraComputerChoice');
const paraPlayer = document.querySelector('#paraPlayerChoice');
const roundResult = document.querySelector('#roundResult');
const roundPara = document.querySelector('#round');
const score = document.querySelector('#score');
const finalScore = document.querySelector('#finalScore');

let round = 0;
let humanScore = 0;
let computerScore = 0;

const clickRock = rockBtn.addEventListener('click', () => {
    
    if(round === 5){
        if(humanScore>computerScore){
            finalScore.textContent = `Well play! You WIN!!`;
        } else if(computerScore>humanScore){
            finalScore.textContent = `What a pitty! You LOSE!!`;
        } else {          
            finalScore.textContent = `Neither winner, neither winner, RAW!`;

        }
        return
        //display result
    } else {
        paraPlayer.textContent = 'You played rock';
        playRound('rock', getComputerChoice());
        round++
        roundPara.textContent = `round ${round}`;
        score.textContent = `Player'score: ${humanScore} - Computer'score: ${computerScore}`;
    }
});
    const clickPaper = paperBtn.addEventListener('click', () => {
    
    if(round === 5){
        if(humanScore>computerScore){
            finalScore.textContent = `Well play! You WIN!!`;
        } else if(computerScore>humanScore){
            finalScore.textContent = `What a pitty! You LOSE!!`;
        } else {          
            finalScore.textContent = `Neither winner, neither winner, RAW!`;

        }
        return
        } else {
        paraPlayer.textContent = 'You played paper';
        playRound('paper', getComputerChoice());

        round++
        roundPara.textContent = `round ${round}`;
        score.textContent = `Player'score: ${humanScore} - Computer'score: ${computerScore}`;

        }
    });
    const clickScissors = scissorsBtn.addEventListener('click', () => {
    
    if(round === 5){
        if(humanScore>computerScore){
            finalScore.textContent = `Well play! You WIN!!`;
        } else if(computerScore>humanScore){
            finalScore.textContent = `What a pitty! You LOSE!!`;
        } else {          
            finalScore.textContent = `Neither winner, neither winner, RAW!`;

        }
        return
        } else {
        paraPlayer.textContent = 'You played scissors';
        playRound('scissors', getComputerChoice());
        round++
        roundPara.textContent = `round ${round}`;
        score.textContent = `Player'score: ${humanScore} - Computer'score: ${computerScore}`;
        }
    });

const getComputerChoice = () => {
    //randomly decide console rock, paper or scissors
    let randomNumber = Math.floor(Math.random()*3)
    if(randomNumber===0){
        paraComputer.textContent = "Computer chose rock";
        return "rock";
    }else if(randomNumber===1) {
        paraComputer.textContent = "Computer chose paper";
        return "paper";
    } else {
        paraComputer.textContent = "Computer chose scissors";
        return "scissors"
    }
}

//One round of the game counts a point
const playRound =(humanChoice, computerChoice)=>{
        
    switch(humanChoice){
                case 'rock':
                    if(computerChoice==="rock"){
                        roundResult.textContent = "DRAW, no loser no winner"; 
                    } else if(computerChoice==="paper"){
                        roundResult.textContent = "You LOSE! Paper wraps rock...";
                        computerScore++;
                    } else{
                        roundResult.textContent = "You WIN! Rock crashes scissors!";
                        humanScore++;
                    }
                    break;
        
                case 'paper':
                    if(computerChoice==="rock"){
                        roundResult.textContent = "You WIN! Paper wraps rock!";
                        humanScore++;
                    } else if(computerChoice==="paper"){
                        roundResult.textContent = "DRAW, no looser no winner";
                    } else{
                        roundResult.textContent = "You LOOSE! Scissors cut paper...";
                        computerScore++;
                    }
                    break;
        
                    case 'scissors':
                    if(computerChoice==="rock"){
                        roundResult.textContent = "You LOOSE! Rock crashes scissors...";
                        computerScore++;
                    } else if(computerChoice==="paper"){
                        roundResult.textContent = "You WIN! Scissors cut paper!";
                        humanScore++;
                    } else{
                        roundResult.textContent = "DRAW, no looser no winner";
                    }
                    break;
            }
            return humanChoice;
}
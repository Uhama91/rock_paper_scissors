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
let choicePlayer = prompt("Rock, paper or scissors?");

const getHumanChoice = () => {

let computerChoice = getComputerChoice();

    switch(choicePlayer){
        case "rock":
            if(computerChoice==="rock"){
                alert("DRAW, no looser no winner");
            } else if(computerChoice==="paper"){
                alert("You LOOSE! Paper wraps rock...");
            } else{
                alert("You WIN! Rock crashes scissors!");
            }
            break;

        case "paper":
            if(computerChoice==="rock"){
                alert("You WIN! Paper wraps rock!");
            } else if(computerChoice==="paper"){
                alert("DRAW, no looser no winner");
            } else{
                alert("You LOOSE! Scissors cut paper...");
            }
            break;

            case "scissors":
            if(computerChoice==="rock"){
                alert("You LOOSE! Rock crashes scissors...");
            } else if(computerChoice==="paper"){
                alert("You WIN! Scissors cut paper!");
            } else{
                alert("DRAW, no looser no winner");
            }
            break;
    }
}

getHumanChoice();
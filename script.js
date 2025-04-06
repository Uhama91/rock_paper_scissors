const getComputerChoice = () => {
    //randomly decide console rock, paper or scissors
    let randomNumber = Math.floor(Math.random()*3)
    if(randomNumber===0){
        return "rock";
    }else if(randomNumber===1) {
        return "paper";
    } else {
        return "scissors"
    }
}

// user choice
let choice = prompt("Rock, paper or scissors?");

const getHumanChoice = (choice) => {

let computerChoice = getComputerChoice();

    switch(choice){

        case choice.toLowerCase==="rock":
            if(computerChoice==="rock"){
                alert("DRAW");
            } else if(computerChoice==="paper"){
                alert("You WIN!");
            } else{
                alert("You LOOSE!");
            }
            break;

        case choice.toLowerCase==="paper":
            if(computerChoice==="rock"){
                alert("You LOOSE!");
            } else if(computerChoice==="paper"){
                alert("DRAW");
            } else{
                alert("You WIN!");
            }
            break;

            case choice.toLowerCase==="scissors":
            if(computerChoice==="rock"){
                alert("You LOOSE!");
            } else if(computerChoice==="paper"){
                alert("You WIN!");
            } else{
                alert("DRAW");
            }
            break;
    }
}


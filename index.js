function getComputerChoice(){
    let randomNumber = Math.floor((Math.random() * 3)+1);
    if (randomNumber == 1){
        return "Rock";
    } else if(randomNumber == 2){
        return "Paper";
    } else {
        return "Scissors";
    }
}

function makeWord(str){
    let result = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    return result;
}

function playRound(playerSelection, computerSelection){
    playerSelection = makeWord(playerSelection);
    let victory;
    // victory 0 is player's loss
    // victory 1 is tie
    // victory 2 is player's win
    if (computerSelection == "Rock"){
        switch(playerSelection){
            case "Rock":
                victory = 1;
                break;
            case "Paper":
                victory = 2;
                break;
            case "Scissors":
                victory = 0;
                break;
        }
    } else if (computerSelection == "Paper"){
        switch(playerSelection){
            case "Rock":
                victory = 0;
                break;
            case "Paper":
                victory = 1;
                break;
            case "Scissors":
                victory = 2;
                break;
        }
    } else if (computerSelection == "Scissors"){
        switch(playerSelection){
            case "Rock":
                victory = 2;
                break;
            case "Paper":
                victory = 0;
                break;
            case "Scissors":
                victory = 1;
                break;
        }
    }
    switch(victory){
        case 0:
            return `You lose! ${computerSelection} beats ${playerSelection}`;
            break;
        case 1:
            return `Tie! ${computerSelection} equals ${playerSelection}`;
            break;
        case 2:
            return `You win! ${playerSelection} beats ${computerSelection}`;
            break;
    } 
}
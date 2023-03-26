function getComputerChoice(){
//Gets a random choice from the computer b/w rock paper scissors
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
//Converts the given string such that first letter is capital and rest are lower case
    let result = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    return result;
}

function playRound(playerSelection, computerSelection){
//Plays 1 round of the game and returns a value b/w 0 1 2 (loss tie win)
    playerSelection = makeWord(playerSelection);
    let victory = 0;
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
    // switch(victory){
    //     case 0:
    //         return `You lose! ${computerSelection} beats ${playerSelection}`;
    //         break;
    //     case 1:
    //         return `Tie! ${computerSelection} equals ${playerSelection}`;
    //         break;
    //     case 2:
    //         return `You win! ${playerSelection} beats ${computerSelection}`;
    //         break;
    // }
    
    return victory;
}

function game(){
//Plays multiple rounds of the game. Prints result after every round. First to 5 wins. Final winner and result is printed.
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 1; playerScore<5 && computerScore<5; i++){
        let playerChoice = makeWord(prompt(`Round ${i}! Pick your weapon!`));
        let computerChoice = getComputerChoice();
        let roundResult = playRound(playerChoice, computerChoice);
        let result;
        switch(roundResult){
            case 0:
                result = `Computer wins the round! ${computerChoice} beats ${playerChoice}`;
                computerScore++;
                break;
            case 1:
                result = `Tie! ${computerChoice} equals ${playerChoice}`;
                playerScore += 0;
                computerScore += 0;
                break;
            case 2:
                result = `Player wins the round! ${playerChoice} beats ${computerChoice}`;
                playerScore++;
                break;
        }
        console.log(`Round ${i}: ${result}`);
    }
    if (computerScore > playerScore){
        console.log(`Computer wins the game with a score of ${computerScore}-${playerScore}!`);
    } else if (computerScore < playerScore){
        console.log(`Player wins the game with a score of ${playerScore}-${computerScore}!`);
    } else if (computerScore == playerScore){
        console.log(`The game ended in a tie with the score ${playerScore}-${computerScore}!`);
    }
}
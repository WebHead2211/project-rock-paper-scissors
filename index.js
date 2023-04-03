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
    
    return victory;
}

//UI

//Shows player and computer choice (and their current score)
function showChoice(playerChoice, computerChoice){
    const playerIcon = document.querySelector('#player-choice-icon');
    const computerIcon = document.querySelector('#computer-choice-icon');

    switch(playerChoice){
        case 'rock':
            playerIcon.setAttribute('class', 'fa-regular fa-hand-back-fist choice-icon');
            playerIcon.setAttribute('style', 'width: 150px');
            break;
        case 'paper':
            playerIcon.setAttribute('class', 'fa-regular fa-hand choice-icon');
            break;
        case 'scissors':
            playerIcon.setAttribute('class', 'fa-regular fa-hand-peace choice-icon');
            break;    
    }

    switch(computerChoice){
        case 'Rock':
            computerIcon.setAttribute('class', 'fa-regular fa-hand-back-fist choice-icon');
            computerIcon.setAttribute('style', 'width: 150px');
            break;
        case 'Paper':
            computerIcon.setAttribute('class', 'fa-regular fa-hand choice-icon');
            break;
        case 'Scissors':
            computerIcon.setAttribute('class', 'fa-regular fa-hand-peace choice-icon');
            break;    
    }
    

    const choiceDisplay = document.querySelectorAll('.choice');
    choiceDisplay.forEach(div => div.classList.remove('hidden'));
}

//Plays a round using the button the player clicked
function playGame(){
    let playerChoice = this.querySelector('i').getAttribute('id');
    let computerChoice = getComputerChoice();
    let roundResult = playRound(playerChoice, computerChoice);
    let result;

    const playerHeader = document.querySelector('#player-header');
    const computerHeader = document.querySelector('#computer-header');

    switch(roundResult){
        case 0:
            result = `Computer wins the round! ${computerChoice} beats ${makeWord(playerChoice)}`;
            computerScore++;
            playerHeader.style.color = 'red';
            computerHeader.style.color = 'green';
            break;
        case 1:
            result = `Tie! ${computerChoice} equals ${makeWord(playerChoice)}`;
            playerHeader.style.color = '#03045E';
            computerHeader.style.color = '#03045E';
            break;
        case 2:
            result = `Player wins the round! ${makeWord(playerChoice)} beats ${computerChoice}`;
            playerScore++;
            playerHeader.style.color = 'green';
            computerHeader.style.color = 'red';
            break;
        }
        const playerScoreDisplay = document.querySelector('.player-score');
        const computerScoreDisplay = document.querySelector('.computer-score');
        playerScoreDisplay.textContent = `${playerScore}`;
        computerScoreDisplay.textContent = computerScore;
        showChoice(playerChoice, computerChoice);
        console.log(result);

        if(playerScore == 5 || computerScore == 5){
            gameOver(playerScore, computerScore);
        }
}

//Displays final winner (whoever reached 5 points) and also shows a play again button
function gameOver(scoreOne, scoreTwo){
    resetButton.classList.remove('hidden');
    buttons.forEach(button => button.removeEventListener('click', playGame));
    const iconContainer = document.querySelectorAll('.icon-container');
    iconContainer.forEach(container => container.classList.remove('hovering'));
    title.style.color = 'green';
    if(scoreOne > scoreTwo){
        title.textContent = "Player wins the game!";
    } else {
        title.textContent = "Computer wins the game!";
    }
}

//Resets the game
function resetGame(){
    resetButton.classList.add('hidden');
    title.textContent = "Rock Paper Scissors";
    title.style.color = '#03045E';
    computerScore = 0;
    playerScore = 0;
    buttons.forEach(button => button.addEventListener('click', playGame));
    const iconContainer = document.querySelectorAll('.icon-container');
    iconContainer.forEach(container => container.classList.add('hovering'));
    const choiceDisplay = document.querySelectorAll('.choice');
    choiceDisplay.forEach(div => div.classList.add('hidden'));
}

let computerScore = 0;
let playerScore = 0;
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click', playGame));
const title = document.querySelector('h1');
const resetButton = document.querySelector('#reset-button');
resetButton.addEventListener('click', resetGame);
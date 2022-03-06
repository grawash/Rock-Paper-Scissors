const rock = document.querySelector('#rock');
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector(".results");
const buttons = document.querySelectorAll('button')
const gameStatus = document.querySelector(".status");
const playerScreen = document.querySelector(".playerScreen");
const computerScreen = document.querySelector(".computerScreen");

function disableButtons(){
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function computerPlay(){
    let computerPick = Math.floor(Math.random()*3+1);
    if (computerPick === 1) return "rock";
    else if (computerPick === 2) return "paper";
    else return "scissors"; 
}
function assignImage(choice){
    if (choice === "rock"){computerScreen.src=("./images/rock.png"); computerScreen.setAttribute('style', 'width: 200px; height: 200px');}
    else if (choice === "paper"){computerScreen.src=("./images/paper.png"); computerScreen.setAttribute('style', 'width: 200px; height: 200px');}
    else {computerScreen.src=("./images/scissors.png"); computerScreen.setAttribute('style', 'width: 200px; height: 200px');}
}
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
function playGame(playerSelection){
 
    computerSelection = computerPlay().toLowerCase();
    assignImage(computerSelection);
    if (playerSelection === computerSelection){ gameStatus.textContent = "draw";}
    else if(playerSelection==="scissors" && computerSelection==="paper"){ playerScore++; gameStatus.textContent = ("you won! "+playerSelection+" beats "+computerSelection);}
    else if(playerSelection==="rock" && computerSelection==="scissors"){ playerScore++; gameStatus.textContent = ("you won! "+playerSelection+" beats "+computerSelection);}
    else if(playerSelection==="paper" && computerSelection==="rock"){ playerScore++; gameStatus.textContent = ("you won! "+playerSelection+" beats "+computerSelection);}
    else{ computerScore++; gameStatus.textContent = ("you lost to a computer!")};
    results.textContent=(`you:${playerScore} computer:${computerScore} `)
    if(playerScore === 5){ results.textContent="you won"; disableButtons();}
    if(computerScore === 5){ results.textContent="you lost"; disableButtons();}
}
rock.addEventListener('click', () => {console.log(playGame("rock")); playerScreen.src=("./images/rock.png"); playerScreen.setAttribute('style', 'width: 200px; height: 200px'); });
paper.addEventListener('click', () => {console.log(playGame("paper")); playerScreen.src=("./images/paper.png"); playerScreen.setAttribute('style', 'width: 200px; height: 200px'); });
scissors.addEventListener('click',() => {console.log(playGame("scissors")); playerScreen.src=("./images/scissors.png"); playerScreen.setAttribute('style', 'width: 200px; height: 200px'); });

const rock = document.querySelector('#rock');
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector(".results");
const buttons = document.querySelectorAll('button')
const gameStatus = document.querySelector(".status");

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
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
function playGame(playerSelection){
 
    computerSelection = computerPlay().toLowerCase();
    if (playerSelection === computerSelection){ gameStatus.textContent = "draw";}
    else if(playerSelection==="scissors" && computerSelection==="rock"){ playerScore++; gameStatus.textContent = ("you won! "+playerSelection+" beats "+computerSelection);}
    else if(playerSelection==="rock" && computerSelection==="scissors"){ playerScore++; gameStatus.textContent = ("you won! "+playerSelection+" beats "+computerSelection);}
    else if(playerSelection==="paper" && computerSelection==="rock"){ playerScore++; gameStatus.textContent = ("you won! "+playerSelection+" beats "+computerSelection);}
    else{ computerScore++; gameStatus.textContent = ("you lost to a computer!")};
    results.textContent=(`you:${playerScore} computer:${computerScore} `)
    if(playerScore === 5){ results.textContent="you won"; disableButtons();}
    if(computerScore === 5){ results.textContent="you lost;"; disableButtons();}
}
rock.addEventListener('click', () => {console.log(playGame("rock"));});
paper.addEventListener('click', () => {console.log(playGame("paper"));});
scissors.addEventListener('click',() => {console.log(playGame("scissors"));});

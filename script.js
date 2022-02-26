console.log("Hello World!")
function computerPlay(){
    let computerPick = Math.floor(Math.random()*3+1);
    if (computerPick === 1) return "rock";
    else if (computerPick === 2) return "paper";
    else return "scissors"; 
}
let playerSelection;
let computerSelection;
function playGame(playerSelection,computerSelection){
    playerSelection = prompt("your choice ?").toLowerCase();
    computerSelection = computerPlay().toLowerCase();
    if (playerSelection === computerSelection) return("draw");
    else if(playerSelection==="scissors" && computerSelection==="rock") return("you won! "+playerSelection+" beats "+computerSelection);
    else if(playerSelection==="rock" && computerSelection==="scissors") return("you won! "+playerSelection+" beats "+computerSelection);
    else if(playerSelection==="paper" && computerSelection==="rock") return("you won! "+playerSelection+" beats "+computerSelection);
    else return("you lost to a computer!");
}
function game(){
    let playerScore = 0;
    let computerScore = 0;
    let result;
    for(let i=0;i<5;i++){
        console.log("player: "+playerScore+" computer: "+computerScore)
        result=playGame();
        if (result==="you lost to a computer!") computerScore++;
        else if(result==="draw") continue;
        else playerScore++;
    }
    if(playerScore>computerScore) console.log("you won!");
    else console.log("you lost!");
}
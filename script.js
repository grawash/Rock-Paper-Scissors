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
    if (playerSelection === computerSelection) return(playerSelection+" "+computerSelection+" draw");
    else if(playerSelection==="scissors" && computerSelection==="rock") return("you won! "+playerSelection+" beats "+computerSelection);
    else if(playerSelection==="rock" && computerSelection==="scissors") return("you won! "+playerSelection+" beats "+computerSelection);
    else if(playerSelection==="paper" && computerSelection==="rock") return("you won! "+playerSelection+" beats "+computerSelection);
    else return(playerSelection+" beats "+computerSelection+" you lost to a computer!");
}
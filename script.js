console.log("Hello World!")
function computerPlay(){
    let computerPick = Math.floor(Math.random()*3+1);
    if (computerPick === 1) return "rock";
    else if (computerPick === 2) return "paper";
    else return "scissors"; 
}

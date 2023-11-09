let play = document.getElementById("play")
let cpu = document.getElementById("cpu")
let player = document.getElementById("player")
let result = document.getElementById("result")

let computerSelection = ""
function getComputerChoice(){
    let random = Math.floor(Math.random()*(3-1+1)+1)
    if(random == 1) {
        computerSelection = "rock"
        cpu.innerHTML = "Rock"
    } else if (random == 2) {
        computerSelection = "paper"
        cpu.innerHTML = "Paper"
    } else {
        computerSelection = "scissors"
        cpu.innerHTML = "Scissors"
    }
}

let playerSelection = ""
function getPlayerChoice(){
    if(player.value == "rock") {
        playerSelection = "rock"
    } else if (player.value == "paper") {
        playerSelection = "paper"
    } else if (player.value == "scissors") {
        playerSelection = "scissors"
    } else {
        alert("Please choose a valid option :)")
    }
}

let winner = ""
function roundPlay(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        winner = "Its a tie!"
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        winner = "Paper beats rock, you lost!"
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        winner = "Rock beats scissors, you won!"
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        winner = "Paper beats rock, you won!"
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        winner = "Scissors beats paper, you lost!"
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        winner = "Rock beats scissors, you lost!"
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        winner = "Scissors beats paper, you won!"
    } else {
        winner = "Oops! Try again with a valid option"
    }
    
}


play.addEventListener("click", ()=> {
    getComputerChoice()
    getPlayerChoice()
    roundPlay(playerSelection, computerSelection)
    result.innerHTML = winner
})


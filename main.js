let play = document.getElementById("play-btn")
let cpu = document.getElementById("cpu")
let player = document.getElementById("player")
let result = document.getElementById("result")
let playerScore = document.getElementById("player-score")
let cpuScore = document.getElementById("cpu-score")
let finalMsg = document.getElementById("final-msg")
let restartBtn = document.getElementById("restart-btn")


// Function to get the computer's choice:
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

// Function to get the player's choice:
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


// Function to play a round and determinate the winner:
let winner = ""
let playerCounter = 0
let cpuCounter = 0
function roundPlay(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        winner = "Its a tie!"
        result.style.color = "blue"
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        winner = "Paper beats rock, you lost!"
        result.style.color = "red"
        cpuCounter ++
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        winner = "Rock beats scissors, you won!"
        result.style.color = "green"
        playerCounter ++
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        winner = "Paper beats rock, you won!"
        result.style.color = "green"
        playerCounter ++
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        winner = "Scissors beats paper, you lost!"
        result.style.color = "red"
        cpuCounter ++
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        winner = "Rock beats scissors, you lost!"
        result.style.color = "red"
        cpuCounter ++
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        winner = "Scissors beats paper, you won!"
        result.style.color = "green"
        playerCounter ++
    } else {
        winner = "Oops! Try again with a valid option"
        result.style.color = "blue"
    }
}

// Function to show and hide buttons:
function showAndHide() {
    play.classList.add("hide")
    finalMsg.classList.remove("hide")
    finalMsg.classList.add("show")
    restartBtn.classList.remove("hide")
    restartBtn.classList.add("show")
}


// Function to count rounds, maximum to 5:
let gamesPlayed = 0
function game() {
    gamesPlayed++
    if (gamesPlayed < 5) {
        roundPlay(playerSelection, computerSelection)
    } else if (gamesPlayed = 5) {
        roundPlay(playerSelection, computerSelection)
        showAndHide()
    }
}

// Play a round with "Play" button:
play.addEventListener("click", ()=> {
    getComputerChoice()
    getPlayerChoice()
    game()
    result.innerHTML = winner
    playerScore.innerHTML = playerCounter
    cpuScore.innerHTML = cpuCounter
})


// Restart the game:
restartBtn.addEventListener("click", () => {
    player.value = ""
    cpu.innerHTML = ""
    result.innerHTML = ""
    playerCounter = 0
    playerScore.innerHTML = playerCounter
    cpuCounter = 0
    cpuScore.innerHTML = cpuCounter
    gamesPlayed = 0
    play.classList.add("show")
    finalMsg.classList.remove("show")
    finalMsg.classList.add("hide")
    restartBtn.classList.remove("show")
    restartBtn.classList.add("hide")
})


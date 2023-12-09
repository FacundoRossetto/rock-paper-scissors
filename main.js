let subtitle = document.getElementById("subtitle")
let rockBtn = document.getElementById("rock-btn")
let paperBtn = document.getElementById("paper-btn")
let scissorsBtn = document.getElementById("scissors-btn")
let cpu = document.getElementById("cpu")
let player = document.getElementById("player")
let result = document.getElementById("result")
let playerScore = document.getElementById("player-score")
let cpuScore = document.getElementById("cpu-score")
let champ = document.getElementById("champ")
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

// Function to determinate the winner:
let playerSelection = ""
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
    subtitle.classList.add("hide")
    rockBtn.classList.add("hide")
    paperBtn.classList.add("hide")
    scissorsBtn.classList.add("hide")
    finalMsg.classList.remove("hide")
    finalMsg.classList.add("show")
    restartBtn.classList.remove("hide")
    restartBtn.classList.add("show")
}


// Function to count points, maximum to 5:
function game() {
    roundPlay(playerSelection, computerSelection)
    if (playerCounter == 5) {
        champ.innerHTML = "YOU WON! :)"
        showAndHide()
    } else if (cpuCounter == 5) {
        champ.innerHTML = "Oops, CPU WINS :("
        showAndHide()
    }
}

// Play a round with "Play" button:

rockBtn.addEventListener("click", ()=> {
    playerSelection = "rock"
    console.log(playerSelection)
    getComputerChoice()
    game()
    result.innerHTML = winner
    playerScore.innerHTML = playerCounter
    cpuScore.innerHTML = cpuCounter
})

paperBtn.addEventListener("click", ()=> {
    playerSelection = "paper"
    console.log(playerSelection)
    getComputerChoice()
    game()
    result.innerHTML = winner
    playerScore.innerHTML = playerCounter
    cpuScore.innerHTML = cpuCounter
})

scissorsBtn.addEventListener("click", ()=> {
    playerSelection = "scissors"
    console.log(playerSelection)
    getComputerChoice()
    game()
    result.innerHTML = winner
    playerScore.innerHTML = playerCounter
    cpuScore.innerHTML = cpuCounter
})


// Restart the game:
restartBtn.addEventListener("click", () => {
    cpu.innerHTML = ""
    result.innerHTML = ""
    playerCounter = 0
    playerScore.innerHTML = playerCounter
    cpuCounter = 0
    cpuScore.innerHTML = cpuCounter
    gamesPlayed = 0
    rockBtn.classList.add("show")
    paperBtn.classList.add("show")
    scissorsBtn.classList.add("show")
    champ.classList.add("hide")
    finalMsg.classList.remove("show")
    finalMsg.classList.add("hide")
    restartBtn.classList.remove("show")
    restartBtn.classList.add("hide")
})


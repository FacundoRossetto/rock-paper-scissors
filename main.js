let play = document.getElementById("play")
let choice = document.getElementById("choice")

function getComputerChoice(){
    let random = Math.floor(Math.random()*(3-1+1)+1)
    if(random == 1) {
        choice.innerHTML = "Rock!"
    } else if (random == 2) {
        choice.innerHTML = "Paper!"
    } else {
        choice.innerHTML = "Scissors!"
    }
}

play.addEventListener("click", ()=> {
    getComputerChoice()
})
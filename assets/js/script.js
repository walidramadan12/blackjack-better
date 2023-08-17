let player = { //shorthand
    name:"ahmad",
    chips:200
}
let isAlive = false
let sum = 0
const messageEl = document.getElementById("message-el")
const cardsEl = document.getElementById("cards-el")
const sumEl = document.getElementById("sum-el")
const playerEl = document.getElementById("player-el")
messageEl.innerHTML = "Want to play a round?"
cardsEl.innerHTML = "Cards: "
sumEl.innerHTML = "Sum: "
playerEl.innerHTML = `${player.name}: $${player.chips}`
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() *13)+1
    return randomNumber
}
function startGame() {
    if(isAlive == false){
        isAlive = true
        player.chips -= 50
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        sum = firstCard + secondCard
        cardsEl.innerHTML = `Cards: ${firstCard} ${secondCard}`
        sumEl.innerHTML = `Sum: ${sum}`
        playerEl.innerHTML = `${player.name}: $${player.chips}`
        renderGame()
    }else{
        alert('You already have started the game')
    }
}
function newCard() {
    if(isAlive == true && player.chips >= 50 && sum < 21){
        player.chips -= 50
        let card = getRandomCard()
        cardsEl.innerHTML += ` ${card}`
        sum += card
        sumEl.innerHTML = `Sum: ${sum}`
        playerEl.innerHTML = `${player.name}: $${player.chips}`
        renderGame()
    }
}
function renderGame() {
    if(sum < 21){
        messageEl.innerHTML = "do you want a new card ?"
    }else if(sum == 21){
        messageEl.innerHTML = 'congrats you win!'
    }else if(player.chips == 0) {
        messageEl.innerHTML = "you are out of money, try again"
    }else{
        messageEl.innerHTML ='sorry, you lose, try again'
    }
}
function reset() {
    if(sum >= 21 || player.chips == 0){
        location.reload()
    }
}
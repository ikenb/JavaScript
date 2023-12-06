'use strict';

const player1El = document.getElementById("player1")
const player1E2 = document.getElementById("player2")

const score0El = document.querySelector('#score--0')
const score1El = document.querySelector('#score--1')
const diceEl = document.getElementById('diceImage')
const currentScore0El = document.querySelector("#current--0")
const currentScore0E2 = document.querySelector("#current--1")

const scores = [0,0]
let activePlayer = 0;
score0El.textContent = 0
score1El.textContent = 0
let currentScore = 0
player1El.classList.add('player--active')

diceEl.setAttribute('hidden', 'hidden')

const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

const swithPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0
        currentScore = 0
        activePlayer = activePlayer === 0 ? 1 : 0
        player1El.classList.remove('player--active')
        player1E2.classList.add('player--active') 
}

btnRoll.addEventListener('click', function(){
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceEl.removeAttribute('hidden')
    diceEl.src = `assets/dice-${dice}.png`

    if(dice !== 1){
        currentScore += dice
        document.getElementById(`current--${activePlayer}`).textContent = currentScore
        
    }
    else{    
        swithPlayer()
    }
})

btnHold.addEventListener('click', function(){
 scores[activePlayer] += currentScore
 document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]

 if(scores[activePlayer] >= 100){
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
 }

 else{
    swithPlayer()
 }

})




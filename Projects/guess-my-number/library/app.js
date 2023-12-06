'use strict';

 const answer = Math.trunc((Math.random() * 20 + 1));
 
 let highScore = document.querySelector('.highscore').textContent;


// let guessedNumber = document.querySelector(".score").textContent

// function check(){
//     if(guessedNumber > answer){
//         document.querySelector(".message").textContent = "Oops this is too big";
//     }
//     else if(guessedNumber < answer){
//         document.querySelector(".message").textContent = "Oops this is too small"
//     }
//     else{
//         document.querySelector(".message").textContent = "Well done, you guessed right"
//     }
//     console.log(answer)
//     console.log(guessedNumber)
// }

// document.querySelector(".message").textContent = "Well done, you gussed right"

document.querySelector('.check').addEventListener('click', function(){
    let currentScore = document.querySelector('.score').textContent;
    const guessedNumber = Number(document.querySelector('.guess').value);
    if(!guessedNumber){
        document.querySelector('.message').textContent = '🤦‍♀️Enter a number'
        document.querySelector('.score').textContent = currentScore - 1
    }
    
    else if(guessedNumber > answer){
        if(currentScore > 0){
            document.querySelector(".message").textContent = "Oops this is too big";
            document.querySelector('.score').textContent = currentScore - 1
            }
            else{
                document.querySelector(".message").textContent = "Your try count has depleted"
            }
        }  
    else if(guessedNumber < answer){
        if(currentScore > 0){
            document.querySelector(".message").textContent = "Oops this is too small"
            document.querySelector('.score').textContent = currentScore - 1
        }
        else{
            document.querySelector(".message").textContent = "Your try count has depleted"
        }
            
    }      
    else{
        document.querySelector(".message").textContent = "Well done, you guessed right"
        document.querySelector('.number').textContent = answer; 
        if(currentScore > highScore){
            document.querySelector('.highscore').textContent = currentScore;
        }
    }
        
})

document.querySelector('.again').addEventListener('click', function(){
//Reset everithing
})
'use strict';

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnsOpenModal = document.querySelectorAll('.show-modal')

for(let i = 0; i <btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener('click', function(){
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
    })
}

btnCloseModal.addEventListener('click', function(){
    hideModal(modal,overlay)
})

overlay.addEventListener('click', function(){
    hideModal(modal,overlay)
})

function hideModal(modal, overlay){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

document.addEventListener('keydown', function(event){
   if(event.key === 'Escape' && !modal.classList.contains('hidden')){
    hideModal(modal,overlay)
   } 
})
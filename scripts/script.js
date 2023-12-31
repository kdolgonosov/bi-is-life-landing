const keyEscHandler = (evt) => {
    if(evt.key === 'Escape') {
      hidePopUp(document.querySelector('.pop-up_shown'))
    }
}
  
const mouseHandler = (evt) => {
    hidePopUp(evt.target)
}
  
function showPopUp (target) {
    target.classList.add('pop-up_shown')
    document.addEventListener('keydown', keyEscHandler)
    target.addEventListener('click', mouseHandler)
}
  
function hidePopUp (target) {
    target.classList.remove('pop-up_shown')
    document.removeEventListener('keydown', keyEscHandler)
    target.removeEventListener('click', mouseHandler)  
}

const popUpCloseBtn = document.querySelector('.pop-up__btn')
const forms = document.querySelectorAll('form')
const popUp = document.querySelector('.pop-up')
forms.forEach(form => {
    form.addEventListener('submit', () => {
        showPopUp(popUp)
    })
})
popUpCloseBtn.addEventListener('click', (evt) => {
    evt.preventDefault()
    hidePopUp(popUp)
})
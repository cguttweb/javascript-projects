import './style.css'

let minNum = document.querySelector('#min').value
let maxNum = document.querySelector('#max').value
let genButton = document.querySelector('#genNumber')
let numberGenerated = document.querySelector('#numberGenerated')

function generateNum(min, max){
  return 
}

genButton.addEventListener('click', () => {
  generateNum()
  numberGenerated.innerHTML = `Your number is between ${minNum} and ${maxNum}`
})


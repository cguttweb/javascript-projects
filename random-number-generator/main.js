import './style.css'

let minNum = document.querySelector('#min')
let maxNum = document.querySelector('#max')
let genButton = document.querySelector('#genNumber')
let numberGenerated = document.querySelector('#numberGenerated')

function generateRandomNum(min, max){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}


genButton.addEventListener('click', () => {
  generateRandomNum(minNum, maxNum)
  numberGenerated.innerHTML = `Your number is ${generateRandomNum()}`
})

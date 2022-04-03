import './style.css'

const loginBtn = document.getElementById('login')
const cancelBtn = document.getElementById('cancel')

let username = document.getElementById('username').value
let password = document.getElementById('password').value

let usernameError = document.querySelector('.error-username')
let passwordError = document.querySelector('.error-password')
let userInput = document.querySelector('#username')
let passwordInput = document.querySelector('#password')

function validateInput() {
  if (username !== 'testuser') {
    usernameError.innerHTML = `Username does not match`
    userInput.style.backgroundColor = `rgba(204, 0, 0, 0.5)`
  }
  if (password !== 'mypassword') {
    passwordError.innerHTML = `Password does not match`
    passwordInput.style.backgroundColor = `rgba(204, 0, 0, 0.5)`
  }
}

loginBtn.addEventListener('click', e => {
  e.preventDefault()
  validateInput()
})

cancelBtn.addEventListener('click', e => {
  e.preventDefault()
})

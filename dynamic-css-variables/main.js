import './style.css'

const loginBtn = document.getElementById('login')
const cancelBtn = document.getElementById('cancel')

let username = document.getElementById('username').value
let password = document.getElementById('password').value

let errorMessage = document.querySelector('.message')

function validateInput() {
  if (username !== 'testuser') {
    console.log('username does not match')
  }
  if (password !== 'mypassword') {
    console.log('password does not match')
  }
}

loginBtn.addEventListener('click', e => {
  e.preventDefault()
  validateInput()
})

cancelBtn.addEventListener('click', e => {
  e.preventDefault()
})

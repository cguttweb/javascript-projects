import './style.css'

const loginBtn = document.getElementById('login')
const cancelBtn = document.getElementById('cancel')

const username = document.getElementById('username').value
const password = document.getElementById('password').value

function validateInput() {
  if (username !== 'testuser') {
    console.log('username doesnt match')
  }
  if (password !== 'mypassword') {
    console.log('password doesnt match')
  }
}

loginBtn.addEventListener('click', e => {
  e.preventDefault()
  validateInput()
})

import './style.css'

const clickEvents = document.getElementById('click-events')
const clickBtn = document.getElementById('click-btn')

const keyboardEventsText = document.querySelector('#keyboard-events span')

const getKeyNames = event => {
  if(event.key === 'Enter'){
    keyboardEventsText.innerHTML = `You hit the Enter key`
  }
  else if (event.key === 'Delete') {
    keyboardEventsText.innerHTML = `You hit the delete key`
  }
  else if (event.key === ' ') {
    keyboardEventsText.innerHTML = `You hit the spacebar`
  } else {
    keyboardEventsText.innerHTML = `You hit a different key ${event.key}`
  }
}

const app = document.querySelector('#app')
app.addEventListener('keypress', getKeyNames)

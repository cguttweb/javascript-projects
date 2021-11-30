import './style.css'

const app = document.querySelector('#app').innerHTML = `
<h1>Key Value</h1>
<div id="output">
Is key pressed alt key, control key or shift key? =  <span class="check"></span>
</div>
`

let keyCheck = document.querySelector('.check')
keyCheck.textContent = `false`

document.addEventListener('keydown', (e) => {
  // added to prevent F5 reloading the page when working locally
  e.preventDefault()

  const p = document.createElement('p')
  p.textContent = `You pressed key = ${e.key} or code = ${e.code}`

  const output = document.querySelector('#output')
  if (e.key === `Alt` || e.key === `Enter` || e.key === `shift` || e.key === `Control`) {
    keyCheck.style.backgroundColor = `#FF0000`
    keyCheck.style.color = `#FFFFFF`
    keyCheck.textContent = `true`
  } else {
    keyCheck.style.backgroundColor = `#FFFFFF`
    keyCheck.style.color = `#FF0000`
    keyCheck.textContent = `false`
  }
  output.appendChild(p)

}, true)
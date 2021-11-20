const output = document.querySelector('#output')
const smallNumbers = document.querySelector('#smallNumbers')
const largeNumbers = document.querySelector('#largeNumbers')
const btnPlay = document.querySelector('#btnPlay')
const spinnerUp = document.querySelector('#spinnerUp')
const spinnerDown = document.querySelector('#spinnerDown')

const minGoal = 50
const maxSmalls = 6
let smalls = maxSmalls / 2
let large = maxSmalls / 2

document.addEventListener('click', ev => handleClick(ev))
writeToOutput(`SMALLS ${smalls} / LARGE ${large}`)
smallNumbers.innerHTML = smalls || "PRESS PLAY TO ADD NUMBER COMBOS"
largeNumbers.innerHTML = large || "PRESS PLAY TO ADD NUMBER COMBOS"
function writeToOutput(inp) {
  output.innerHTML = inp
}

function handleClick(e) {
  e.preventDefault()
  e.stopPropagation()
  switch (e.target.id) {
    case 'spinnerUp':
      if (smalls < maxSmalls) {
        smalls++
        large = maxSmalls - smalls
      } else {
        smalls = maxSmalls
      }
      break
    case 'spinnerDown':
      if (smalls > 0) {
        smalls--
        large = maxSmalls - smalls
      } else {
        smalls = 0
        large = maxSmalls - smalls
      }
      break
    case 'btnPlay':
      generateNumbers();
      break

    default:
      break;
  }
  smallNumbers.innerHTML = smalls
  largeNumbers.innerHTML = large
}

function generateNumbers() {
  const largeSet = [25, 50, 75, 100]
  const smallsSet = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  let nums = ""
  for (let i = 0; i < smalls; i++) {
    nums += `<span class="playNumber">${smallsSet[Math.floor(Math.random() * smallsSet.length)]}</span>`
  }
  // nums += "LARGE: "
  for (let i = 0; i < large; i++) {
    nums += `<span class="playNumber">${largeSet[Math.floor(Math.random() * largeSet.length)]}</span>`
  }

  nums += `<span class="goal">${Math.floor(Math.random() * 1000) + minGoal}</span>`
  writeToOutput(nums)
}
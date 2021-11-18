const output = document.querySelector('#output')
const btnGenerate = document.querySelector('#btnGenerate')

const maxSmalls = 6
let smalls = maxSmalls;


function writeToOutput(inp) {
  output.textContent = inp
}
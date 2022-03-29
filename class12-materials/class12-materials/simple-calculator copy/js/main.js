let total = 0.00

document.querySelector('#pumpkin').addEventListener('click', makeZero)
document.querySelector('#dominosPizza').addEventListener('click', jumanji)
document.querySelector('#zebra').addEventListener('click', add9)
document.querySelector('#cantThinkOfAnything').addEventListener('click', sub2)
document.querySelector('#anotherOne').addEventListener('click', another1)

function makeZero() {
  total = 0.00
  document.querySelector('#placeToPutResult').innerText = total.toString() + ".00"
}

function jumanji() {
  total = total + 3.00
  document.querySelector('#placeToPutResult').innerText = total.toString() + ".00"
}

function add9() {
  total = total + 9.00
  document.querySelector('#placeToPutResult').innerHTML = total.toString() + ".00"
}

function sub2() {
  total = total - 2.00
  document.querySelector('#placeToPutResult').innerHTML = total.toString() + ".00"
}

function another1() {
  total = total + 1.00
  document.querySelector('#placeToPutResult').innerHTML = total.toString() + ".00"
}

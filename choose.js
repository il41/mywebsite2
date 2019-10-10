let field = document.querySelector('input')

let fighters = document.querySelectorAll('img')
let rock = fighters[0]
let paper = fighters[1]
let scissors = fighters[2]

rock.addEventListener('click', ()=>{field.value="rock"})
paper.addEventListener('click', ()=>{field.value="paper"})
scissors.addEventListener('click', ()=>{field.value="scissors"})

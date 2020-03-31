// Write your code here!
const name = "Komal"

document.querySelector("main#main").remove()

const newHeader = document.createElement("h1")

newHeader.id = "victory"
newHeader.innerHTML = `${name} is the champion!`
newHeader.className = "victory"
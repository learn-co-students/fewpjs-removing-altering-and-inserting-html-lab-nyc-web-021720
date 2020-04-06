// Write your code here!
const body = document.querySelector("body");
document.querySelector("main#main").remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerText = "Joey is the champion";
console.log(newHeader);
body.append(newHeader);

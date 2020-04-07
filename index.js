// Write your code here!
let header = document.querySelector("main#main");
header.remove();

let newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = `YOUR-NAME is the champion`;

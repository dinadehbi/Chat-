let cont = document.getElementById("cont");
let chatMessages = document.getElementById("chat-messages");
let input = document.getElementById("inp");
let demo = document.querySelector("h3");
var currentPerson = "Saalali";
demo.innerHTML = currentPerson + " is chatting ...";
let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
btn1.addEventListener("click",function(){
    currentPerson = "Saalali"
    demo.innerHTML = currentPerson + " is chatting ...";
})
btn2.addEventListener("click",function(){
    currentPerson = "Dina";
    demo.innerHTML = currentPerson + " is chatting ...";
})

function send() {
    if(currentPerson == "Saalali"){
    let date = new Date();
    let hour = date.getHours() + ":" + date.getMinutes();
    let message = `${currentPerson}: ${input.value} <span id="spn">${hour}</span>`;
    input.value = "";
    var messageDisplay = document.createElement("p")
    messageDisplay.style.backgroundColor = "blue"
    messageDisplay.innerHTML = message;
    chatMessages.appendChild(messageDisplay);
    }   
    if(currentPerson == "Dina"){
    let date = new Date();
    let hour = date.getHours() + ":" + date.getMinutes();
    var message = `${currentPerson}: ${input.value} <span id="spn">${hour}</span>`;
    input.value = "";
 var messageDisplay = document.createElement("p")
 messageDisplay.style.backgroundColor = "rgb(255, 8, 160)"
    messageDisplay.innerHTML = message;
    chatMessages.appendChild(messageDisplay);
}
}

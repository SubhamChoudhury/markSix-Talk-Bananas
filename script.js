var translateBtn = document.querySelector("#translate-btn");
var textInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");

translateBtn.addEventListener("click", function clickEventHandler(){
    outputDiv.innerHTML = "translate" + textInput.value;
})

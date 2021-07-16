alert("You can only use the app for 5 times in an hour, so use is wisely.");
var translateBtn = document.querySelector("#translate-btn");
var textInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");
var serverURL = "https://api.funtranslations.com/translate/minion.json" //API

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text;
}
function errorHandler(error) {
    console.log("Error encountered", error);
    alert("Something went wrong with the server! Please try again later");
}


translateBtn.addEventListener("click", function clickEventHandler() {
    var inputText = textInput.value;    //taking input
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;  //receiving output
        })
        .catch(errorHandler)
})

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();


function start() {
    document.getElementById("textbox").innerHTML= "";
    recognition.start();
}
recognition.onresult = function(event){
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML= content;
}
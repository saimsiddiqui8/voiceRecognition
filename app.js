var textarea = document.getElementById("textarea");
var speak = document.getElementById("speak");
var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition;
speak.addEventListener('click' , function () {
    speak.style.color = 'red'
})
speak.addEventListener("click" , function () {
    recognition.start();
    textarea.innerHTML = '...Speaking'
})
recognition.onresult = function (e) {
    console.log(e);
    var transcript = e.results[0][0].transcript;
    textarea.innerHTML = transcript;
    speak.style.color = 'black'
}

// ********************By Saim Siddiqui*******************
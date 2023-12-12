var speech = new SpeechSynthesisUtterance();
window.speechSynthesis.cancel();
if ("speechSynthesis" in window) {
  function jsSpeech(message) {
    speech.text = message;
    var voices = window.speechSynthesis.getVoices();
    console.log(voices);
    voices = voices.filter((e) => e.lang == "en-US" || e.lang == "en-GB");
    console.log(voices);
    speech.voice = voices[Math.floor(Math.random() * voices.length)];
    window.speechSynthesis.speak(speech);
  }
} else {
  alert("Sorry, your browser doesn't support text to speech!");
}

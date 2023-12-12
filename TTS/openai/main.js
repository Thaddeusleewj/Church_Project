let openai_audio_list = [
  "./elevenlabs/ElevenLabs_2023-12-12T17_08_35_Callum.mp3",
  "./elevenlabs/ElevenLabs_2023-12-12T17_09_21_Daniel.mp3",
  "./elevenlabs/ElevenLabs_2023-12-12T17_09_46_Charlie.mp3",
  "./elevenlabs/ElevenLabs_2023-12-12T17_10_11_Emily.mp3",
];

function openAISpeech(text) {
  let audio = document.createElement("audio");
  let source = document.createElement("source");
  source.src =
    openai_audio_list[Math.floor(Math.random() * openai_audio_list.length)];
  source.type = "audio/mp3";
  audio.appendChild(source);
  audio.classList.add("hidden");
  audio.autoplay = true;
  
  document.getElementById("audioDiv").appendChild(audio);
}

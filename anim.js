// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Hand in mine, into your ice blues", time: 8 },
  { text: "And then I'd say to you, We could take to the highway", time: 12 },
  { text: "With this trunk of ammunition, too", time: 19 },
  { text: "I'd end my days with you, in a hail of bullets", time: 21 },
  { text: "I'm trying, I'm trying", time: 30 },
  { text: "To let you know just how much you mean to me", time: 34 },
  { text: "And after all the things we put each other through and", time: 41 },
  { text: "I would drive on, to the end with you", time: 51 },
  { text: "A liquor store or two keeps the gas tank full", time: 55 },
  { text: "And I feel like there's nothing left to do", time: 60 },
  { text: "But prove myself to you, and we'll keep it running", time: 65 },
  { text: "But this time, I mean it", time: 71 },
  { text: "I'll let you know just how much you mean to me", time: 76 },
  { text: "As snow falls on desert sky", time: 82 },
  { text: "Until the end of everything", time: 86 },
  { text: "I'm trying, I'm trying", time: 92 },
  { text: "To let you know how much you mean", time: 95 },
  { text: "As days fade and nights grow", time: 99 },
  { text: "And we grow cold", time: 105 },
  { text: "Until the end, until this pool of blood", time: 112 },
  { text: "Until this, I mean this, I mean this", time: 118 },
  { text: "Until the end of", time: 123 },
  { text: "I'm trying, I'm trying", time: 126 },
  { text: "To let you know how much you mean", time: 130 },
  { text: "As days fade and nights grow", time: 135 },
  { text: "And we grow cold", time: 138 },
  { text: "But this time, we'll show them", time: 143 },
  { text: "We'll show them all how much we mean", time: 146 },
  { text: "As snow falls on desert sky", time: 150 },
  { text: "Until the end of every", time: 155 },
  { text: "Lauren <3", time: 155 },
];

let lastLine = null;

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    if (lastLine !== currentLine.text) {
      lastLine = currentLine.text;
      lyrics.innerHTML = currentLine.text;
      lyrics.style.opacity = 1;
    }
  }
}

setInterval(updateLyrics, 1000);

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards";
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000);
}

setTimeout(ocultarTitulo, 216000);
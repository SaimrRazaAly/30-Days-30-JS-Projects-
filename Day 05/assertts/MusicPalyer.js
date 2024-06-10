let prograss = document.querySelector("#prograss");
let song = document.querySelector("#song");
let ctrlIcon = document.querySelector("#ctrlIcon");

song.onloadedmetadata = () => {
prograss.max = song.duration;
prograss.value = song.currentTime;
};

function playPause() {
if (ctrlIcon.classList.contains("fa-pause")) {
  song.pause();
  ctrlIcon.classList.remove("fa-pause");
  ctrlIcon.classList.add("fa-play");
  } else {
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
  prograss.onchange = () => {
  song.currentTime = song.value;
  ctrlIcon.classList.add("fa-pause");
  ctrlIcon.classList.remove("fa-play");
  };
    }
    
}

if (song.play()) {
setInterval(() => {
  prograss.value = song.currentTime;
}, 100);
}

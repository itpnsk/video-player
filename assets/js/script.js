const video = document.getElementById("video");
const play = document.getElementById("play");
const playIcon = document.getElementById("playIcon");
const pause = document.getElementById("pause");
const progress = document.getElementById("progress");
const timer = document.getElementById("timer");

function secondsToTime(e){
    var h = Math.floor(e / 3600).toString().padStart(2,'0'),
        m = Math.floor(e % 3600 / 60).toString().padStart(2,'0'),
        s = Math.floor(e % 60).toString().padStart(2,'0');

    return `${m}:${s}`;
}

console.log(secondsToTime(7735));  //02:08:55

play.addEventListener("click", () => {
    console.log("play btn clicked");
    if (video.paused) {
        video.play();
        playIcon.classList.remove("fa-play");
        playIcon.classList.add("fa-pause");
    } else {
        video.pause();
        playIcon.classList.remove("fa-pause");
        playIcon.classList.add("fa-play");
    }
})

pause.addEventListener("click", () => {
    console.log("pause btn clicked");
    if (!video.paused) {
        video.currentTime = 0;
        progress.value = 0;
        playIcon.classList.remove("fa-pause");
        playIcon.classList.add("fa-play");
        video.pause();
    }
})

video.addEventListener("timeupdate", () => {
    console.log(secondsToTime(video.currentTime));
    progress.value = (100/video.duration) * video.currentTime;
    timer.innerText = secondsToTime(video.currentTime);

})

progress.addEventListener("change", () => {
    console.log(progress.value);
    video.currentTime = (video.duration/100) * progress.value;
})

progress.addEventListener("mousedown", () => {
    console.log(progress.value);
    console.log("tu4");
    video.pause();
})

progress.addEventListener("mouseup", () => {
    video.play();
})


function mouseDown() {
    document.getElementById("myP").style.color = "red";
  }
  
function mouseUp() {
    document.getElementById("myP").style.color = "green";
}
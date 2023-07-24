let currentVideo = null;

function playVideo(boxNumber) {
  const video = document.getElementById(`video${boxNumber}`);
  const symbol = document.querySelector(`#box${boxNumber} .symbol`);

  if (currentVideo !== null && currentVideo !== video) {
    currentVideo.pause();
    currentVideo.currentTime = 0;
  }

  if (video.paused) {
    video.play();
    symbol.style.backgroundColor = "#00f"; // Change color to indicate the video is playing
    currentVideo = video;
  } else {
    video.pause();
    symbol.style.backgroundColor = "#f00"; // Change color to indicate the video is paused
    currentVideo = null;
  }
}

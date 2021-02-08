const videoElement = document.getElementById("video");
const startButton = document.getElementById("start-button");
const screenButton = document.getElementById("screen-button");

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log("selectMediaStream fuc error: " + error);
  }
}

startButton.addEventListener("click", async () => {
  console.log(videoElement);
  // disable startButton
  startButton.disabled = true;
  // Start picture in picture
  await videoElement.requestPictureInPicture();
  // Reset startButton
  startButton.disabled = false;
});

screenButton.addEventListener("click", () => {
  selectMediaStream();
});

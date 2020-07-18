import MediaPlayer from "../node_modules/mediaplayer-js/lib/MediaPlayer";
import AutoPlay from "../node_modules/mediaplayer-js/lib/plugins/AutoPlay";
import AutoPause from "../node_modules/mediaplayer-js/lib/plugins/AutoPause";
import Ads from "../node_modules/mediaplayer-js/lib/plugins/Ads/";

const video = document.querySelector("video");
const player = new MediaPlayer({
  element: video,
  plugins: [new AutoPlay(), new AutoPause(), new Ads()]
});

const playbutton: HTMLElement = document.querySelector("#play");
playbutton.onclick = () => player.togglePlay();

const mutebutton: HTMLElement = document.querySelector("#mute");
mutebutton.onclick = () => player.muteSound();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").catch(error => {
    console.log(error.message);
  });
}

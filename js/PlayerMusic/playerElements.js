import { secondsToMinutes } from "./utils.js";

export default {
	get() {
		this.cover = document.querySelector(".card-img");
		this.title = document.querySelector(".card-title");
		this.artist = document.querySelector(".artist");
		this.lyrics = document.querySelector(".lyrics");
		this.playPause = document.querySelector("#play-pause");
		this.playPauseImage = document.querySelector("#play-pause-image");
		this.muted = document.querySelector("#muted");
		this.mutedImage = document.querySelector("#muted-image");
		this.volumeControl = document.querySelector("#volume-control");
		this.seekBar = document.querySelector("#seekbar");
		this.currentDuration = document.querySelector("#current-duration");
		this.totalDuration = document.querySelector("#total-duration");
		this.backMusic = document.querySelector("#back-music");
		this.passMusic = document.querySelector("#pass-music");
	},
	createAudioElement(audio) {
		this.audio = new Audio(audio);
	},
	actions() {
		this.audio.onended = () => this.next();
		this.audio.ontimeupdate = () => this.timeUpdate();
		this.playPause.onclick = () => this.togglePlayPause();
		this.muted.onclick = () => this.toggleMute();
		this.volumeControl.onchange = () => this.setVolume(this.volumeControl.value);
		this.volumeControl.oninput = () => this.setVolume(this.volumeControl.value);
		this.seekBar.onchange = () => this.setSeek(this.seekBar.value);
		this.seekBar.oninput = () => this.setSeek(this.seekBar.value);
		this.seekBar.max = this.audio.duration;
		this.totalDuration.innerText = secondsToMinutes(this.audio.duration);
		this.backMusic.onclick = () => this.toggleBackMusic();
		this.passMusic.onclick = () => this.togglePassMusic();
	},
};

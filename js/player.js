import audios from "./data.js";
import elements from "./playerElements.js";
import { path, secondsToMinutes } from "./utils.js";

export default {
	audioData: audios,
	currentAudio: {},
	currentPlay: 0,
	isPlaying: false,

	start() {
		elements.get.call(this);
		this.update();
		this.playPauseImage.src = "../../assets/musicOptions/play.png";
		this.mutedImage.src = "../../assets/musicOptions/sound.png";
	},
	play() {
		this.isPlaying = true;
		this.audio.play();
	},
	pause() {
		this.isPlaying = false;
		this.audio.pause();
	},
	togglePlayPause() {
		if (this.isPlaying == true) {
			this.pause();
			this.playPauseImage.src = "../../assets/musicOptions/play.png";
		} else if (this.isPlaying == false) {
			this.play();
			this.playPauseImage.src = "../../assets/musicOptions/pause.png";
		}
	},
	toggleMute() {
		this.audio.muted = !this.audio.muted;
		this.mutedImage.src = this.audio.muted
			? "../../assets/musicOptions/mute.png"
			: "../../assets/musicOptions/sound.png";
	},
	next() {
		this.currentPlay++;
		if (this.currentPlay == this.audioData.length) {
			this.restart();
		}

		this.update();
		this.audio.play();
	},
	setVolume(valorVolume) {
		this.audio.volume = valorVolume / 100;
	},
	setSeek(valorTempo) {
		this.audio.currentTime = valorTempo;
	},
	timeUpdate() {
		this.currentDuration.innerText = secondsToMinutes(this.audio.currentTime);
		this.seekBar.value = this.audio.currentTime;
	},
	update() {
		this.currentAudio = this.audioData[this.currentPlay];
		this.cover.src = this.currentAudio.cover;
		this.title.innerText = this.currentAudio.title;
		this.artist.innerText = this.currentAudio.artist;
		this.lyrics.innerHTML = this.currentAudio.lyrics;
		elements.createAudioElement.call(this, path(this.currentAudio.file));
		this.audio.onloadeddata = () => {
			elements.actions.call(this);
		};
	},
	restart() {
		this.currentPlay = 0;
		this.update();
	},
};

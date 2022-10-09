import audios from "./data.js";
import elements from "./playerElements.js";
import { path } from "./utils.js";

export default {
	audioData: audios,
	currentAudio: {},
	currentPlay: 0,
	start() {
		elements.get.call(this);
		elements.actions.call(this);
		this.update();
		this.audio.onended = () => this.next();
	},
	play() {
		this.audio.play();
	},
	next() {
		this.currentPlay++;
		if (this.currentPlay == this.audioData.length) {
			this.restart();
		}

		this.update();
		this.audio.play();
	},
	update() {
		this.currentAudio = this.audioData[this.currentPlay];
		this.cover.src = this.currentAudio.cover;
		this.title.innerText = this.currentAudio.title;
		this.artist.innerText = this.currentAudio.artist;
		this.lyrics.innerHTML = this.currentAudio.lyrics;
		elements.createAudioElement.call(this, path(this.currentAudio.file));
	},
	restart() {
		this.currentPlay = 0;
		this.update();
	},
};

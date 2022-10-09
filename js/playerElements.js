export default {
	get() {
		this.cover = document.querySelector(".card-img");
		this.title = document.querySelector(".card-title");
		this.artist = document.querySelector(".artist");
		this.lyrics = document.querySelector(".lyrics");
		this.playPause = document.querySelector("#play-pause");
	},
	createAudioElement(audio) {
		this.audio = new Audio(audio);
	},
	actions() {
		this.playPause.onclick = () => this.play();
	},
};

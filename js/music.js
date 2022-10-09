window.player = {
	cover: document.querySelector(".card-img"),
	title: document.querySelector(".card-title"),
	artist: document.querySelector(".artist"),
	audio: document.querySelector("audio"),
	lyrics: document.querySelector(".lyrics"),
	audioData: audios,
	currentAudio: {},
	currentPlay: 0,
	start() {
		this.update();
		this.audio.onended = () => this.next();
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
		this.audio.src = this.currentAudio.file;
		this.lyrics.innerHTML = this.currentAudio.lyrics;
	},
	restart() {
		this.currentPlay = 0;
		this.update();
	},
};

export default class ScoreTime {

	constructor(seconds){
		this.seconds = seconds;
	}

	get text(){

		let seconds = Math.floor(this.seconds%60);
		let minutes = Math.floor(this.seconds/60);

		return (minutes < 10 ? "0"+minutes : minutes) + 
		":" + 
		(seconds < 10 ? "0"+seconds : seconds);
	}
}
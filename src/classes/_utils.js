export function secondsToMinSeconds(secs){
	let seconds = Math.floor(secs%60);
	let minutes = Math.floor(secs/60);

	return (minutes < 10 ? "0"+minutes : minutes) + 
	":" + 
	(seconds < 10 ? "0"+seconds : seconds);
}
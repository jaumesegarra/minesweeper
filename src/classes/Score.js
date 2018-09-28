import { secondsToMinSeconds } from './_utils';

export default class Score {

	constructor(user, boardSize, bombs, time){
		this.user = user;
		this.boardSize = boardSize;
		this.bombs = bombs;
		this.time = time;
	}

	get obtainScoreNumber(){
		return this.boardSize[0]*this.boardSize[1]+this.bombs-this.time;
	}

	get timeString(){
		return secondsToMinSeconds(this.time);
	}
}
import Score from '../classes/Score';
import ScoreTime from '../classes/ScoreTime';

let scoresSaved = localStorage.getItem("scores");
if(scoresSaved)
	scoresSaved = ScoresJsonToClass(JSON.parse(scoresSaved));

let defaultState = {
	scores: (scoresSaved || [])
};

function ScoresJsonToClass(json){
	return json.map(sc => new Score(sc.user, sc.boardSize, sc.bombs, new ScoreTime(sc.time.seconds)));
}

export default (state = defaultState, action) => {
	switch(action.type){
		case 'PUT_SCORE': 
		let scores = ScoresJsonToClass(JSON.parse(JSON.stringify(state.scores)));

		scores.push(new Score(action.payload.user, action.payload.boardSize, action.payload.bombs, new ScoreTime(action.payload.time)));
	
		scores.sort((sc, sc2) => sc2.obtainScoreNumber-sc.obtainScoreNumber);

		return {...state, scores: scores.slice(0, 10)}
		default: return state
	}
}
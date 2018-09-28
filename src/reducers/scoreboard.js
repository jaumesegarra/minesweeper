import Score from '../classes/Score';

let scoresSaved = localStorage.getItem("scores");
if(scoresSaved)
	scoresSaved = JSON.parse(scoresSaved).map(sc => new Score(sc.user, sc.boardSize, sc.bombs, sc.time));

let defaultState = {
	scores: (scoresSaved || [])
};

export default (state = defaultState, action) => {
	switch(action.type){
		case 'PUT_SCORE': 
		let scores = JSON.parse(JSON.stringify(state.scores));
		scores.push(new Score(action.payload.user, action.payload.boardSize, action.payload.bombs, action.payload.time));
	
		scores.sort((sc, sc2) => sc2.obtainScoreNumber-sc.obtainScoreNumber);

		return {...state, scores: scores.slice(0, 10)}
		default: return state
	}
}
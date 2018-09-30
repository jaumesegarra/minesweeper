import Board from '../classes/Board';

let defaultState = {
	id: null,
	board: null,
	time: null,
	isStarted: false,
	isFinalized: false,
	wasWinner: null
}

export default (state = defaultState, action) => {
	let board = null;
	let square = null;

	switch(action.type){
		case 'RESET':
			return defaultState;
		case 'NEW_GAME':
			return {...state,
				id: Math.floor(Math.random()*100000),
				board: new Board(action.payload.size, action.payload.bombs),
				time: null,
				isStarted: false,
				isFinalized: false,
				wasWinner: null
			};
		case 'PUT_BOMBS':
			board = state.board.clone();
			
			board.putBombs(action.payload.firstDiscovered[0], action.payload.firstDiscovered[1]);

			return {...state, board: board, time: 0, isStarted: true};
		case 'DISCOVER_SQUARE':
			board = state.board.clone();

			let pos = action.payload.discovered;
			square = board.squares[pos[0]][pos[1]];			

			if(square.value === 9){
				square.isDiscovered = true;

				return {...state, isFinalized: true, wasWinner: false, board: board};
			}

			let resp = square.discover(board);
			
			let isFinalized = state.isFinalized;
			let wasWinner = state.wasWinner;
			if(resp){
				isFinalized =  true;
				wasWinner = true;
			}

			return {...state, board: board, isFinalized: isFinalized, wasWinner: wasWinner};
		case 'TOGGLE_MARK_DOUBT_SQUARE':
			board = state.board.clone();
			square = board.squares[action.payload.discovered[0]][action.payload.discovered[1]];

			square.toggleMarkFlagOrDoubt(board);

			return {...state, board: board}
		case 'PUT_TIME': 
			return {...state, time: action.payload.time}
		default: return state
	}
}
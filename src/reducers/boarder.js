let defaultState = {
	id: null,
	size: [null, null],
	numBombs: null,
	board: [],
	bombs: [],
	numDiscovered: 0,
	numFlagged: 0,
	numSurprise: 0,
	isStarted: false,
	isFinized: false,
	wasWinner: null
}

function createEmptyBoard(x, y){
	let board = [];

	for(let ix=0; ix<x;ix++){
		let rows = [];

		for (let iy=0; iy<y; iy++)
			rows[iy] = {
				value:0,
				isDiscovered: false,
				marked: -1
			}

		board[ix] = rows;
	}

	return board;
}

function getAround(x, y, bx, by){
	let around = [];

	for(let i = ((x === 0) ? x : x-1); i <= (x === bx-1 ? x : x+1); i++)
		for(let j = ((y === 0) ? y : y-1); j <= (y === by-1 ? y : y+1); j++)
			around.push([i,j]);

	return around;
}

function putBombs(board, bx, by, numBmbs, firstDiscoveredSquareX, firstDiscoveredSquareY){
	let bombs = [];

		// Put bombs
		for(let i=0; i<numBmbs; i++){
			let assigned = false;

			while(!assigned){
				let x = parseInt(Math.random() * bx, 10);
				let y = parseInt(Math.random() * by, 10);

				if(board[x][y].value !== 9 && ( x !== firstDiscoveredSquareX && y !== firstDiscoveredSquareY)){
					board[x][y].value = 9;
					bombs.push({
						'x': x,
						'y': y
					});
					assigned = true;
				}
			}
		}

		// Put numbers around
		for(let j=0;j<bombs.length; j++){
			let around = getAround(bombs[j].x, bombs[j].y, bx, by);
			for(let i=0; i<around.length; i++){

				let square = board[around[i][0]][around[i][1]];

				if(square.value !== 9)
					square.value++; 
			}
		}

	return bombs;
}

export default (state = defaultState, action) => {
	let board = null;
	let bombs = null;

	switch(action.type){
		case 'RESET':
			return defaultState;
		case 'NEW_GAME':
			return {...state,
				id: Math.floor(Math.random()*100000),
				size: [action.payload.boardX, action.payload.boardY],
				numBombs: action.payload.bombs,
				board: createEmptyBoard(action.payload.boardX, action.payload.boardY),
				bombs: [],
				numDiscovered: 0,
				numFlagged: 0,
				numSurprise: 0,
				isStarted: false,
				isFinized: false,
				wasWinner: null
			};
		case 'PUT_BOMBS':
			board = JSON.parse(JSON.stringify(state.board));
			bombs = putBombs(board, state.size[0], state.size[1], state.numBombs, action.payload.firstDiscovered[0], action.payload.firstDiscovered[1]);

			return {...state, board: board, bombs: bombs, isStarted: true};
		case 'DISCOVER_SQUARES':
			board = state.board;
			let pos = action.payload.firstDiscovered;

			board[pos[0]][pos[1]].isDiscovered = true;

			// Loop inside the board
			
			return {...state, board: board};
		case 'FINISH_AS_LOST':
			board = state.board;
			let pos_ = action.payload.exploitedBomb;

			board[pos_[0]][pos_[1]].isDiscovered = true;

			return {...state, isFinized: true, wasWinner: false}
		default: return state
	}
}
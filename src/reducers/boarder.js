let defaultState = {
	id: null,
	size: [null, null],
	numBombs: null,
	board: [],
	bombs: [],
	numDiscovered: 0,
	numFlagged: 0,
	time: null,
	isStarted: false,
	isFinalized: false,
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

function propagate(boarder, x, y){
	let around = getAround(x, y, boarder.size[0], boarder.size[1]);

	for(var i=0; i<around.length;i++)
		discover(boarder, around[i][0], around[i][1]);
}

function discover(boarder, x, y){
	let square = boarder.board[x][y];

	if(!square.isDiscovered){
		square.isDiscovered = true;

		boarder.numDiscovered++;

		if(square.value === 0)
			propagate(boarder, x, y);

		if(boarder.numDiscovered === (boarder.size[0]*boarder.size[1])-boarder.numBombs){
			boarder.isFinalized =  true;
			boarder.wasWinner = true;
		}
	}
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
				size: action.payload.size,
				numBombs: action.payload.bombs,
				board: createEmptyBoard(action.payload.size[0], action.payload.size[1]),
				bombs: [],
				numDiscovered: 0,
				numFlagged: 0,
				time: null,
				isStarted: false,
				isFinalized: false,
				wasWinner: null
			};
		case 'PUT_BOMBS':
			board = JSON.parse(JSON.stringify(state.board));
			bombs = putBombs(board, state.size[0], state.size[1], state.numBombs, action.payload.firstDiscovered[0], action.payload.firstDiscovered[1]);

			return {...state, board: board, bombs: bombs, time: 0, isStarted: true};
		case 'DISCOVER_SQUARE':
			let boarder = JSON.parse(JSON.stringify({ board: state.board, numDiscovered: state.numDiscovered, isFinalized: state.isFinalized, wasWinner: state.wasWinner, size: state.size, numBombs: state.numBombs }));
			let pos = action.payload.discovered;

			if(state.board[pos[0]][pos[1]].value === 9){
				boarder.board[pos[0]][pos[1]].isDiscovered = true;

				return {...state, isFinalized: true, wasWinner: false, board: boarder.board};
			}

			discover(boarder, pos[0], pos[1]);
			
			return {...state, board: boarder.board, numDiscovered: boarder.numDiscovered, isFinalized: boarder.isFinalized, wasWinner: boarder.wasWinner};
		case 'TOGGLE_MARK_DOUBT_SQUARE':
			board = JSON.parse(JSON.stringify(state.board));

			let sq = board[action.payload.discovered[0]][action.payload.discovered[1]];
			let numFlagged = state.numFlagged;

			if(sq.marked === -1) numFlagged++; else if(sq.marked === 0) numFlagged--;
			sq.marked = (sq.marked === 1) ? -1 : sq.marked+1;

			return {...state, board: board, numFlagged: numFlagged}
		case 'PUT_TIME': 
			return {...state, time: action.payload.time}
		default: return state
	}
}
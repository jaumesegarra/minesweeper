import Square from './Square';

function createEmptySquares(x, y){
	let squares = [];

	for(let ix=0; ix<x;ix++){
		let rows = [];

		for (let iy=0; iy<y; iy++)
			rows[iy] = new Square(ix, iy);

		squares[ix] = rows;
	}

	return squares;
};

export default class Board {

	constructor(size, numBombs, squares = null, numDiscovered = 0, numFlagged = 0){
		this.size = size;
		this.numBombs = numBombs;

		this.squares = (squares || createEmptySquares(size[0], size[1]));
		this.numDiscovered = numDiscovered;
		this.numFlagged = numFlagged;
	}

	putBombs(firstDiscoveredSquareX, firstDiscoveredSquareY){
		let bombsTmp = [];

		// Put bombs
		for(let i=0; i<this.numBombs; i++){
			let assigned = false;

			while(!assigned){
				let x = parseInt(Math.random() * this.size[0], 10);
				let y = parseInt(Math.random() * this.size[1], 10);

				let sq = this.squares[x][y];
				if(sq.value !== 9 && ( x !== firstDiscoveredSquareX && y !== firstDiscoveredSquareY)){
					sq.value = 9;
					bombsTmp.push(sq);
					assigned = true;
				}
			}
		}

		// Put numbers around
		bombsTmp.forEach(b => {
			let around = b.getAround(this.size[0], this.size[1]);

			for(let i=0; i<around.length; i++){
				let square = this.squares[around[i][0]][around[i][1]];

				if(square.value !== 9)
					square.value++; 
			}
		});
	}

	clone(){
		let squares = [];
		for(let ix=0; ix<this.size[0];ix++){
			let rows = [];

			for (let iy=0; iy<this.size[1]; iy++)	
				rows[iy] = this.squares[ix][iy].clone();

			squares[ix] = rows;
		}

		return new Board(this.size, this.numBombs, squares, this.numDiscovered, this.numFlagged);
	}
}
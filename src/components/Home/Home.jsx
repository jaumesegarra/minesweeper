import React from 'react'; 

import Menu from './Menu/Menu';
import Top from './Top/Top';

export default () => (
	<div className="home">
      	<Menu />
      	<Top />
      	<div className="instructions">
      		<h3>How to play:</h3>
			<p> The game is played by revealing squares of the grid by clicking or otherwise indicating each square. If a square containing a mine is revealed, the player loses the game.
				<br/><br/>
				If no mine is revealed, a digit is instead displayed in the square, indicating how many adjacent squares contain mines; if no mines are adjacent, the square becomes blank, and all adjacent squares will be recursively revealed. The player uses this information to deduce the contents of other squares, and may either safely reveal each square or mark the square as containing a mine.
				<br/><br/>
				A flag or a question mark may be placed in an unrevealed square (right clicking the square) to serve as an aid to logical deduction.
			</p>
			<a href="https://en.wikipedia.org/wiki/Minesweeper_(video_game)" target="_blank" rel="noopener noreferrer">according to wikipedia</a>
      	</div>
   	</div>
);
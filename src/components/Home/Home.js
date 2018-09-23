import React from 'react';
import './Home.scss';

import Menu from './Menu/Menu';
import Top from './Top/Top';

export default class Home extends React.PureComponent {

  render() {

    return (
      <div className="home">
      	<Menu />
      	<Top />
      	<div className="instructions">
      		<h3>Instructions:</h3>
			<p> Game consists in clearing all the squares of the board that don't have a mine.
				<br/><br/>
				Some squares have a number, this number indicates the mines around it. If a square has the number 3, it means that of the eight squares around it (if it isn't in a corner or edge) there are 3 mines and 5 without mines. If a square is found without a number, it indicates that none of the surrounding squares has a mine, empty squares are discovered automatically.
				<br/><br/>
				If a square with mine is discovered, the game is lost.
			</p>
      	</div>
      </div>
    );
  }
}
import React from 'react';
import './Menu.scss';

import PREDEFINED_LEVELS from '../../../levels';
import { GAME } from '../../../pages';

import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
	changePage: (route, params) =>
		dispatch({ type: "CHANGE_PAGE", payload: {route, params}}),
});

class Menu extends React.PureComponent {

	goToNewGame = (level) => {
		let gs = PREDEFINED_LEVELS[level];

		this.newGame(gs.boardX, gs.boardY, gs.bombs);
	}

	newGame = (x, y, bmbs) => {
		this.props.changePage(GAME, {
			boardX: x,
			boardY: y,
			bombs: bmbs
		});
	}

	render() {

	    return (
	      	<div className="menu">
		      	<h3>New game</h3>

				<p>Select your level on the game:</p>
				<button className="whiter" onClick={ () => this.goToNewGame(0)}>Beginner</button>	
				<button className="whiter" onClick={ () => this.goToNewGame(1)}>Professional</button>
				<button className="whiter" onClick={ () => this.goToNewGame(2)}>Expert</button>
			</div>
	    );
	}
}

export default connect(null, mapDispatchToProps)(Menu);
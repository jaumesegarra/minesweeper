import React from 'react';

import './Menu.scss';
import Template from './Menu.jsx';

import PREDEFINED_LEVELS from '../../../levels';
import { GAME } from '../../../pages';

import { changePage } from '../../../actions/pager';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
	changePage: (route, params) => dispatch(changePage(route, params)),
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

	render = () => Template(this.goToNewGame);
}

export default connect(null, mapDispatchToProps)(Menu);
import React from 'react';

import './Game.scss';
import Template from './Game.jsx';

import { connect } from 'react-redux';

const mapStateToProps = state => {
	return {
		page: state.pager
	}
}

const mapDispatchToProps = dispatch => ({
	newGame: (config) =>
		dispatch({ type: "NEW_GAME", payload: config})
});

class Game extends React.Component {

	shouldComponentUpdate(nextProps, nextState) {
		return false;
	}

	constructor(props) {
		super(props);

		this.props.newGame({
			boardX: this.props.page.params.boardX,
			boardY: this.props.page.params.boardY,
			bombs: this.props.page.params.bombs
		});
	}


  	render = () => Template();

}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
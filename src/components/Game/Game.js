import React from 'react';

import './Game.scss';
import Template from './Game.jsx';

import { connect } from 'react-redux';
import { newGame } from '../../actions/boarder';

const mapStateToProps = state => {
	return {
		page: state.pager
	}
}

const mapDispatchToProps = dispatch => ({
	newGame: (size, bombs) => dispatch(newGame(size, bombs))
});

class Game extends React.Component {

	shouldComponentUpdate(nextProps, nextState) {
		return false;
	}

	constructor(props) {
		super(props);

		this.props.newGame(
		    [this.props.page.params.boardX, this.props.page.params.boardY], 
		    this.props.page.params.bombs
		);
	}

  	render = () => Template();

}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
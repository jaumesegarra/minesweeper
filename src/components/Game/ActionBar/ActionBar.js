import React from 'react';

import './ActionBar.scss';
import Template from './ActionBar.jsx';

import { HOME } from '../../../pages';

import { connect } from 'react-redux';
import { changePage } from '../../../actions/pager';
import { resetGame, newGame } from '../../../actions/boarder';

const mapStateToProps = state => {
	return {
		boarder: state.boarder
	}
}

const mapDispatchToProps = dispatch => ({
	changePage: (route, params) => dispatch(changePage(route, params)),
	resetGame: () => dispatch(resetGame()),
	newGame: (size, bombs) => dispatch(newGame(size, bombs))
});

class ActionBar extends React.Component {

	shouldComponentUpdate = (nextProps, nextState) => {
		return nextProps.boarder.id !== this.props.boarder.id;
	}

	constructor(props){
		super(props);

		this.state = {};

		this.refLeaveModal = React.createRef();

		document.addEventListener('keydown', function(e) {
			e = (e || window.event);

			if (e.keyCode === 27 && this.refLeaveModal.current)
				this.leaveGame();
		}.bind(this), false);
	}

	leaveGameFunc = () => {
		if(this.props.boarder.isStarted)
			this.props.resetGame();
		this.props.changePage(HOME, null);
	}

	leaveGame = () => {
		if(this.props.boarder.isStarted && !this.props.boarder.isFinalized)
			this.refLeaveModal.current.show(this.leaveGameFunc);
		else this.leaveGameFunc();
	}

	refreshGame = () => {
		if(this.props.boarder.isStarted)
			this.props.newGame(this.props.boarder.board.size, this.props.boarder.board.numBombs);
	}

  	render = () => { 

  		return Template(this.refLeaveModal, this.leaveGame, this.refreshGame);
 	}

}

export default connect(mapStateToProps, mapDispatchToProps)(ActionBar);
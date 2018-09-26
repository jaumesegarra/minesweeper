import React from 'react';

import './ActionBar.scss';
import Template from './ActionBar.jsx';

import { HOME } from '../../../pages';

import { connect } from 'react-redux';

const mapStateToProps = state => {
	return {
		boarder: state.boarder
	}
}

const mapDispatchToProps = dispatch => ({
	changePage: (route, params) =>
		dispatch({ type: "CHANGE_PAGE", payload: {route, params}}),
	resetGame: () =>
		dispatch({ type: "RESET"}),
	newGame: (config) =>
		dispatch({ type: "NEW_GAME", payload: config})
});

class ActionBar extends React.Component {

	shouldComponentUpdate = (nextProps, nextState) => {
		return nextProps.boarder.id !== this.props.boarder.id;
	}

	constructor(props){
		super(props);

		this.state = {};

		this.refLeaveModal = React.createRef();
	}

	leaveGameFunc = () => {
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
			this.props.newGame({
				boardX: this.props.boarder.size[0],
				boardY: this.props.boarder.size[1],
				bombs: this.props.boarder.numBombs
			});
	}

  	render = () => { 

  		return Template(this.refLeaveModal, this.leaveGame, this.refreshGame);
 	}

}

export default connect(mapStateToProps, mapDispatchToProps)(ActionBar);
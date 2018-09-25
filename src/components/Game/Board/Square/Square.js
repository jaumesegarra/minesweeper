import React from 'react';

import './Square.scss';
import Template from './Square.jsx';

import { connect } from 'react-redux';

const mapStateToProps = state => {
	return {
		boarder: state.boarder
	}
}

const mapDispatchToProps = dispatch => ({
	putBombs: (position) =>
		dispatch({ type: "PUT_BOMBS", payload: {firstDiscovered: position}}),
	discoverSquare: (position) =>
		dispatch({ type: "DISCOVER_SQUARES", payload: {firstDiscovered: position}}),
	finishAsLost: (position) =>
		dispatch({ type: "FINISH_AS_LOST",  payload: {exploitedBomb: position}}),
});

class Square extends React.Component {
	
	/*shouldComponentUpdate(nextProps, nextState) {

		let current = this.props.boarder.board[this.props.pos[0]][this.props.pos[1]];
		let next = nextProps.boarder.board[this.props.pos[0]][this.props.pos[1]];

		return current.isDiscovered !== next.isDiscovered || current.value !== next.value || current.marked !== next.marked || nextProps.boarder.isStarted !== this.props.boarder.isStarted || nextProps.boarder.isFinized !== this.props.boarder.isFinized
	}*/

	click = () => {
		let data = this.props.boarder.board[this.props.pos[0]][this.props.pos[1]];

		if(!this.props.boarder.isStarted){
			this.props.putBombs(this.props.pos);
			// Start timer
			// Update emoticon state
		}

		if(!this.props.boarder.isFinized && data.marked === -1){
			if(data.value === 9){
				this.props.finishAsLost(this.props.pos);
			}else {
				this.props.discoverSquare(this.props.pos);

				// Check last square discovered
					// WIN!
			}
		}
	}

  	render = () => {
  		let data = this.props.boarder.board[this.props.pos[0]][this.props.pos[1]];

	    let classNames = require('classnames/bind');

	    let styles = {
	        'discovered': data.isDiscovered,
	        'red': data.isDiscovered && data.value === 9,
	        'bomb': this.props.boarder.isFinized && this.props.boarder.wasWinner === false && data.value === 9,
	        'noBomb': this.props.boarder.isFinized && this.props.boarder.wasWinner === false && data.value !== 9 && data.isMarked === 0,
	        'marked': data.marked === 0,
	        'doubt': data.marked === 1
	    };

	    if(data.isDiscovered && data.value > 0 && data.value < 9)
	    	styles['bmbs_'+(data.value < 3 ? data.value : 3)] = true;

	    var classes = classNames(styles);

  		return Template(data, classes, this.click);
  	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Square);
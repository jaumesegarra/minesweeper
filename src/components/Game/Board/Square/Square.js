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
		dispatch({ type: "DISCOVER_SQUARE", payload: {discovered: position}}),
	toggleMarkDoubtSquare: (position) =>
		dispatch({ type: "TOGGLE_MARK_DOUBT_SQUARE",  payload: {discovered: position}}),
});

class Square extends React.Component {
	
	shouldComponentUpdate(nextProps, nextState) {

		let current = this.props.boarder.board[this.props.pos[0]][this.props.pos[1]];
		let next = nextProps.boarder.board[this.props.pos[0]][this.props.pos[1]];

		return current.isDiscovered !== next.isDiscovered || current.value !== next.value || current.marked !== next.marked || nextProps.boarder.isStarted !== this.props.boarder.isStarted || nextProps.boarder.isFinalized !== this.props.boarder.isFinalized
	}

	click = () => {
		let data = this.props.boarder.board[this.props.pos[0]][this.props.pos[1]];

		if(!this.props.boarder.isStarted)
			this.props.putBombs(this.props.pos);

		if(!this.props.boarder.isFinalized && data.marked === -1)
				this.props.discoverSquare(this.props.pos);
	}

	rClick = (e) => {
		e.preventDefault();

		let data = this.props.boarder.board[this.props.pos[0]][this.props.pos[1]];

		if(this.props.boarder.isStarted && !this.props.boarder.isFinalized && !data.isDiscovered)
			this.props.toggleMarkDoubtSquare(this.props.pos);
	} 

  	render = () => {
  		let data = this.props.boarder.board[this.props.pos[0]][this.props.pos[1]];

	    let classNames = require('classnames/bind');

	    let styles = {
	        'discovered': data.isDiscovered,
	        'red': data.isDiscovered && data.value === 9,
	        'bomb': this.props.boarder.isFinalized && this.props.boarder.wasWinner === false && data.value === 9,
	        'noBomb': this.props.boarder.isFinalized && this.props.boarder.wasWinner === false && data.value !== 9 && data.marked === 0,
	        'marked': data.marked === 0,
	        'doubt': data.marked === 1
	    };

	    if(data.isDiscovered && data.value > 0 && data.value < 9)
	    	styles['bmbs_'+(data.value < 3 ? data.value : 3)] = true;

	    var classes = classNames(styles);

  		return Template(data, classes, this.click, this.rClick);
  	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Square);
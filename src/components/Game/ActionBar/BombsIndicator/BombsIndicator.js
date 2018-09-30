import React from 'react';

import './BombsIndicator.scss';
import Template from './BombsIndicator.jsx';

import { connect } from 'react-redux';

const mapStateToProps = state => {
	return {
		boarder: state.boarder
	}
}

class BombsIndicator extends React.Component {

	shouldComponentUpdate = (nextProps, nextState) => {
		return this.props.boarder.board.numFlagged !== nextProps.boarder.board.numFlagged || nextProps.boarder.board.numBombs !== this.props.boarder.board.numBombs;
	}

	render = () => { 
		let bmbs = this.props.boarder.board.numBombs - this.props.boarder.board.numFlagged;

  		return Template(bmbs);
 	}
}

export default connect(mapStateToProps)(BombsIndicator);
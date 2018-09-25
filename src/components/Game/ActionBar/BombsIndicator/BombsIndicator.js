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
		return nextProps.boarder.numBombs !== this.props.boarder.numBombs || nextProps.boarder.numFlagged !== this.props.boarder.numFlagged;
	}

	render = () => { 
		let bmbs = this.props.boarder.numBombs - this.props.boarder.numFlagged;

  		return Template(bmbs);
 	}
}

export default connect(mapStateToProps)(BombsIndicator);
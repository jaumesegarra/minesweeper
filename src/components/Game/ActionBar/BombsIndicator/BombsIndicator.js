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
		return this.props.boarder.numFlagged !== nextProps.boarder.numFlagged || nextProps.boarder.numBombs !== this.props.boarder.numBombs;
	}

	render = () => { 
		let bmbs = this.props.boarder.numBombs - this.props.boarder.numFlagged;

  		return Template(bmbs);
 	}
}

export default connect(mapStateToProps)(BombsIndicator);
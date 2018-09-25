import React from 'react';

import './Board.scss';
import Template from './Board.jsx';

import { connect } from 'react-redux';

const mapStateToProps = state => {
	return {
		boarder: state.boarder
	}
}

class Board extends React.Component {
	
	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.boarder.board.length !== this.props.boarder.board.length;
	}

  	render = () => Template(this.props.boarder.board);

}

export default connect(mapStateToProps)(Board);
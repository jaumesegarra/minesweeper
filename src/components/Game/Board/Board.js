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
		return nextProps.boarder.board.size !== this.props.boarder.board.size;
	}

  	render = () => Template(this.props.boarder.board.squares);

}

export default connect(mapStateToProps)(Board);
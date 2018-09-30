import React from 'react';

import './StatusBar.scss';
import Template from './StatusBar.jsx';

import { putScore } from '../../../actions/scoreboard';
import { connect } from 'react-redux';

const mapStateToProps = state => {
	return {
		boarder: state.boarder
	}
}

const mapDispatchToProps = dispatch => ({
	putScore: (user, boardSize, bombs, time) => dispatch(putScore(user, boardSize, bombs, time))
});

const STATES = [
	{
		"emoji": "happy",
		"text": "Start the game."
	},
	{
		"emoji": "happy",
		"text": "Surprise me..."
	},
	{
		"emoji": "lol",
		"text": "You win!"
	},
	{
		"emoji": "sad",
		"text": "You lost!"
	}
];

class StatusBar extends React.Component {
	
	constructor(props){
		super(props);

		this.refSaveScore = React.createRef();
	}

	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.boarder.isFinalized !== this.props.boarder.isFinalized || nextProps.boarder.isStarted !== this.props.boarder.isStarted;
	}

	saveScoreFunc = (username) => {
		this.props.putScore(username, this.props.boarder.board.size, this.props.boarder.board.numBombs, this.props.boarder.time);
	}

	componentDidUpdate(prevProps, prevState){		
		if(this.props.boarder.isFinalized && prevProps.boarder.isFinalized !== this.props.boarder.isFinalized && this.props.boarder.wasWinner)
			this.refSaveScore.current.show(this.saveScoreFunc);
	}

  	render = () => {
  		let stateNmbr = 0;
  		if(this.props.boarder.isStarted && !this.props.boarder.isFinalized)
  			stateNmbr = 1;
  		else if(this.props.boarder.isFinalized && this.props.boarder.wasWinner)
  			stateNmbr = 2;
  		else if(this.props.boarder.isFinalized && !this.props.boarder.wasWinner)
  			stateNmbr = 3;

  		return Template(STATES[stateNmbr], this.refSaveScore);
  	}	
}

export default connect(mapStateToProps, mapDispatchToProps)(StatusBar);
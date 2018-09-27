import React from 'react';

import './StatusBar.scss';
import Template from './StatusBar.jsx';

import { connect } from 'react-redux';

const mapStateToProps = state => {
	return {
		boarder: state.boarder
	}
}

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
	
	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.boarder.isFinalized !== this.props.boarder.isFinalized || nextProps.boarder.isStarted !== this.props.boarder.isStarted;
	}

	componentDidUpdate(prevProps, prevState){
		if(this.props.boarder.isFinalized && prevProps.boarder.isFinalized !== this.props.boarder.isFinalized && this.props.boarder.wasWinner)
			console.log("YOU WIN!!");// Show modal registry the win
	}

  	render = () => {
  		let stateNmbr = 0;
  		if(this.props.boarder.isStarted && !this.props.boarder.isFinalized)
  			stateNmbr = 1;
  		else if(this.props.boarder.isFinalized && this.props.boarder.wasWinner)
  			stateNmbr = 2;
  		else if(this.props.boarder.isFinalized && !this.props.boarder.wasWinner)
  			stateNmbr = 3;

  		return Template(STATES[stateNmbr]);
  	}	
}

export default connect(mapStateToProps)(StatusBar);
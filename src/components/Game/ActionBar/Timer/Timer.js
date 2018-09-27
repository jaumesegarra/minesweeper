import React from 'react';

import './Timer.scss';
import Template from './Timer.jsx';

import { connect } from 'react-redux';
import moment from 'moment'

const mapStateToProps = state => {
	return {
		boarder: state.boarder
	}
}

const mapDispatchToProps = dispatch => ({
	putTime: (time) =>
	dispatch({ type: "PUT_TIME", payload: {time: time}})
});

class Timer extends React.Component {

	shouldComponentUpdate = (nextProps, nextState) => {
		return nextProps.boarder.id !== this.props.boarder.id || nextProps.boarder.time !== this.props.boarder.time || nextProps.boarder.isFinalized !== this.props.boarder.isFinalized || this.state.time !== nextState.time;
	}

	constructor(props){
		super(props);

		this.state = {
			time: "00:00"
		};
		this.startTime = null;
		this.interval = null;
		this.isUnmounted = false;
	}

	getDiffToCurrent(){
		return moment.duration(moment().diff(this.startTime));
	}

	addSecondToTime(){
		let diff = this.getDiffToCurrent();

		let minutes = diff.minutes();
		let seconds = diff._data.seconds;

		let time = (minutes < 10 ? "0"+minutes : minutes) + 
			":" + 
			(seconds < 10 ? "0"+seconds : seconds);

		if(!this.isUnmounted)
			this.setState({time: time});
		else clearInterval(this.interval);
	}

	componentWillUnmount() {
    	this.isUnmounted = true;
	}

	componentDidUpdate(prevProps, prevState){

		if(prevProps.boarder.time === null && this.props.boarder.time === 0){
			this.startTime = moment();
			this.interval = setInterval(() => this.addSecondToTime(), 1000);
		}
		else if(this.props.boarder.id !== prevProps.boarder.id || (this.props.boarder.isFinalized !== prevProps.boarder.isFinalized && this.props.boarder.isFinalized)){
			clearInterval(this.interval);

			if(this.props.boarder.id !== prevProps.boarder.id)
				this.setState({time: "00:00"});
			
			if(this.props.boarder.isFinalized)
				this.props.putTime(this.getDiffToCurrent().asSeconds());
		}
	}

	render = () => { 

		return Template(this.state.time);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
import React from 'react';

import Modal from '../../../Modal';

class LeaveGameModal extends Modal {
	
	constructor(props) {
		super(props);

		this.state = {...super.state, 
			execFunc: null
		};
	}

	leaveGame = () => {
		if(this.state.execFunc)
			this.state.execFunc();

		this.hide();
	}

	show = (func) => {
		this.setState({show: true, execFunc: func});
	}

	renderContent() {
		return (
		    <div>
			    <h3>Are you sure you wanna leave this game?</h3>
				<div className="buttons-group">
					<button onClick={this.hide}>No</button>
					<button className="red" onClick={this.leaveGame}>Yes</button>
				</div>
			</div>
		);
	}

}

export default LeaveGameModal;
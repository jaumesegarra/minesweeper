import React from 'react';

import Modal from '../../../Modal';
import './SaveScoreModal.scss';

class SaveScoreModal extends Modal {
	constructor(props) {
		super(props);

		this.state = {...super.state, 
			username: '',
			lastUsernameSaved: (localStorage.getItem("lastUser") || ''),
			execFunc: null
		};

		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}

	show = (func) => {
		this.setState({show: true, execFunc: func});
	}

	handleChange = (e) => {
	    this.setState({username: e.target.value});
	}

	handleSubmit = (e) => {
	    e.preventDefault();

	    if(this.state.lastUsernameSaved !== "" || this.state.username.trim() !== ""){
	    	let username = this.state.lastUsernameSaved;
	    	if(this.state.username.trim() !== "")
	    		username = this.state.username;

	    	this.state.execFunc(username);

	    	localStorage.setItem("lastUser", username);
	    	
	    	this.hide();
		}
	}

	renderContent() {
		return (
		    <div className="saveScoreModal">
			    <h3>Congratulations!</h3>
			    <p>You won the game. What's your name?</p>
			    <form onSubmit={this.handleSubmit}>
					<input type="text" placeholder={this.state.lastUsernameSaved} value={this.state.username} onChange={this.handleChange}/>
					<button type="submit" className="button">Save</button>
				</form>
			</div>
		);
	}
}

export default SaveScoreModal;
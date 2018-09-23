import React from 'react';
import './App.scss';

import { connect } from 'react-redux';
import { HOME, GAME } from './pages';

import Home from './components/Home/Home';
import Game from './components/Game/Game';

const mapStateToProps = state => {
	return {
		page: state.pager
	}
}

class App extends React.PureComponent {
	constructor(props){
		super(props);

		this.state = {

		}
	}

	render() {
	    return (
	    	<div>
		    	{ this.props.page.route === HOME &&
		      		<Home />
		    	}

		    	{ this.props.page.route === GAME &&
		      		<Game />
		    	}
	    	</div>
	    );
	}
}

export default connect(mapStateToProps)(App);
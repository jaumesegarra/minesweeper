import React from 'react';

import './App.scss';
import Template from './App.jsx';

import { connect } from 'react-redux';

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

	render = () => Template(this.props.page.route);
}

export default connect(mapStateToProps)(App);
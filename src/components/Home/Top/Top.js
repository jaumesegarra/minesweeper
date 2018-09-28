import React from 'react';

import './Top.scss';
import Template from './Top.jsx';

import { connect } from 'react-redux';

const mapStateToProps = state => {
	return {
		scores: state.scoreboard.scores
	}
}

class Top extends React.PureComponent {

  render = () => Template(this.props.scores);

}

export default connect(mapStateToProps)(Top);
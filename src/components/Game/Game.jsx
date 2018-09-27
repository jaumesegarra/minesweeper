import React from 'react'; 

import ActionBar from './ActionBar/ActionBar';
import Board from './Board/Board';
import StatusBar from './StatusBar/StatusBar';

export default () => (
	<div className="game">
      	<div className="content">      	
      		<ActionBar />
      		<Board />
      		<StatusBar />
      	</div>
    </div>
);
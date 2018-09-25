import React from 'react'; 

import ActionBar from './ActionBar/ActionBar';
import Board from './Board/Board';

export default () => (
	<div className="game">
      	<div className="content">      	
      		<ActionBar />
      		<Board />
      	</div>
    </div>
);
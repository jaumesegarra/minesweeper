import React from 'react'; 

import LeaveGameModal from './LeaveGameModal/LeaveGameModal';
import Timer from './Timer/Timer';
import BombsIndicator from './BombsIndicator/BombsIndicator';

export default (refLeaveModal, leaveGame, refreshGame) => (
	<div className="actionBar">
		<Timer />
		
      	<button onClick={refreshGame}>Restart</button>
      	<button className="red" onClick={leaveGame}>Leave</button>

      	<BombsIndicator />
      	
      	<LeaveGameModal ref={refLeaveModal}/>
    </div>
);
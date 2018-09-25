import React from 'react'; 

import LeaveGameModal from './LeaveGameModal/LeaveGameModal';
import BombsIndicator from './BombsIndicator/BombsIndicator';

export default (refLeaveModal, leaveGame, refreshGame) => (
	<div className="actionBar">
      	<button onClick={refreshGame}>Restart</button>
      	<button className="red" onClick={leaveGame}>Leave</button>

      	<BombsIndicator />
      	
      	<LeaveGameModal ref={refLeaveModal}/>
    </div>
);
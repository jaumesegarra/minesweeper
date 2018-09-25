import React from 'react'; 

import Square from './Square/Square';

export default (board) => (
	<table border="0" className="board">
		<tbody>
      	{
      		board.map((bx, xind) => 
      		    (<tr key={xind}>
      		     	{
      		     		bx.map((by, yind) => (
      		     			<Square key={xind+yind} pos={[xind, yind]} value={by}/>
      		     		))
      		     	}
      		     </tr>))
      	}
      	</tbody>
    </table>
);
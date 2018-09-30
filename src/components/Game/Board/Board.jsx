import React from 'react'; 

import Square from './Square/Square';

export default (squares) => (
	<table border="0" className="board">
		<tbody>
      	{
      		squares.map((bx, xind) => 
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
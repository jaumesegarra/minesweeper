import React from 'react'; 

export default (scores) => (
	<div className="top">
      	<h3>Top won games:</h3>
      	{scores.length === 0 && (
      		<p>No scores registered yet.</p>
      	)}

      	<div className="scores">
	      	<ul>
	      	{
	      		scores.map((sc, index) => (
	      		    <li key={index}>
	      		    	<div className="user">
	      		    		{sc.user}
	      		    	</div>
	      		    	<div className="score">
	      		    		{Math.floor(sc.obtainScoreNumber)} <span>points</span>
	      		    	</div>
	      		    	<div className="boardDetails">
	      		    		{`${sc.boardSize[0]} x ${sc.boardSize[1]} (${sc.bombs} bombs) in ${sc.timeString}`}
	      		    	</div>
	      		    </li>
	      		))
	      	}
	      	</ul>
      	</div>
	</div>
);
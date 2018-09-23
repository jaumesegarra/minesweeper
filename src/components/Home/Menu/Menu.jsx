import React from 'react'; 

export default (goToNewGame) => (
	<div className="menu">
		<h3>New game</h3>

		<p>Select your level on the game:</p>
		<button className="whiter" onClick={ () => goToNewGame(0)}>Beginner</button>	
		<button className="whiter" onClick={ () => goToNewGame(1)}>Professional</button>
		<button className="whiter" onClick={ () => goToNewGame(2)}>Expert</button>
	</div>
);
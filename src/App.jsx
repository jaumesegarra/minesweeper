import React from 'react'; 

import { HOME, GAME } from './pages';

import Home from './components/Home/Home';
import Game from './components/Game/Game';

export default (route) => (
	<div>
		{ route === HOME &&
		    <Home />
		}

		{ route === GAME &&
		    <Game />
		}
	</div>
);
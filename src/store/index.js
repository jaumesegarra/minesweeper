import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers/index';


const saveToLocalstorageMiddleware = store => next => action => {
	next(action);
  	
  	if(action.type !== 'PUT_SCORE') return;
  	
  	let topList = store.getState().scoreboard.scores;
  	localStorage.setItem("scores", JSON.stringify(topList));
}

const store = createStore(
    reducers,
    applyMiddleware(saveToLocalstorageMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
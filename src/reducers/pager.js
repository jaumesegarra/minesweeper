import { HOME } from '../pages';

let defaultState = {
	route: HOME,
	params: null
}

export default (state = defaultState, action) => {
	switch(action.type){
		case 'CHANGE_PAGE': 
		return {...state, route: action.payload.route, params: action.payload.params}
		default: return state
	}
}
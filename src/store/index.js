
import {createStore} from 'redux';

const initialState = {
	repos: [],
	inputValue:'hi'
};

const reducer = (state = initialState, action) =>{
	console.log('reducer', action);

	switch (action.type){
		case 'SEARCH_INPUT_CHANGE':
			return Object.assign({}, state, {searchInputValue: action.value })

		default: 
			return state;
	}	
}

const store = createStore(reducer);

export default store;
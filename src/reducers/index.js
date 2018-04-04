import { combineReducers } from 'redux';

import { DATA_AVAILABLE, NAME_CHANGED } from "../constants"

let initialState = {
    name: '',
    cocktails: [],
    loading:true
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case NAME_CHANGED:
            return {
                ...state,
                name: action.name
            };

        case DATA_AVAILABLE:
            return {
                ...state,
                cocktails: action.data,
                loading: false
            };

        default:
            return state;
    }
};

const rootReducer = combineReducers({
    dataReducer,
    //etc
});

export default rootReducer;
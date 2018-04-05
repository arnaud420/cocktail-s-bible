import { combineReducers } from 'redux';

import { GET_COCKTAILS, GET_COCKTAIL, NAME_CHANGED,
    SET_ID, SEARCH_FILTER, GET_LIST_FILTERED } from "../constants"

let initialState = {
    filter: {
        'filterType': '',
        'filterParam': ''
    },
    listCategories: [],
    name: '',
    cocktails: [],
    loading:true,
    cocktailId: '',
    cocktail: []
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case NAME_CHANGED:
            return {
                ...state,
                name: action.name
            };

        case SEARCH_FILTER:
            return {
                ...state,
                filter: action.filter
            };

        case GET_LIST_FILTERED:
            return {
                ...state,
                listCategories: action.data
            };

        case SET_ID:
            return {
                ...state,
                cocktailId: action.cocktailId
            };

        case GET_COCKTAILS:
            return {
                ...state,
                cocktails: action.data,
                loading: false
            };

        case GET_COCKTAIL:
            return {
                ...state,
                cocktail: action.data
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
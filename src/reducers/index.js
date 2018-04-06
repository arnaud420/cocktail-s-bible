import { combineReducers } from 'redux';

import {
    GET_COCKTAILS, GET_COCKTAIL,
    SEARCH_FILTER, GET_LIST_FILTERED,
    GET_RANDOM_COCKTAIL
} from "../constants"

let initialState = {
    filter: {},
    listCategories: [],
    randomCocktail: {},
    cocktails: [],
    loading:true,
    cocktail: []
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {

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

        case GET_RANDOM_COCKTAIL:
            return {
                ...state,
                randomCocktail: action.data
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
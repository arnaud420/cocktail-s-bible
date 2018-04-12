import { combineReducers } from 'redux';

import {
    GET_COCKTAILS, GET_COCKTAIL,
    SEARCH_FILTER, GET_LIST_FILTERED,
    GET_RANDOM_COCKTAIL, GET_COCKTAILS_LOADING,
    GET_COCKTAILS_ERRORS
} from "../constants"

let initialState = {
    filter: {},
    listCategories: [],
    cocktails: [],
    loading: false,
    cocktail: [],
    errors: []
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

        case GET_COCKTAILS_LOADING:
            return {
                ...state,
                loading: true
            };

        case GET_COCKTAILS:
            return {
                ...state,
                cocktails: action.data,
                loading: false
            };

        case GET_COCKTAILS_ERRORS:
            return {
                ...state,
                errors: action.errors
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

const randomReducer = (state = { randomCocktail: {} }, action) => {
    switch (action.type) {
        case GET_RANDOM_COCKTAIL:
            return {
                ...state,
                randomCocktail: action.data
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    dataReducer,
    randomReducer
});

export default rootReducer;
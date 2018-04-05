import axios from 'axios';
import {GET_COCKTAILS, NAME_CHANGED, GET_COCKTAIL,
    SET_ID, SEARCH_FILTER, GET_LIST_FILTERED } from "../constants";

const url = "https://www.thecocktaildb.com/api/json/v1/1/";

export const changeCocktail = (name) => {
    return {
        type: NAME_CHANGED,
        name
    }
};

export const searchFilter = (filterType, filterParam) => {
    return (dispatch) => {
        dispatch({
            type: SEARCH_FILTER,
            filter: {
                filterType,
                filterParam
            }
        })
    }
};

export const setId = (cocktailId) => {
    return {
        type: SET_ID,
        cocktailId
    }
};

export const getListCocktails = (filterType, filterParam) => {
    return (dispatch) => {
        //let ingredients = [];
        axios.get(`${url}${filterType}${filterParam}`)
            .then( (res) => {
                const listCategories = res.data;
                dispatch({type: GET_LIST_FILTERED, data: listCategories})
                /*const listCategories = res.data.drinks;

                Object.keys(listCategories).forEach( (key) => {
                    let ingredient = listCategories[key].strIngredient1;
                    ingredients.push(ingredient)
                });
                console.log(ingredients)*/
            })
            .catch( (err) => console.error(err.message));
    }
};

export const getCocktails = (name, category) => {
    return (dispatch) => {
        axios.get(`${url}filter.php?${category}=${name}`)
            .then( (res) => {
                const cocktails = res.data;
                dispatch({type: GET_COCKTAILS, data: cocktails})
            })
            .catch( (err) => console.error(err.message));
    };
};

export const getCocktail = (id) => {
    return (dispatch) => {
        axios.get(`${url}lookup.php?i=${id}`)
            .then( (res) => {
                const cocktail = res.data;
                console.log(cocktail);
                dispatch({type: GET_COCKTAIL, data: cocktail})
            })
            .catch( (err) => console.error(err.message));
    }
};
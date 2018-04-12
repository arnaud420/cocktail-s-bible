import axios from 'axios';
import {
    GET_COCKTAILS, GET_COCKTAIL,
    SEARCH_FILTER, GET_LIST_FILTERED,
    GET_RANDOM_COCKTAIL, GET_COCKTAILS_LOADING, GET_COCKTAILS_ERRORS
} from "../constants";

const url = "https://www.thecocktaildb.com/api/json/v1/1/";

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

export const getListCocktails = (filterType, filterParam) => {
    return (dispatch) => {
        let ingredients = [];
        let categories = [];

        axios.get(`${url}${filterType}${filterParam}`)
            .then( (res) => {
                const listCategories = res.data.drinks;

                if (filterParam === '?i=list') {
                    Object.keys(listCategories).forEach( (key) => {
                        let ingredient = listCategories[key].strIngredient1;
                        ingredients.push(ingredient)
                    });
                    dispatch({type: GET_LIST_FILTERED, data: ingredients.sort()})
                }
                else {
                    Object.keys(listCategories).forEach( (key) => {
                        let categorie = listCategories[key].strCategory;
                        categories.push(categorie)
                    });
                    dispatch({ type: GET_LIST_FILTERED, data: categories.sort() })
                }
            })
            .catch( (err) => console.error(err.message));
    }
};

export const getCocktails = (name, category) => {
    return (dispatch) => {

        dispatch({type: GET_COCKTAILS_LOADING});

        axios.get(`${url}filter.php?${category}=${name}`)
            .then( (res) => {
                const cocktails = res.data;
                dispatch({ type: GET_COCKTAILS, data: cocktails })
            })
            //.catch( (err) => console.error(err.message));
            .catch( (err) => {
                dispatch({ type: GET_COCKTAILS_ERRORS, errors: err.message })
            })
    };
};

export const getRandomCocktail = () => {
    return (dispatch) => {
        axios.get(`${url}random.php`)
            .then( (res) => {
                const randomCocktail = {
                    id: res.data.drinks[0].idDrink,
                    title: res.data.drinks[0].strDrink,
                    img: res.data.drinks[0].strDrinkThumb
                };
                dispatch({ type: GET_RANDOM_COCKTAIL, data:randomCocktail })
            } )
    }
};

export const getCocktail = (id) => {
    return (dispatch) => {
        axios.get(`${url}lookup.php?i=${id}`)
            .then( (res) => {
                const cocktail = res.data;
                console.log(cocktail);
                dispatch({ type: GET_COCKTAIL, data: cocktail })
            })
            .catch( (err) => console.error(err.message));
    }
};
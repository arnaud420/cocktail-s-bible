import axios from 'axios';
import {
    GET_COCKTAILS, GET_COCKTAIL,
    SEARCH_FILTER, GET_LIST_FILTERED,
    GET_RANDOM_COCKTAIL
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

export const getRandomCocktail = () => {
    return (dispatch) => {
        axios.get(`${url}random.php`)
            .then( (res) => {
                const randomCocktail = {
                    id: res.data.drinks[0].idDrink,
                    title: res.data.drinks[0].strDrink,
                    img: res.data.drinks[0].strDrinkThumb
                };
                dispatch({type: GET_RANDOM_COCKTAIL, data:randomCocktail})
            } )
    }
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
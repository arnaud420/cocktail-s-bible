import axios from 'axios';
import { DATA_AVAILABLE, NAME_CHANGED } from "../constants";

const url = "https://www.thecocktaildb.com/api/json/v1/1/";

export const changeCocktail = (name) => {
    return {
        type: NAME_CHANGED,
        name
    }
};

export const getCocktails = (name) => {
    return (dispatch) => {
        axios.get(`${url}search.php?s=${name}`)
            .then( (res) => {
                const cocktails = res.data;
                console.log(cocktails);
                dispatch({type: DATA_AVAILABLE, data: cocktails, name})
            })
            .catch( (err) => console.error(err.message));
    };
};
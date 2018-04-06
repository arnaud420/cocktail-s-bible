import {StackNavigator} from "react-navigation";
import ListCocktails from "../components/ListCocktails";
import Cocktail from '../components/Cocktail';
import Home from '../components/Home';
import ListCategories from'../components/ListCategories'

export const RootStack = StackNavigator({
    Home: {
        screen: Home
    },
    ListCategories: {
        screen: ListCategories
    },
    ListCocktails: {
        screen: ListCocktails
    },
    Cocktail: {
        screen: Cocktail
    }
});

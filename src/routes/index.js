import {StackNavigator} from "react-navigation";
import SearchCocktail from '../components/SearchCocktail'
import ListCocktails from "../components/ListCocktails";

export const RootStack = StackNavigator({
    Search: {
        screen: SearchCocktail,
    },
    ListCocktails: {
        screen: ListCocktails
    }
});

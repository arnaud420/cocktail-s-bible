import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import ListCocktails from './src/components/ListCocktails'
import SearchCocktail from './src/components/SearchCocktail'

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <SearchCocktail/>
            </Provider>
        );
    }
}
console.log(store.getState())
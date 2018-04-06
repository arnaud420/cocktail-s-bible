import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    Image
} from 'react-native';
import { connect } from 'react-redux';
import { getCocktail } from "../actions";

class Cocktail extends Component {

    static navigationOptions = {
        title: "Cocktail"
    };

    render() {
        return (
            <View>
                <Text>Cocktail</Text>
                <FlatList
                    data={this.props.cocktail.drinks}
                    renderItem={({item}) => (
                        <Text>{item.strDrink}, {item.strGlass} {item.strInstructions} {item.strIngredient1}</Text>
                    )}
                    keyExtractor={(item, index) => index}
                />
            </View>
        )
    }
}

const mapStateToProps = ({ dataReducer }) => {
    return {
        cocktail: dataReducer.cocktail,
        cocktailId: dataReducer.cocktailId
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCocktail: (id) => dispatch(getCocktail(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Cocktail);
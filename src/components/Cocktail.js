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
            <View style={styles.container}>
                <FlatList
                    data={this.props.cocktail.drinks}
                    renderItem={({item}) => (
                        this.renderItem({item})
                    )}
                    keyExtractor={(item, index) => index}
                />
            </View>
        )
    }

    renderItem({item}) {
        return (
            <View>
                <Text style={styles.title}>{item.strDrink}</Text>
                <Image
                    style={styles.img}
                    source={{uri: item.strDrinkThumb}}
                />
                <Text style={styles.subtitle}>Ingredients :</Text>

                <View style={styles.ingredientList}>
                    <Text style={styles.ingredientText}>{item.strMeasure1} {item.strIngredient1}</Text>
                    {item.strIngredient2 != null && item.strIngredient2.length ? <Text style={styles.ingredientText}>{item.strMeasure2} {item.strIngredient2}</Text> : null}
                    {item.strIngredient3 != null && item.strIngredient3.length ? <Text style={styles.ingredientText}>{item.strMeasure3} {item.strIngredient3}</Text> : null}
                    {item.strIngredient4 != null && item.strIngredient4.length ? <Text style={styles.ingredientText}>{item.strMeasure5} {item.strIngredient4}</Text> : null}
                    {item.strIngredient5 != null && item.strIngredient5.length ? <Text style={styles.ingredientText}>{item.strMeasure5} {item.strIngredient5}</Text> : null}
                    {item.strIngredient6 != null && item.strIngredient6.length ? <Text style={styles.ingredientText}>{item.strMeasure6} {item.strIngredient6}</Text> : null}
                    {item.strIngredient7 != null && item.strIngredient7.length ? <Text style={styles.ingredientText}>{item.strMeasure7} {item.strIngredient7}</Text> : null}
                    {item.strIngredient8 != null && item.strIngredient8.length ? <Text style={styles.ingredientText}>{item.strMeasure8} {item.strIngredient8}</Text> : null}
                    {item.strIngredient9 != null && item.strIngredient9.length ? <Text style={styles.ingredientText}>{item.strMeasure9} {item.strIngredient9}</Text> : null}
                    {item.strIngredient10 != null && item.strIngredient10.length ? <Text style={styles.ingredientText}>{item.strMeasure10} {item.strIngredient10}</Text> : null}
                    {item.strIngredient11 != null && item.strIngredient11.length ? <Text style={styles.ingredientText}>{item.strMeasure11} {item.strIngredient11}</Text> : null}
                    {item.strIngredient12 != null && item.strIngredient12.length ? <Text style={styles.ingredientText}>{item.strMeasure12} {item.strIngredient12}</Text> : null}
                    {item.strIngredient13 != null && item.strIngredient13.length ? <Text style={styles.ingredientText}>{item.strMeasure13} {item.strIngredient13}</Text> : null}
                    {item.strIngredient14 != null && item.strIngredient14.length ? <Text style={styles.ingredientText}>{item.strMeasure14} {item.strIngredient14}</Text> : null}
                    {item.strIngredient15 != null && item.strIngredient15.length ? <Text style={styles.ingredientText}>{item.strMeasure15} {item.strIngredient15}</Text> : null}
                </View>

                <Text style={styles.subtitle}>Recipe :</Text>

                <Text style={styles.ingredientList}>{item.strInstructions}</Text>

                <Text>Serve in {item.strGlass}. </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10
    },
    title: {
        textAlign: 'center',
        padding: 10,
        fontSize: 20,
        borderColor: "black",
        fontWeight: 'bold'
    },
    subtitle: {
        marginTop: 5,
        textAlign: 'left',
        textDecorationLine: 'underline',
        fontSize: 17,
        borderColor: "black",
    },
    img: {
        height: 300,
        width: '100%'
    },
    ingredientList: {
        marginTop: 10,
        marginBottom: 10,
    },
    ingredientText: {
        fontWeight: 'bold',
        marginTop: 3,
        marginBottom: 3
    }
});

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
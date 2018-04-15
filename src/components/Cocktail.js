import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    Image,
    Animated,
    Easing
} from 'react-native';
import { connect } from 'react-redux';

class Cocktail extends Component {

    static navigationOptions = {
        title: "Cocktail"
    };

    fadeAnimation = new Animated.Value(0);

    componentDidMount() {
        const anim = Animated.timing(this.fadeAnimation, {
            toValue: 1,
            easing: Easing.back(),
            duration: 650,
        });
        anim.start();
    }

    render() {
        return (
            <Animated.View style={[
                styles.container,
                { opacity: this.fadeAnimation }
            ]}>
                <FlatList
                    data={this.props.cocktail.drinks}
                    renderItem={({item}) => (
                        this.renderItem({item})
                    )}
                    keyExtractor={(item, index) => index}
                />
            </Animated.View>
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

                <View style={styles.bgWhite}>
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

                <View style={styles.bgWhite}>
                    <Text>{item.strInstructions}</Text>
                    <Text>Serve in {item.strGlass}. </Text>
                </View>
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
        fontSize: 23,
        color: '#007ac1',
        fontWeight: 'bold'
    },
    subtitle: {
        marginTop: 5,
        textAlign: 'left',
        textDecorationLine: 'underline',
        fontSize: 17,
        color: '#03a9f4'
    },
    img: {
        height: 300,
        width: '100%'
    },
    ingredientText: {
        fontWeight: 'bold',
        marginTop: 3,
        marginBottom: 3
    },
    bgWhite: {
        backgroundColor: 'white',
        padding: 10,
        marginTop: 5,
        marginBottom: 5,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: .5,
        shadowRadius: .5,
        borderRadius: .5
    }
});

const mapStateToProps = ({ dataReducer }) => {
    return {
        cocktail: dataReducer.cocktail,
    }
};

export default connect(mapStateToProps, null)(Cocktail);
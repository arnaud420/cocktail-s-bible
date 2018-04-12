import React, { Component } from 'react';
import {
    StyleSheet,
    Button,
    View,
    Text,
    Image
} from 'react-native';
import store from '../store'
import { connect } from 'react-redux';
import { searchFilter, getRandomCocktail, getCocktail } from '../actions'

class Home extends Component {

    static navigationOptions = {
        title: "Cocktail's Bible",
    };

    componentDidMount() {
        this.props.getRandomCocktail();
    }

    goToCocktail() {
        this.props.navigation.navigate('Cocktail');
        this.props.getCocktail(this.props.randomCocktail.id);
    }

    getCategoriesList() {
        this.props.navigation.navigate('ListCategories');
        this.props.searchFilter('list.php', '?c=list');
    }

    getIngredientsList() {
        this.props.navigation.navigate('ListCategories');
        this.props.searchFilter('list.php', '?i=list');
    }

    getNewRandomCocktail() {
        this.props.getRandomCocktail()
    }

    render() {

        return (
            <View>
                <View>
                    <Image
                        style={styles.img}
                        source={{uri: this.props.randomCocktail.img}}
                    />
                    <Text style={styles.title}>{this.props.randomCocktail.title}</Text>
                    <View style={styles.buttonsView}>
                        <Button
                            title={"Drink now !"}
                            onPress={ () => this.goToCocktail() }
                        />
                        <Button
                            title={"Get an other !"}
                            onPress={ () => this.getNewRandomCocktail() }
                        />
                    </View>
                </View>

                <View>
                    <Text>I want a specific ingredient !</Text>
                    <Button
                        title={"Go"}
                        onPress={ () => this.getIngredientsList() }
                    />
                </View>
                <View>
                    <Text>I don't know give me categories list !</Text>
                    <Button
                        title={"Go"}
                        onPress={ () => this.getCategoriesList() }
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        padding: '5%',
        fontSize: 20,
        fontWeight: 'bold'
    },
    img: {
        width: '100%',
        height: 350
    },
    buttonsView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: '10%'
    },
});

const mapStateToProps = ({ dataReducer, randomReducer }) => {
    return {
        randomCocktail: randomReducer.randomCocktail,
        filter: dataReducer.filter
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        searchFilter: (filterType, filterParam) => dispatch(searchFilter(filterType, filterParam)),
        getRandomCocktail: () => dispatch(getRandomCocktail()),
        getCocktail: (id) => dispatch(getCocktail(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
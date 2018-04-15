import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
    FlatList,
    TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';
import {getCocktails, getListCocktails} from '../actions'

class ListCategories extends Component {

    static navigationOptions = {
        title: "Categorie"
    };

    componentDidMount() {
        this.props.getListCocktails(
            this.props.filter.filterType,
            this.props.filter.filterParam
            );
    }

    getCocktailsByIngredients(item) {
        this.props.navigation.navigate('ListCocktails');
        this.props.getCocktails(item, 'i');
    }

    getCocktailsByCategories(item) {
        this.props.navigation.navigate('ListCocktails');
        this.props.getCocktails(item, 'c');
    }

    render() {

        if (this.props.filter.filterParam === '?i=list') {
            return (
                <View style={styles.container}>
                    <FlatList
                        data={this.props.listCategories}
                        renderItem={({item}) => (
                            this.renderIngredientsItem({item})
                        )}
                        numColumns={3}
                        keyExtractor={(item, index) => index}/>
                </View>
            )
        }
        else {
            return (
                <View>
                    <FlatList
                        data={this.props.listCategories}
                        renderItem={({item}) => (
                            this.renderCategoriesItem({item})
                        )}
                        numColumns={2}
                        keyExtractor={(item, index) => index}/>
                </View>
            )
        }
    }

    renderIngredientsItem({item}) {
        return (
            <View style={styles.ingredientContainer}>
                <TouchableHighlight
                    onPress={ () => this.getCocktailsByIngredients(item) }
                >
                    <Image
                        style={{width: 100, height: 100}}
                        source={{uri: `https://www.thecocktaildb.com/images/ingredients/${item}-Small.png`}}
                    />
                </TouchableHighlight>
                    <Text>{item}</Text>
            </View>
        )
    };

    renderCategoriesItem({item}) {
        return (
            <View style={styles.categoryContainer}>
                <TouchableHighlight
                    onPress={ () => this.getCocktailsByCategories(item) }
                >
                    <View>
                        <Text style={styles.title}>{item}</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'stretch'
    },
    ingredientContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    categoryContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        margin: 5,
        backgroundColor: '#03a9f4'
    },
    title: {
        fontSize: 17,
        color: 'white'
    }
});

const mapStateToProps = ({ dataReducer }) => {
    return {
        filter: dataReducer.filter,
        listCategories: dataReducer.listCategories
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getListCocktails: (filterType, filterParam) => dispatch(getListCocktails(filterType, filterParam)),
        getCocktails: (name, category) => dispatch(getCocktails(name, category)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ListCategories);
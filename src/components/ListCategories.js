import React, { Component } from 'react';
import {
    StyleSheet,
    Button,
    Image,
    View,
    Text,
    FlatList
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

    render() {

        if (this.props.filter.filterParam === '?i=list') {
            return (
                <View>
                    <FlatList
                        data={this.props.listCategories.drinks}
                        renderItem={({item}) => (
                            this.renderIngredientsItem({item})
                        )}
                        keyExtractor={(item, index) => index}/>
                </View>
            )
        }
        else if (this.props.filter.filterParam === '?c=list') {
            return (
                <View>
                    <FlatList
                        data={this.props.listCategories.drinks}
                        renderItem={({item}) => (
                            this.renderCategoriessItem({item})
                        )}
                        keyExtractor={(item, index) => index}/>
                </View>
            )
        }
        else {
            return (
                <View>
                    <FlatList
                        data={this.props.listCategories.drinks}
                        renderItem={({item}) => (
                            this.renderCategoriessItem({item})
                        )}
                        keyExtractor={(item, index) => index}/>
                </View>
            )
        }
    }

    renderIngredientsItem({item}) {
        return (
            <View>
                <View>
                    <Image
                        style={{width: 100, height: 100}}
                        source={{uri: `https://www.thecocktaildb.com/images/ingredients/${item.strIngredient1}-Small.png`}}
                    />
                    <Text>{item.strIngredient1}</Text>
                    <Button
                        title={"Go"}
                        onPress={() =>
                        {this.props.navigation.navigate('ListCocktails');
                        this.props.getCocktails(item.strIngredient1, 'i');
                        }}
                    />
                </View>
            </View>
        )
    };

    renderCategoriessItem({item}) {
        return (
            <View>
                <View>
                    <Text>{item.strCategory}</Text>
                    <Button
                        title={"Go"}
                        onPress={() =>
                        {this.props.navigation.navigate('ListCocktails');
                            this.props.getCocktails(item.strCategory, 'c');
                        }}
                    />
                </View>
            </View>
        )
    }
}
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
import React, { Component } from 'react';
import {
    StyleSheet,
    Button,
    View,
    Text,
    FlatList
} from 'react-native';
import { connect } from 'react-redux';
import { getListCocktails } from '../actions'

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
                            <Text>({item.strIngredient1})</Text>
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
                            <Text>({item.strCategory})</Text>
                        )}
                        keyExtractor={(item, index) => index}/>
                </View>
            )
        }
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
        getListCocktails: (filterType, filterParam) => dispatch(getListCocktails(filterType, filterParam))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ListCategories);
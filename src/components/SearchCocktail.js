import React, { Component } from 'react';
import {
    StyleSheet,
    Button,
    View,
    TextInput
} from 'react-native';
import { connect } from 'react-redux';
import {changeCocktail} from '../actions'

class SearchCocktail extends Component {
    static navigationOptions = {
        title: 'Search for cocktails',
    };

    render() {

        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>

                <TextInput
                    style={styles.input}
                    onChangeText={ (name) => this.props.changeCocktail(name) }
                    placeholder={"Enter cocktail name ..."}
                />

                <Button
                    title={"Submit"}
                    onPress={ () => this.props.navigation.navigate('ListCocktails') }
                />
            </View>
        )
    }
}

const mapStateToProps = ({ dataReducer }) => {
    return {
        name: dataReducer.name
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeCocktail: (name) => dispatch(changeCocktail(name)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchCocktail)

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: "80%",
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 50,
        padding: 10
    },
});
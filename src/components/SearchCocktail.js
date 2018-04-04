import React, { Component } from 'react';
import {
    StyleSheet,
    Button,
    View,
    TextInput
} from 'react-native';
import { connect } from 'react-redux';
import {changeCocktail, getCocktails} from '../actions'

class SearchCocktail extends Component {

    render() {

        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>

                <TextInput
                    style={styles.input}
                    onChangeText={ (name) => console.log(this.props.changeCocktail(name)) }
                    placeholder={"Enter cocktail name ..."}
                />

                <Button
                    title={"Submit"}
                    onPress={ () => this.props.getCocktails(this.props.name) }
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
        getCocktails: (name) => dispatch(getCocktails(name))
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
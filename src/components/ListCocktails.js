import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    ActivityIndicator,
    Image
} from 'react-native';

import { connect } from 'react-redux';
import { getCocktails } from "../actions";

class ListCocktails extends Component {

    componentDidMount() {
        this.props.getCocktails('red');
    }

    render() {
        if (this.props.loading) {
            return (
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator animating={true}/>
                </View>
            );
        } else {
            return (
                <View style={{flex:1, backgroundColor: '#F5F5F5', paddingTop:20}}>
                    <FlatList
                        data={Object.values(this.props.cocktails.drinks)}
                        renderItem={({item}) => (
                            this.renderItem({item})
                        )}
                        keyExtractor={(item, index) => index}/>
                </View>
            );
        }
    }
    renderItem({item}) {
        return (
            <View style={styles.row}>
                <View style={styles.row}>
                    <Image
                        style={{width: 50, height: 50}}
                        source={{uri: item.strDrinkThumb}}
                    />
                    <Text style={styles.title}>{item.strDrink}</Text>
                </View>
            </View>
        )
    }
}

const mapStateToProps = ({ dataReducer }) => {
    return {
        loading: dataReducer.loading,
        cocktails: dataReducer.cocktails
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCocktails: (name) => dispatch(getCocktails(name))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ListCocktails);

const styles = StyleSheet.create({
    activityIndicatorContainer:{
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

    row:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: "#ccc",
        padding: 10
    },

    title:{
        fontSize: 15,
        fontWeight: "600",
        textAlign: 'center'
    },

    description:{
        marginTop: 5,
        fontSize: 14,
    }
});
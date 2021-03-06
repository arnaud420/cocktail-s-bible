import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    ActivityIndicator,
    Image,
    Button
} from 'react-native';

import { connect } from 'react-redux';
import {getCocktails, getCocktail} from "../actions";

class ListCocktails extends Component {

    static navigationOptions = {
        title: "Cocktail's list"
    };

    goToCocktails(item) {
        this.props.navigation.navigate('Cocktail');
        this.props.getCocktail(item);
    }

    render() {
        if (this.props.loading) {
            return (
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator animating={true}/>
                </View>
            );
        }
        else {
            if (this.props.cocktails.drinks != null || undefined) {
                return (
                    <View style={{flex:1, backgroundColor: '#F5F5F5', paddingTop:20}}>
                        <FlatList
                            data={this.props.cocktails.drinks}
                            renderItem={({item}) => (
                                this.renderItem({item})
                            )}
                            keyExtractor={(item, index) => index}/>
                    </View>
                );
            }
            else {
                return (
                    <View style={styles.activityIndicatorContainer}>
                        <Text>There is no data for { this.props.name }</Text>
                    </View>
                )
            }
        }
    }
    renderItem({item}) {
        return (
            <View style={styles.row}>
                <Image
                    style={{width: 100, height: 100}}
                    source={{uri: item.strDrinkThumb}}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{item.strDrink}</Text>
                    <Button
                        color="#03a9f4"
                        title={"See"}
                        onPress={ () => this.goToCocktails(item.idDrink) }
                    />
                </View>
            </View>
        )
    }
}

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
    },
    textContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 10,
        paddingLeft:10
    },
});

const mapStateToProps = ({ dataReducer }) => {
    return {
        name: dataReducer.name,
        loading: dataReducer.loading,
        cocktails: dataReducer.cocktails
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCocktails: (name) => dispatch(getCocktails(name)),
        getCocktail: (id) => dispatch(getCocktail(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ListCocktails);
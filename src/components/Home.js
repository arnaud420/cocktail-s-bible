import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight
} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures'
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
            <View style={styles.container}>
                <GestureRecognizer
                    onSwipeUp={ () => this.getIngredientsList() }
                    onSwipeLeft={ () => this.getNewRandomCocktail() }
                    onSwipeDown={ () => this.getCategoriesList() }
                    >
                    <TouchableHighlight
                        onPress={ () => this.goToCocktail() }>
                        <View>
                            <Image
                                style={styles.img}
                                source={{uri: this.props.randomCocktail.img}}
                            />
                            <Text style={styles.title}>{this.props.randomCocktail.title}</Text>
                            <Text style={styles.txtHelper}>Swipe left to get a new random cocktail</Text>
                            <Text style={styles.txtHelper}>Swipe up to get ingredients list</Text>
                            <Text style={styles.txtHelper}>Swipe down to get categories list</Text>
                        </View>
                    </TouchableHighlight>
                </GestureRecognizer>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        height: "100%"
    },
    title: {
        textAlign: 'center',
        padding: '5%',
        fontSize: 23,
        fontWeight: 'bold',
        color: '#03a9f4'
    },
    img: {
        width: '100%',
        height: 400
    },
    txtHelper: {
        color: "grey",
        textAlign: 'center',
        marginBottom: 5
    }
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
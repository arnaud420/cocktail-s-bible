import React, { Component } from 'react';
import {
    StyleSheet,
    Button,
    View,
    Text
} from 'react-native';
import store from '../store'
import { connect } from 'react-redux';
import { searchFilter } from '../actions'

class Home extends Component {

    static navigationOptions = {
        title: "Cocktail's Bible",
    };

    render() {

        return (
            <View>
                <Text>What do you want to drink ?</Text>
                <View>
                    <Text>I want a specific ingredient !</Text>
                    <Button
                        title={"Go"}
                        onPress={ () => {{
                            this.props.navigation.navigate('ListCategories');
                            this.props.searchFilter('list.php', '?i=list');
                            console.log(store.getState())
                        } }}
                    />
                </View>
                <View>
                    <Text>I don't know give me categories list !</Text>
                    <Button
                        title={"Go"}
                        onPress={ () => {
                            this.props.navigation.navigate('ListCategories');
                            this.props.searchFilter('list.php', '?c=list');
                        }}
                    />
                </View>
                <View>
                    <Text>Im thursty get me a random cocktail now !</Text>
                    <Button
                        title={"Get"}
                        onPress={ () => { this.props.searchFilter('random.php', ''); console.log(store.getState()) } }
                    />
                </View>
            </View>
        )
    }
}
const mapStateToProps = ({ dataReducer }) => {
    return {
        filter: dataReducer.filter
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        searchFilter: (filterType, filterParam) => dispatch(searchFilter(filterType, filterParam))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
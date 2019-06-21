import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity,Image ,TextInput} from 'react-native';

import Picker from 'react-native-picker';

class Test extends Component {
    constructor(props) {
        super(props)
        this.data = [];
        this.state = {

        };
    };
    
    componentDidMount(){
    }



   
    render(){
        return(
            <View>
                <TouchableOpacity>
                    <Text>点击</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    // ...theme.base,

})

export default Test;

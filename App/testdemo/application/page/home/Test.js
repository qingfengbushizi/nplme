import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity,Image ,TextInput} from 'react-native';

import Picker from 'react-native-picker';

class Test extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            title:'点击',
            headerRight: <View/>,
        }
    };
    constructor(props) {
        super(props)
        this.data = [];
        this.state = {

        };
    };
    
    componentDidMount(){
    }



   
    render(){
        const {navigation} = this.props;
        return(
            <View>
                <TouchableOpacity onPress={()=>navigation.navigate('Info')}  style={{width:100,height:100,backgroundColor:'#ddd'}}>
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

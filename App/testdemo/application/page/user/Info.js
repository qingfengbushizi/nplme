import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity,Image ,TextInput} from 'react-native';

class Info extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            title:'信息',
            headerRight: <View/>,
        }
    };


    constructor(props) {
        super(props)
   
        this.state = {

        };
    };
    

    render(){
        const {navigation} = this.props;
        return(
            <View>
                <TouchableOpacity  style={{width:100,height:100,backgroundColor:'#ddd'}}>
                    <Text>信息</Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}


const styles = StyleSheet.create({
    // ...theme.base,

})


export default Info;
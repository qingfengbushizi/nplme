import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity,Image ,TextInput} from 'react-native';

class User extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            title:'我的',
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
                <TouchableOpacity onPress={()=>navigation.navigate('Test')}  style={{width:100,height:100,backgroundColor:'#ddd'}}>
                    <Text>我的</Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}


const styles = StyleSheet.create({
    // ...theme.base,

})


export default User;
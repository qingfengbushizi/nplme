import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity,Image ,TextInput} from 'react-native';

import Picker from 'react-native-picker';
import MapView from 'react-native-maps';

class Home extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            title:'我的',
            headerRight: <View/>,
        }
    };


    constructor(props) {
        super(props)
        this.data = [];
        this.state = {
            region:{}
        };
    };
    
    componentDidMount(){
       
    }

   

    render(){
        const {navigation} = this.props;
        return(
            <TouchableOpacity onPress={()=>navigation.navigate('Test')}  style={{width:100,height:100,backgroundColor:'#ddd'}}>
                <Text>werwrw</Text>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    // ...theme.base,

})

export default Home;

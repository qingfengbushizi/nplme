import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity,Image ,TextInput,NativeModules} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import Picker from 'react-native-picker';
import MapView from 'react-native-maps';
import RNAlibcSdk from 'react-native-alibc-sdk';



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
        console.log(DeviceInfo.getUniqueID());
        console.log(RNAlibcSdk);
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

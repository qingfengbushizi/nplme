/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import React, { Component } from 'react';

// import {
//     View, 
//     Dimensions, 
//     StyleSheet, 
//     PanResponder, 
//     Text,
//     ProgressViewIOS,
//     ProgressBarAndroid,
//     Platform
// } from "react-native";


// var totalWidth = Dimensions.get('window').width;


// class Touchdemo extends Component {

// 	static navigationOptions = ({navigation}) => {
// 		return {
// 			header: null,
// 		}
// 	};

// 	constructor(props){
//         super(props)
//         this.watcher = null;
//         this.state = {
//             progress:0,
//             left:10
//         };
//         this._onPanResponderGrant = this._onPanResponderGrant.bind(this);
//         this._onPanResponderMove = this._onPanResponderMove.bind(this);
//     };

//     componentWillMount(){
//         this.watcher  = PanResponder.create({
//             onStartShouldSetPanResponder:()=>{
//                 return true;
//             },

//             onPanResponderGrant:this._onPanResponderGrant,

//             onPanResponderMove:this._onPanResponderMove,
//         });
//     };

//     _onPanResponderGrant(e,gestureState){
//         console.log(gestureState);
//         let touchPointX = gestureState.x0;
//         let progress;
//         if(touchPointX < 20){
//             progress = 0;
//         } else{
//             if(touchPointX > (totalWidth - 40)){
//                 progress = 1;
//             }else {
//                 progress = (touchPointX - 20) / (totalWidth - 40);
//             }
//         }
//     };

//     _onPanResponderMove(e,gestureState){
//         console.log(gestureState.dx);
//         let touchPointX = gestureState.moveX;
//         let progress;
//         if(touchPointX < 20){
//             progress = 0;
//         } else{
//             if(touchPointX > (totalWidth - 40)){
//                 progress = 1;
//             }else {
//                 progress = (touchPointX - 20) / (totalWidth - 40);
//             }
//         }

//         this.setState({
//             progress:progress,
//             left:touchPointX,
//         });
//     };

//     render(){

//         return(
//             <View style={styles.container}>
//                 {
//                     Platform.OS === 'android' ?
//                     <ProgressBarAndroid style = {styles.ProgressViewStyle}
//                         progress = {this.state.progress}
//                     />
//                     :
//                     <ProgressViewIOS style = {styles.ProgressViewStyle}
//                         progress = {this.state.progress}
//                     />
//                 }
//                 <Text style = {styles.textStyle}>
//                     当前进度{Math.round(this.state.progress * 100)} %
//                 </Text>

//                 <Text style = {[styles.indexTextStyle,{left:this.state.left,}]}>
//                     {Math.round(this.state.progress * 100)} %
//                 </Text>

//                 <View style = {styles.touchViewStyle}
//                     {...this.watcher.panHandlers} >
//                 </View>
//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     ProgressViewStyle:{
//         width:totalWidth - 40,
//         height:40,
//         left:20,
//         top: 100,
//     },
//     container:{
//         flex:1,
//     },

//     touchViewStyle:{
//         width:totalWidth - 0,
//         height:200,
//         backgroundColor: 'rgba(0, 0, 0, 0.7)',
//         position:'absolute',
//         left:10,
//         top:262,

//     },

//     textStyle:{
//         fontSize: 30,
//         left:20,
//         top:120,
//     },

//     indexTextStyle:{
//         width:30,
//         fontSize:12,
//         color:'#770099',
//         top:150,
//         backgroundColor:'#11cc55'
//     },



//     pan1: {
//         ...StyleSheet.absoluteFillObject,
//         backgroundColor: 'red',
//         justifyContent: 'center'
//     },
//     pan2: {
//         height: 200,
//         justifyContent: 'center',
//         backgroundColor: 'yellow'
//     },
//     pan3: {
//         height: 100,
//         backgroundColor: 'blue'
//     }
// })

// export const LayoutComponent = Touchdemo;
// export function mapStateToProps(state) {
//     return {
//     	user: state.user.user
//     }
// }




import React from 'react';
import {View, Dimensions, StyleSheet, PanResponder, Text,ProgressViewIOS,ProgressBarAndroid,Platform} from "react-native";


var totalWidth = Dimensions.get('window').width;
export default class App extends React.Component {


    constructor(props){
        super(props)
        this.watcher = null;
        this.state = {
            progress:0,
            left:10
        };
        this._onPanResponderGrant = this._onPanResponderGrant.bind(this);
        this._onPanResponderMove = this._onPanResponderMove.bind(this);
    };

    componentWillMount(){
        this.watcher  = PanResponder.create({
            onStartShouldSetPanResponder:()=>{
                return true;
            },

            onPanResponderGrant:this._onPanResponderGrant,

            onPanResponderMove:this._onPanResponderMove,
        });
    };

    _onPanResponderGrant(e,gestureState){
        console.log(e);
        let touchPointX = gestureState.x0;
        let progress;
        if(touchPointX < 20){
            progress = 0;
        } else{
            if(touchPointX > (totalWidth - 40)){
                progress = 1;
            }else {
                progress = (touchPointX - 20) / (totalWidth - 40);
            }
        }
    };

    _onPanResponderMove(e,gestureState){
        console.log(e)
        let touchPointX = gestureState.moveX;
        let progress;
        if(touchPointX < 20){
            progress = 0;
        } else{
            if(touchPointX > (totalWidth - 40)){
                progress = 1;
            }else {
                progress = (touchPointX - 20) / (totalWidth - 40);
            }
        }

        this.setState({
            progress:progress,
            left:touchPointX,
        });
    };


    render() {
        return (
            <View style={styles.container}>
                <ProgressViewIOS style = {styles.ProgressViewStyle}
                    progress = {this.state.progress}

                />

                <Text style = {styles.textStyle}>
                    当前进度{Math.round(this.state.progress * 100)} %
                </Text>

                <Text style = {[styles.indexTextStyle,{left:this.state.left,}]}>
                    {Math.round(this.state.progress * 100)} %
                </Text>

                <View style = {styles.touchViewStyle}
                    {...this.watcher.panHandlers} >
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({

    ProgressViewStyle:{
        width: totalWidth - 40,
        height:40,
        left:20,
        top:100,
    },

    container:{
        flex:1,
    },

    touchViewStyle:{
        width:totalWidth - 20,
        height:40,
        backgroundColor:'#bc8907',
        position:'absolute',
        left:10,
        top:262,

    },

    textStyle:{
        fontSize: 30,
        left:20,
        top:120,
    },

    indexTextStyle:{
        width:30,
        fontSize:12,
        color:'#770099',
        top:150,
        backgroundColor:'#11cc55'
    },



    pan1: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'red',
        justifyContent: 'center'
    },
    pan2: {
        height: 200,
        justifyContent: 'center',
        backgroundColor: 'yellow'
    },
    pan3: {
        height: 100,
        backgroundColor: 'blue'
    }
})



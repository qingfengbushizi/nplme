import React, { Component } from 'react';
import { Text ,Image} from 'react-native';

import { createStackNavigator,createBottomTabNavigator, createAppContainer } from 'react-navigation';


import  Home from '../page/home/Home';
import  Test from '../page/home/Test';


import  User from '../page/user/User';

import asset from '../config/asset';

const HomeNav = createStackNavigator({
    Home:{screen:Home},
    Test:{screen:Test},
}, {
    defaultNavigationOptions: {
        headerTintColor: '#000',
        headerBackTitle: null,
        headerTitleStyle: {
			textAlign: 'center',
			alignSelf : 'center',
			flex: 1,
		},
    }
})

const UserNav = createStackNavigator({
    User: {screen:User},
}, {
    defaultNavigationOptions: {
        headerTintColor: '#000',
        headerBackTitle: null,
        tabBarVisible: false,
        headerTitleStyle: {
			textAlign: 'center',
			alignSelf : 'center',
			flex: 1,
		},
    },
})

HomeNav.navigationOptions = ({navigation}) => {
    let tabBarVisible = true;

    if (navigation.state.index > 0) {
        tabBarVisible = false
    }

    return {
        tabBarVisible,
    }
}

UserNav.navigationOptions = ({navigation}) => {
    let tabBarVisible = true;

    if (navigation.state.index > 0) {
        tabBarVisible = false
    }

    return {
        tabBarVisible,
    }
}

const MainNav = createBottomTabNavigator({
    HomeNav: {
        screen: HomeNav,
        navigationOptions: {
            title: '首页',
            tabBarIcon: ({focused}) => {
                return <Image source={focused ? asset.home.home_s : asset.home.home } style={{width:20,height:20}}/>
            }
        }
    },
    UserNav: {
        screen: UserNav,
        navigationOptions: {
            title: '我的',
            tabBarIcon: ({focused}) => {
                return <Image source={focused ? asset.user.user_s : asset.user.user } style={{width:20,height:20}}/>
            }
        }
    },

}, {
    initialRouteName: 'HomeNav',
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: '#8D4AE3',
        inactiveTintColor: '#BABABA',
        tabStyle: {
            padding: 5
        }
    }
});

export const AppNav = createAppContainer(MainNav);
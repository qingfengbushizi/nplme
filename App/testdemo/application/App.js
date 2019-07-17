
import React, { Component } from 'react';
import { View, ActivityIndicator ,Text} from 'react-native';

// import { Provider } from 'react-redux';

import  Main from './Main';



// create a component
class App extends Component {
    
    constructor(props) {
		super(props);

		this.state = {
			load: false,
		};
    }

    componentDidMount() {
        
    };
    

    render() {
        return (
            <Main />
        );
    }
}


export default App;



// import React from 'react';
// import { Text, View ,TouchableOpacity} from 'react-native';
// import { createBottomTabNavigator, createAppContainer ,createStackNavigator} from 'react-navigation';





// class HomeScreen extends React.Component {
//   render() {
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Text>Home!</Text>
//             <TouchableOpacity onPress={()=>this.props.navigation.navigate('Profile')}>
//                 <Text>资料 </Text>
//             </TouchableOpacity>
//         </View>
//     );
//   }
// }

// class DetailsScreen extends React.Component {
//     render() {
//         return (
//             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                 <Text>Details!</Text>
//             </View>
//         );
//     }
// }

// class SettingsScreen extends React.Component {
//   render() {
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Text>Settings!</Text>
//         </View>
//     );
//   }
// }

// class ProfileScreen extends React.Component {
//     render() {
//         return (
//             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                 <Text>Profile!</Text>
//                 <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>
//                     <Text>shouye </Text>
//                 </TouchableOpacity>
//             </View>
//         );
//     }
//   }

// const HomeStack = createStackNavigator({
//     Home: HomeScreen,
//     Details: DetailsScreen,
// });
  
// const SettingsStack = createStackNavigator({
//     Settings: SettingsScreen,
//     Profile: ProfileScreen,
// });



// const TabNavigator = createBottomTabNavigator({
//   Home: HomeStack,
//   Settings: SettingsStack,
// });

// export default createAppContainer(TabNavigator);



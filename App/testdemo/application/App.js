//import liraries
import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';

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



import React, { Component } from 'react';
// import { setCustomText } from 'react-native-global-props';
import App from './App';


console.disableYellowBox = true;

const customTextProps = {
	style: {
		fontSize: 14,
		color: '#333333',
	}
};

function setup() {
    
    // setCustomText(customTextProps);

    class Root extends Component {

        render() {
            return (
                <App/>
            );
        }
    }

    return Root;
}

module.exports = setup;
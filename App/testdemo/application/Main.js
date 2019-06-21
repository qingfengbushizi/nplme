import React, { Component } from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {LoginNav,AppNav} from './config/route';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F2F2F2',
	},
	load: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	}
});


class Main extends Component{

	constructor(props) {
        super(props);
        this.state = {
            type:true
        }
		this._renderMain = this._renderMain.bind(this);
    }   

    _renderMain(){
        const {user} = this.props;
		return this.state.type ? <AppNav/> : <LoginNav/>;
	}

    render() {
		return (
			<View style={styles.container}>
				<StatusBar barStyle='default' translucent={false}/>
                {this._renderMain()}
			</View>
		);
	}
}

export default Main;
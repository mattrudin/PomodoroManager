import React from 'react';
import { StyleSheet, Text, TextInput,View } from 'react-native';

const TimerInput = props => {
	return(
		<TextInput 
			type="number" 
			className="search" 
			onChange={props.input} />
	);
};

export default TimerInput;
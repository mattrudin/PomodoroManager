import React from 'react';
import { StyleSheet, Text, TextInput,View } from 'react-native';

const TimerInput = props => {
	const text = props.text;
	return(
		<View style={styles.container}>
			<Text>{text}</Text>
			<TextInput 
				type="number" />
		</View>
	);
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FAF3EB',
  },
});

export default TimerInput;
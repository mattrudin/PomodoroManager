import React from 'react';
import { StyleSheet, Text, TextInput,View } from 'react-native';

const TimerInput = props => {
	const text = props.text;
	const onChangeText = props.onChangeText;

	return(
		<View style={styles.container}>
			<Text>{text}</Text>
			<TextInput 
				style={{width: '90%'}}
				type="number"
				onChangeText={onChangeText} />
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
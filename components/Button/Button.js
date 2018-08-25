import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Button = props =>{
	return(
		<View style={styles.container}>
			<Text>+</Text>
		</View>
	)
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
    backgroundColor: '#D5D5D5',
    borderRadius: 25,
    elevation: 5,
    margin: 5
  }
});

export default Button;
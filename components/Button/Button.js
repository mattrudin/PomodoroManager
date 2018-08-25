import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Button = props =>{
	return(
		<View 
			style={styles.container}
			onPress={props.touch} >
			<Text style={styles.text}>{props.text}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
    backgroundColor: '#C9C9C9',
    borderRadius: 25,
    elevation: 5,
    margin: 5
  },

  text: {
  	fontSize: 30
  }
});

export default Button;
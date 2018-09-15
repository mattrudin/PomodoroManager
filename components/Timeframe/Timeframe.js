import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const Timeframe = props => {
  const containerBackground = props.break ? '#d3c786' : '#04986b';
  const borderColor = props.isActive ? '#83478B' : containerBackground;

  return (
    <View style={[styles.container, {backgroundColor: containerBackground, borderColor: borderColor}]}>
      <TextInput 
        style={{width: '90%', marginLeft: 10}}
        placeholder={props.break ? 'Take a break' : 'What needs to be done?'}
        placeholderTextColor='#fff'
        underlineColorAndroid="transparent"
        underlineColor="transparent"
        autoCorrect={false}
        type="text" 
        className="search" />
    </View>
  );  
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 3,
    height: 30,
    width: 300,
    borderRadius: 5,
    elevation: 5,
    margin: 5
  },

  description: {
    marginLeft: 'auto',
    marginRight: 5
  },
});

export default Timeframe;
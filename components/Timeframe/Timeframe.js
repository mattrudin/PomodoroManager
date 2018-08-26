import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const Timeframe = props => {
  let text = props.text;
  let containerBackground = props.break ? '#d3c786' : '#04986b';

  return (
    <View style={[styles.container, {backgroundColor: containerBackground}]}>
      <Text style={styles.startTime}>12:00</Text>
      <Text style={styles.endTime}>12:25</Text>
      <TextInput 
        type="text" 
        className="search" 
        placeholder={props.break ? 'Break' : ''} />
    </View>
  );  
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
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

  startTime: {
    paddingLeft: 10,
    paddingRight: 10
  },

  endTime: {
    paddingLeft: 10,
    paddingRight: 20
  }
});

export default Timeframe;
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Timeframe = (props) => {
  let text = props.text;
  let containerBackground = props.break ? styles.containerBreak : styles.containerWork;

  return (
    <View style={containerBackground}>
      <Text style={styles.startTime}>12:00</Text>
      <Text style={styles.endTime}>12:25</Text>
      <Text style={styles.description}>{text}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  containerWork: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
    width: 300,
    backgroundColor: '#38c172',
    borderRadius: 5,
    elevation: 5,
    margin: 5
  },

  containerBreak: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
    width: 300,
    backgroundColor: '#f6993f',
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
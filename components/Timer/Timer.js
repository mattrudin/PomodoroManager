import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Timer = (props) => {
  let minutes = props.minutes;
  let seconds = props.seconds;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{minutes}:{seconds}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    backgroundColor: '#6cb2eb',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 75,
    elevation:10,
    padding: 5
  },

  text: {
    color: 'white',
    fontSize: 40
  }
});

export default Timer;
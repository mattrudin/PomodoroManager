import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

class Timeframe extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let text = this.props.text;
    let containerBackground = this.props.break ? styles.containerBreak : styles.containerWork;

    return (
      <View style={containerBackground}>
        <Text style={styles.startTime}>12:00</Text>
        <Text style={styles.endTime}>12:25</Text>
        <TextInput 
          type="text" 
          className="search" 
          placeholder={this.props.break ? 'Break' : ''} />
      </View>
    );  
  }
}


const styles = StyleSheet.create({
  containerWork: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
    width: 300,
    backgroundColor: '#04986b',
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
    backgroundColor: '#d3c786',
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
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import TimerInput from '../../components/TimerInput/TimerInput';
import { setWorkDuration, setShortBreakDuration, setLongBreakDuration } from '../../components/Store/actions';

class SettingsScreen extends React.Component {
  handleWorkChange = (duration) => {
    this.props.dispatch(setWorkDuration(duration));
  };
  handleShortBreakChange = (duration) => {
    this.props.dispatch(setShortBreakDuration(duration));
  };
  handleLongBreakChange = (duration) => {
    this.props.dispatch(setLongBreakDuration(duration));
  };
  render () {
  	return(
  		<View style={styles.container}>
  	      <TimerInput 
            text={'Duration of working frame'}
            onChangeText={(duration) => this.handleWorkChange(duration)} />
          <TimerInput 
            text={'Duration of short break frame'}
            onChangeText={(duration) => this.handleShortBreakChange(duration)} />
          <TimerInput 
            text={'Duration of long break frame'}
            onChangeText={(duration) => this.handleLongBreakChange(duration)} />
  	    </View>
  	);
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#FAF3EB',
  }
});

export default SettingsScreen;
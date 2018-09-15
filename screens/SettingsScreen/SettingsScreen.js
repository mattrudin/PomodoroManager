import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableHighlight } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import TimerInput from '../../components/TimerInput/TimerInput';
import { setWorkDuration, setShortBreakDuration, setLongBreakDuration, changePrimaryColor } from '../../components/Store/actions';
import { defaultTheme, darkTheme } from '../../components/Utilities/colors';

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
  handleThemeChange = (color) => {
    this.props.dispatch(changePrimaryColor(color));
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
          <TouchableHighlight
            onPress={() => this.handleThemeChange(defaultTheme)} >
            <Text>Default Theme</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => this.handleThemeChange(darkTheme)} >
            <Text>Dark Theme</Text>
          </TouchableHighlight>
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

export default connect()(SettingsScreen);
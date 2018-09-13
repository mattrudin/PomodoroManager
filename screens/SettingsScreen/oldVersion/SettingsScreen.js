import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import TimerInput from '../../components/TimerInput/TimerInput';

const SettingsScreen = (props) => {
	return(
		<View style={styles.container}>
	      <TimerInput 
          text={'Duration of working frame'}/>
        <TimerInput 
          text={'Duration of short break frame'}/>
        <TimerInput 
          text={'Duration of long break frame'}/>
	    </View>
	);
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
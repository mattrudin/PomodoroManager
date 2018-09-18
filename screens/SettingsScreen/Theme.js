import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableHighlight } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import TimerInput from '../../components/TimerInput/TimerInput';
import { changePrimaryColor } from '../../components/Store/actions';
import { defaultTheme, darkTheme } from '../../components/Utilities/colors';

class Theme extends React.Component {
  handleThemeChange = (color) => {
    this.props.dispatch(changePrimaryColor(color));
    this.props.navigation.goBack();
  };
  
  render () {
  	return(
  		<View style={styles.container}>
          <View style={styles.duration}>
            <Text style={styles.header}>Durations</Text>
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
          <View style={styles.themes}>
            <Text style={styles.header}>Available Themes</Text>
            <TouchableHighlight
              style={styles.themeButton}
              onPress={() => this.handleThemeChange(defaultTheme)} >
              <Text>Default Theme</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.themeButton}
              onPress={() => this.handleThemeChange(darkTheme)} >
              <Text>Dark Theme</Text>
            </TouchableHighlight>
          </View>  
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
  },
  duration: {
    marginTop: 5
  },
  themes:{
    marginTop: 10
  },
  header: {
    fontSize: 30,
    fontWeight: '400'
  },
  themeButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    borderStyle: 'solid',
    borderColor: '#000',
    borderWidth: 2,
  }
});

export default connect()(Theme);
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import SettingsScreen from './screens/SettingsScreen/SettingsScreen';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workDuration: 0,
      breakDuration: 0
    };

    this.setWorkDuration = this.setWorkDuration.bind(this);
    this.setBreakDuration = this.setBreakDuration.bind(this);
  }

  setWorkDuration(event) {
    this.setState({
      workDuration: event.target.value
    })
  }

  setBreakDuration(event) {
    this.setState({
      breakDuration: event.target.value
    })
  }

  render() {
    return(
      <AppDrawerNavigation />
    );
  }
} 

const AppDrawerNavigation = createDrawerNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    backgroundColor: '#FAF3EB',
  }
});

export default App;
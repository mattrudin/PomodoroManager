import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { createDrawerNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import SettingsScreen from './screens/SettingsScreen/SettingsScreen';

class App extends React.Component {
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
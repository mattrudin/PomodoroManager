import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { store } from './components/Store/store';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import SettingsScreen from './screens/SettingsScreen/SettingsScreen';

class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <AppDrawerNavigation />
      </Provider>
    );
  }
} 

const AppDrawerNavigation = createDrawerNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen
});

export default App;
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './components/Store/reducers';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import SettingsScreen from './screens/SettingsScreen/SettingsScreen';

const store = createStore(reducer);

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
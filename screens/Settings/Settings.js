import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';

const Settings = (props) => {
	return(
		<View style={styles.container}>
	      <Text>settings screen</Text>
	    </View>
	);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    backgroundColor: '#FAF3EB',
  }
});

export default Settings;
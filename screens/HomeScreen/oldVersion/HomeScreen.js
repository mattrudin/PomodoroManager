import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import TimeFrame from '../../components/Timeframe/Timeframe';

const HomeScreen = (props) => {
	return(
		<View style={styles.container}>
	        <Button 
	          title={`START`}
	          fontSize={40}
	          buttonStyle={styles.buttonTimer} />
	        <View style={styles.buttonRow}>
	          <Button 
	            title={'-'}
	            fontSize={20}
	            buttonStyle={styles.button} />
	          <Button 
	            title={'+'}
	            fontSize={20}
	            buttonStyle={styles.button} />
	        </View>
	        <ScrollView style={styles.scrollView} >
	        	<TimeFrame
	        		break={0} />
	        	<TimeFrame
	        		break={1} />
	        	<TimeFrame
	        		break={0} />
	        </ScrollView>
      	</View>
	);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    backgroundColor: '#FAF3EB',
  },

  buttonRow: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 10,
  },

  button: {
    height: 50,
    width: 50,
    backgroundColor: '#C9C9C9',
    borderRadius: 25,
    elevation: 5,
    margin: 5,
  },

  buttonTimer: {
    width: 150,
    height: 150,
    backgroundColor: '#568DBA',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 75,
    elevation:10,
    padding: 5,
  },

  scrollView: {
    marginTop: 10,
  }

});

export default HomeScreen;
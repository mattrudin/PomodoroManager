import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators as actions } from '../../components/Store/actions';
import TimeFrame from '../../components/Timeframe/Timeframe';
import { formatTime } from '../../components/Utilities/utils';

class HomeScreen extends React.Component {
	componentWillReceiveProps(nextProps) {
		const currentProps = this.props;
		if (!currentProps.isPlaying && nextProps.isPlaying) {
			const timerInterval = setInterval(() => {
				currentProps.addSecond();
			}, 1000);
			this.setState({
				timerInterval
			});
		} else if (currentProps.isPlaying && !nextProps.isPlaying) {
			clearInterval(this.state.timerInterval);
		}
	}

	render() {

		const { isPlaying, elapsedTime, timerDuration, framesArray, startTimer, restartTimer, addFrame, removeFrame, numberOfTimeframe } = this.props;

		const startStopButton = isPlaying ? 	<Button
													title={`${formatTime(timerDuration - elapsedTime)}`}
													fontSize={40}
													buttonStyle={styles.buttonTimer}
													onPress={restartTimer}
												/> :
												<Button
													title={`START`}
													fontSize={40}
													buttonStyle={styles.buttonTimer}
													onPress={startTimer}
												/>

		const timeFrames = framesArray.map((frame, index) => {
	      return <TimeFrame 
	                break={frame}
	                isActive={index == numberOfTimeframe ? 1 : 0} 
	                key={index} />
	    })

		return(
			<View style={styles.container}>
		        {startStopButton}
		        <View style={styles.buttonRow}>
		          <Button 
		            title={'-'}
		            fontSize={20}
		            onPress={removeFrame} 
		            buttonStyle={styles.button} />
		          <Button 
		            title={'+'}
		            fontSize={20}
		            onPress={addFrame}
		            buttonStyle={styles.button} />
		        </View>
		        <ScrollView style={styles.scrollView} >
		          {timeFrames}
		        </ScrollView>
		    </View>
		);
	}
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

//Input from store
const mapStateToProps = (state) => {
	const { isPlaying, elapsedTime, timerDuration, framesArray, numberOfTimeframe } = state;
	return {
		isPlaying,
		elapsedTime,
		timerDuration,
		framesArray,
		numberOfTimeframe
	};
}

//Output to store
const mapDispatchToProps = (dispatch) => {
	return {
		startTimer: bindActionCreators(actions.startTimer, dispatch),
		restartTimer: bindActionCreators(actions.restartTimer, dispatch),
		addSecond: bindActionCreators(actions.addSecond, dispatch),
		addFrame: bindActionCreators(actions.addFrame, dispatch),
		removeFrame: bindActionCreators(actions.removeFrame, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
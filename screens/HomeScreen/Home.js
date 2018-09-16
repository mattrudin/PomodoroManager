import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FontAwesome } from '@expo/vector-icons';
import {
	startTimer,
	restartTimer,
	addSecond,
	addFrame,
	removeFrame,
	setWorkDuration,
	setShortBreakDuration,
	setLongBreakDuration,
	changePrimaryColor
} from '../../components/Store/actions';
import TimeFrame from '../../components/Timeframe/Timeframe';
import { formatTime } from '../../components/Utilities/utils';

class Home extends React.Component {
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
	};

	handleSettingsPress = () => {
		this.props.navigation.navigate('Theme', { title: 'Settings'});
	};

	render() {

		const { isPlaying, elapsedTime, timerDuration, framesArray, startTimer, restartTimer, addFrame, removeFrame, numberOfTimeframe } = this.props;

		const startStopButton = isPlaying ? 	<TouchableOpacity
													style={[styles.buttonTimer, {backgroundColor: this.props.buttonColor}]}
													onPress={restartTimer} >
													<Text style={styles.textTimer} >{formatTime(timerDuration - elapsedTime)}</Text>
												</TouchableOpacity> :
												<TouchableOpacity
													style={[styles.buttonTimer, {backgroundColor: this.props.buttonColor}]}
													onPress={startTimer} >
													<Text style={styles.textTimer}>START</Text>
												</TouchableOpacity>

/*		const timeFrames = framesArray.map((frame, index) => {
	      return <TimeFrame 
	                break={frame}
	                isActive={index == numberOfTimeframe ? 1 : 0} 
	                key={index} />
	    })*/

		return(
			<View style={[styles.container, {backgroundColor: this.props.backgroundColor}]}>
			{startStopButton}
	        <View style={styles.buttonRow}>
	        	<TouchableOpacity 
			            onPress={removeFrame} 
			            style={styles.button}>
			        	<Text style={styles.text} >-</Text>
			    </TouchableOpacity>
		        <TouchableOpacity 
			            onPress={addFrame} 
			            style={styles.button}>
			        	<Text style={styles.text} >+</Text>
			        </TouchableOpacity>
	        	<TouchableOpacity
						style={styles.button}
						onPress={this.handleSettingsPress} >
						<FontAwesome 
							name='gear'
							size={24}
							color='#568DBA' /> 
					</TouchableOpacity>
		        </View>
		       	{/*<ScrollView style={styles.scrollView} >
		          {timeFrames}
		        </ScrollView>*/}
		    </View>
		);
	}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
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
    alignItems: 'center',
  	justifyContent: 'center'
  },

  buttonTimer: {
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 75,
    elevation:10,
    padding: 5,
  },

  scrollView: {
    marginTop: 10,
  },
  text: {
  	fontSize: 20,
  	color: '#fff'
  },
  textTimer: {
  	fontSize: 40,
  	color: '#fff'
  }

});

const mapStateToProps = (state) => {
	const { isPlaying, elapsedTime, timerDuration, framesArray, numberOfTimeframe } = state;
	return {
		isPlaying,
		elapsedTime,
		timerDuration,
		framesArray,
		numberOfTimeframe,
		backgroundColor: state.theme.backgroundColor,
		buttonColor: state.theme.buttonColor
	};
};

const mapDispatchToProps = {
		startTimer,
		restartTimer,
		addSecond,
		addFrame,
		removeFrame,
		changePrimaryColor
	};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
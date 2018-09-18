import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
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

	startTimer = () => {
	  this.props.dispatch({ type: 'START_TIMER' });
	};

	restartTimer = () => {
	  this.props.dispatch({ type: 'RESTART_TIMER' });
	};

	removeFrame = () => {
		this.props.dispatch({ type: 'REMOVE_FRAME' });
	};

	addFrame = () => {
		this.props.dispatch({ type: 'ADD_FRAME' });
	};

	handleSettingsPress = () => {
		this.props.navigation.navigate('Theme', { title: 'Settings'});
	};


	render() {
		const { isPlaying, elapsedTime, timerDuration, framesArray, startTimer, restartTimer, addFrame, removeFrame, numberOfTimeframe, backgroundColor, buttonColor, workColor, breakColor, highlighterColor, placeholderTextColor } = this.props;

		const startStopButton = isPlaying ? 	<TouchableOpacity
													style={[styles.buttonTimer, {backgroundColor: buttonColor}]}
													onPress={this.restartTimer} >
													<Text style={styles.textTimer} >{formatTime(timerDuration - elapsedTime)}</Text>
												</TouchableOpacity> :
												<TouchableOpacity
													style={[styles.buttonTimer, {backgroundColor: buttonColor}]}
													onPress={this.startTimer} >
													<Text style={styles.textTimer}>START</Text>
												</TouchableOpacity>

		const timeFrames = this.props.framesArray.map((frame, index) => {
	      return <TimeFrame 
	                break={frame}
	                isActive={index == numberOfTimeframe ? 1 : 0} 
	                key={index} 
	                workColor={workColor}
	                breakColor={breakColor}
	                highlighterColor={highlighterColor}
	                placeholderTextColor={placeholderTextColor} />
	    })

		return(
			<View style={[styles.container, {backgroundColor: backgroundColor}]}>
			{startStopButton}
	        <View style={styles.buttonRow}>
	        	<TouchableOpacity 
			            onPress={this.removeFrame} 
			            style={styles.button}>
			        	<Text style={styles.text} >-</Text>
			    </TouchableOpacity>
		        <TouchableOpacity 
			            onPress={this.addFrame} 
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
	return {
		isPlaying: state.isPlaying,
		elapsedTime: state.elapsedTime,
		timerDuration: state.timerDuration,
		framesArray: state.framesArray,
		numberOfTimeframe: state.numberOfTimeframe,
		backgroundColor: state.backgroundColor,
		buttonColor: state.buttonColor,
		workColor: state.workColor,
		breakColor: state.breakColor,
		highlighterColor: state.highlighterColor,
		placeholderTextColor: state.placeholderTextColor
	};
};

export default connect(mapStateToProps)(Home);
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements'
import Timeframe from './components/Timeframe/Timeframe';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      break: 1,
      time: 300,
      minutes: '',
      seconds: '',
      startTime: '',
      framesArray: [0,1,0]
    }

    this.addFrame = this.addFrame.bind(this);
    this.removeFrame = this.removeFrame.bind(this);
    this.start = this.start.bind(this);
  }
  
  start() {
    const time = new Date();
    const startTime = `${time.getHours()}:${time.getMinutes()}`;
    this.setState({
      startTime: startTime
    })
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
    /*if(this.state.time === 0) {
      start sound
    } else {

    }*/
    this.toMinutesSeconds();
    currentValue = this.state.time;
    this.setState({
      time: currentValue - 1
    })
  };

  toMinutesSeconds() {
    let minutes = Math.floor(this.state.time / 60);
    let seconds = this.state.time % 60;
    this.setState({
      minutes: this.addLeadingZeros(minutes),
      seconds: this.addLeadingZeros(seconds)
    });
  };

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = '0' + value;
    }
    return value;
  }

  addFrame() {
    this.setState({
      framesArray: [...this.state.framesArray, 1, 0]
    })
  }

  removeFrame() {
    this.setState({
      framesArray: this.state.framesArray.slice(0,-2)
    })
  }

  render() {
    const timeFrames = this.state.framesArray.map((frame, index) => {
      return <Timeframe 
                break={frame} 
                key={index}
                time={this.state.time}
                start={this.state.time} />
    })
    let { minutes, seconds } = this.state;

    return (
      <View style={styles.container}>
        <Button 
          title={`${minutes}:${seconds}`}
          fontSize={40}
          buttonStyle={styles.buttonTimer} 
          onPress={this.start} />
        <View style={styles.buttonRow}>
          <Button 
            title={'-'}
            fontSize={20}
            onPress={this.removeFrame} 
            buttonStyle={styles.button} />
          <Button 
            title={'+'}
            fontSize={20}
            onPress={this.addFrame}
            buttonStyle={styles.button} />
        </View>
        <ScrollView style={styles.scrollView} >
          {timeFrames}
        </ScrollView>
      </View>
    );
  }
}



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

export default App;
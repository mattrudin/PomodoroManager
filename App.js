import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './components/Timer/Timer';
import Timeframe from './components/Timeframe/Timeframe';
import Button from './components/Button/Button';
import TimerInput from './components/TimerInput/TimerInput';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      break: 1,
      time: 300,
      minutes: '',
      seconds: '',
      framesArray: [0,1,0]
    }
    this.handleInput = this.handleInput.bind(this);
    this.addFrame = this.addFrame.bind(this);
    this.removeFrame = this.removeFrame.bind(this);
  }
  
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  };

  tick() {
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

  handleInput(number) {
    this.setState({
      time: parseInt(number) 
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
    const timeFrames = this.state.framesArray.map(frame => {
      return <Timeframe break={frame}/>
    })

    return (
      <View style={styles.container}>
        <Timer 
            minutes={this.state.minutes}
            seconds={this.state.seconds} />
        <TimerInput
          input={this.handleInput} />
        <View>
          {timeFrames}
        </View>
        <View style={styles.button}>
          <Button 
            text={'-'}
            touch={this.removeFrame} />
          <Button 
            text={'+'}
            touch={this.addFrame} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FAF3EB'
  },

  button: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: 30
  }
});

export default App;
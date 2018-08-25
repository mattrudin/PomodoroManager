import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './components/Timer/Timer';
import Timeframe from './components/Timeframe/Timeframe';
import Button from './components/Button/Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      break: 1,
      time: 300,
      minutes: '',
      seconds: ''
    }
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

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = '0' + value;
    }
    return value;
  }

  render() {
    return (
      <View style={styles.container}>
        <Timer 
            minutes={this.state.minutes}
            seconds={this.state.seconds} />
        <View>
          <Timeframe text={'Doing stuff'} break={0}/>
          <Timeframe text={'Short break'} break={this.state.break}/>
          <Timeframe text={'Doing stuff'} break={0}/>
          <Timeframe text={'Short break'} break={this.state.break}/>
          <Timeframe text={'Doing stuff'} break={0}/>
          <Timeframe text={'Short break'} break={this.state.break}/>
          <Timeframe text={'Doing stuff'} break={0}/>
        </View>
        <View style={styles.button}>
          <Button />
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
    backgroundColor: '#f1f5f8'
  },

  button: {
    marginLeft: 'auto',
    marginRight: 30
  }
});

export default App;
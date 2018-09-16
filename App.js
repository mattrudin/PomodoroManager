import React from 'react';
import { Provider } from 'react-redux';
import { store } from './components/Store/store';
import Navigator from './screens/Navigator/navigation';

class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
} 

export default App;
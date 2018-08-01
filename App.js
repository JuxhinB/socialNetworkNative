import React, { Component } from 'react';
import { SwitchNav } from './src/navigators/SwitchNav';
import { Provider } from 'react-redux';
import { store } from './src/store';


export default class App extends Component {
  render() {
      return (
        <Provider store={store}>
          <SwitchNav/>
        </Provider>
      );
  }
}
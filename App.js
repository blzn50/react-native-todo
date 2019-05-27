import React from 'react';
import { Provider } from 'react-redux';
import Index from './containers';
import configureStore from './store';

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

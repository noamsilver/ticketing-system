import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import Header from '../Header';
import Board from '../Board';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Board />
      </div>
    </Provider>
  );
}

export default App;

import React from "react";
import { Provider } from 'react-redux';
import { store } from '../store/configureStore';

import Home from '../containers/Home';

const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
)

export default App;

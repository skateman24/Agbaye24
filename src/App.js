import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/Store'


import Approot from './Approot';
 
class App extends React.Component {
  render() {
    return (  
      <Provider store={store}>    
        <Approot />
      </Provider>
    );
  }
}
 
export default App;


// "start": "react-scripts start",
//"start": "node server.js",

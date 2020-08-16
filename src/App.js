import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/Store'
import Animation from './Components/Animation'

import Approot from './Approot';

import Resume from './Components/Resume'
 
class App extends React.Component {
  render() {
    return (  
      <Provider store={store}>    
        {/* <Approot /> */}
        {/* <Animation /> */}
        <Resume />
      </Provider>
    );
  }
}
 
export default App;


// "start": "react-scripts start",
//"start": "node server.js",

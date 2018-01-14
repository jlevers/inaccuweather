import React, { Component } from 'react';
import SettingsBar from './SettingsBar.jsx';
import Header from './Header.jsx';
import FiveDay from './FiveDay.jsx';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 'test',
      name: 'TTTTEST'
      /* location: {
       *   flagImage: 'test',
       *   countryCode: 'TH'
       * }*/
    }
  }

  render() {
    return (
      <div className="App">
        <SettingsBar
          name='Test'
          location={{ code: 'th' }}
        />
        <Header />
        <FiveDay />
      </div>
    );
  }
}

export default App;

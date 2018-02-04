import React, { Component } from 'react';
import SettingsBar from './SettingsBar.jsx';
import Header from './Header.jsx';
import SubHeader from './SubHeader.jsx';
import ExtendedForecast from './ExtendedForecast.jsx';
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
        <SubHeader />
        <ExtendedForecast
          start={6}
          end={10}
          step={5}
          maxPredictionSpan={90}
        />
      </div>
    );
  }
}

export default App;

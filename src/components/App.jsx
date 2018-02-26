import React, { Component } from 'react';
import { connect } from 'react-redux';
import SettingsBar from './SettingsBar.jsx';
/* import Header from './Header.jsx';
 * import SubHeader from './SubHeader.jsx';
 * import ExtendedForecast from './ExtendedForecast.jsx';*/
import '../styles/App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <SettingsBar
          breadcrumbs={this.props.breadcrumbs}
        />
        {/* <Header />
            <SubHeader />
            <ExtendedForecast
            start={6}
            end={10}
            step={5}
            maxPredictionSpan={90}
            /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    breadcrumbs: state.locationSettings.breadcrumbs
  };
};

App = connect(mapStateToProps)(App);

export default App;

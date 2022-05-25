import React from 'react';
import ReactDOM from 'react-dom/client';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  state = { lat: null, lng: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat && this.state.lng) {
      return (
        <div>
          <SeasonDisplay lat={this.state.lat} lng={this.state.lng} />
        </div>
      );
    }
    return <Spinner message='Please accept location request' />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

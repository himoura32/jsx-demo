import React from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      lng: null,
      errorMessage: '',
    };

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

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat && this.state.lng) {
      return (
        <div>
          <div>Latitude: {this.state.lat}</div>
          <div>Longitude: {this.state.lng}</div>
        </div>
      );
    }
    return <div>Loading...</div>;

    // return (
    //   <>
    //     <div>Latitude: {this.state.lat}</div>
    //     <div>Longitude: {this.state.lng}</div>
    //     {this.state.errorMessage && <div>Error: {this.state.errorMessage}</div>}
    //   </>
    // );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

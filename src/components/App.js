import React from "react";

//import react component.
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";
class App extends React.Component {
  //the first constructor function.

  state = { latitude: null, errorMessage: "" };
  // constructor(props) {
  //   super(props);
  //   this.state = { latitude: null, errorMessage: "" };
  // }

  //initial data loading.
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
        });
      },
      (error) =>
        this.setState({
          errorMessage: error.message,
        })
    );
  }

  //
  render() {
    if (this.state.latitude && !this.state.errorMessage) {
      return (
        <div>
          <SeasonDisplay latitude={this.state.latitude} />
        </div>
      );
    }
    if (!this.state.latitude && this.state.errorMessage) {
      return (
        <div>
          <h1>error: {this.state.errorMessage}</h1>
        </div>
      );
    }
    return <Loader />;
  }
}

export default App;

import React from "react";
import axios from "axios";

import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { imageList: [] };
  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term,
      },
    });
    this.setState({ imageList: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "30px" }}>
        <SearchBar searchSubmit={this.onSearchSubmit} />
        <ImageList imageList={this.state.imageList} />
      </div>
    );
  }
}

export default App;

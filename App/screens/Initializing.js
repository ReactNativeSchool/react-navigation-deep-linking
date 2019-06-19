import React from "react";

class Initializing extends React.Component {
  componentDidMount() {
    this.props.navigation.navigate("MainApp");
  }

  render() {
    return null;
  }
}

export default Initializing;

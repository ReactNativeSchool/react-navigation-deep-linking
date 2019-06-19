import React from "react";
import { ActivityIndicator } from "react-native";

import { List, ListItem } from "../components/List";

class ListScreen extends React.Component {
  state = {
    loading: true,
    list: []
  };

  componentDidMount() {
    fetch("https://swapi.co/api/people")
      .then(res => res.json())
      .then(res => {
        this.setState({
          loading: false,
          list: res.results
        });
      });
  }

  render() {
    if (this.state.loading) {
      return <ActivityIndicator size="large" />;
    }

    return (
      <List
        data={this.state.list}
        keyExtractor={item => item.url}
        renderItem={({ item, index }) => (
          <ListItem
            title={item.name}
            isOdd={index % 2}
            onPress={() => this.props.navigation.navigate("Details", { item })}
          />
        )}
      />
    );
  }
}

export default ListScreen;

import React from "react";
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";
import { Linking } from "expo";

import Initializing from "./screens/Initializing";
import List from "./screens/List";
import Details from "./screens/Details";

const MainApp = createStackNavigator({
  List: {
    screen: List,
    navigationOptions: {
      headerTitle: "People"
    },
    path: "list"
  },
  Details: {
    screen: Details,
    navigationOptions: {
      headerTitle: "Details"
    },
    path: "details/:personId"
  }
});

const App = createSwitchNavigator({
  Initializing,
  MainApp: {
    screen: MainApp,
    path: ""
  }
});

const AppContainer = createAppContainer(App);

export default () => {
  const prefix = Linking.makeUrl("/");
  console.log(prefix);
  return <AppContainer uriPrefix={prefix} />;
};

import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";

import Initializing from "./screens/Initializing";
import List from "./screens/List";
import Details from "./screens/Details";

const MainApp = createStackNavigator({
  List: {
    screen: List,
    navigationOptions: {
      headerTitle: "People"
    }
  },
  Details: {
    screen: Details,
    navigationOptions: {
      headerTitle: "Details"
    }
  }
});

const App = createSwitchNavigator({
  Initializing,
  MainApp
});

export default createAppContainer(App);

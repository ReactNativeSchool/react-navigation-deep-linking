import React from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5"
  },
  section: {
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#E4E4E4",
    borderBottomWidth: 1,
    borderBottomColor: "#E4E4E4",
    padding: 14
  },
  titleText: {
    fontWeight: "600",
    fontSize: 18,
    color: "#4A4A4A",
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 14
  },
  text: {
    fontSize: 16,
    color: "#4A4A4A",
    marginBottom: 20
  }
});

class DetailsScreen extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    const item = this.props.navigation.getParam("item", {});

    if (Object.keys(item).length === 0) {
      const personId = this.props.navigation.getParam("personId", 1);
      fetch(`https://swapi.co/api/people/${personId}`)
        .then(res => res.json())
        .then(res => {
          const data = [];

          Object.keys(res).forEach(key => {
            data.push({ key, value: `${res[key]}` });
          });

          this.setState({ data });
        });
    } else {
      const data = [];

      Object.keys(item).forEach(key => {
        data.push({ key, value: `${item[key]}` });
      });

      this.setState({ data });
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.titleText}>Info</Text>

          <View style={styles.section}>
            {this.state.data.map(data => (
              <Text style={styles.text} key={data.key}>{`${data.key}: ${
                data.value
              }`}</Text>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default DetailsScreen;

import React, { Component } from "react";
import { Text, Button, SafeAreaView } from "react-native";

export default class HomeScreen extends Component {
  render() {
    const { navigation } = this.props;
    const goToSetting = () => {
      navigation.navigate("Setting");
    };
    return (
      <SafeAreaView>
        <Text>Estamos en la HomeScreen</Text>
        <Text>Estamos en la HomeScreen</Text>
        <Text>Estamos en la HomeScreen</Text>
        <Text>Estamos en la HomeScreen</Text>
        <Text>Estamos en la HomeScreen</Text>
        <Text>Estamos en la HomeScreen</Text>
        <Text>Estamos en la HomeScreen</Text>
        <Text>Estamos en la HomeScreen</Text>
        <Text>Estamos en la HomeScreen</Text>
        <Button onPress={goToSetting} title="Ir a ajustes" />
      </SafeAreaView>
    );
  }
}

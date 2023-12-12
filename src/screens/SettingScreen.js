import React, { Component } from "react";
import { Button } from "react-native";
import { Text, SafeAreaView } from "react-native";

export default class SettingScreen extends Component {
  render() {
    const { navigation } = this.props;
    const goToPage = (pageName) => {
      navigation.navigate(pageName);
    };
    return (
      <SafeAreaView>
        <Text>Estamos en SettingScreen</Text>
        <Text>Estamos en SettingScreen</Text>
        <Text>Estamos en SettingScreen</Text>
        <Text>Estamos en SettingScreen</Text>
        <Text>Estamos en SettingScreen</Text>
        <Text>Estamos en SettingScreen</Text>
        <Text>Estamos en SettingScreen</Text>
        <Text>Estamos en SettingScreen</Text>
        <Text>Estamos en SettingScreen</Text>
        <Button onPress={() => goToPage("Home")} title="Ir a Home" />
      </SafeAreaView>
    );
  }
}

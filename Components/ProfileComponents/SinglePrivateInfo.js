import React from "react";
/** Components */
import { View, Text } from "react-native";
/** Styles */
import containers from "../../Styles/Containers";
import texts from "../../Styles/Texts";

export default function singlePrivateInfo({ title, info }) {
  return (
    <View style={containers.singlePrivateInfoContainer}>
      <View style={containers.singlePrivateInfoHeaderContainer}>
        <Text style={texts.singlePrivateInfoHeaderText}> {title} </Text>
      </View>
      <View style={containers.singlePrivateInfoBodyContainer}>
        <Text style={texts.singlePrivateInfoHeaderText}> {info} </Text>
      </View>
    </View>
  );
}

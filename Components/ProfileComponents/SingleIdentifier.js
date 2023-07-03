import React from "react";
/** Styles */
import containers from "../../Styles/Containers";
/** Components */
import { View, Text, TextInput } from "react-native";

export default function SingleIdentifier({
  title,
  placeholderText,
  id,
  update,
  flexHeader,
}) {
  return (
    <View style={containers.singleIdentifierContainer}>
      <View
        style={[
          containers.singleIdentifierTitleContainer,
          { flex: flexHeader },
        ]}
      >
        <Text>{title}</Text>
      </View>
      <View style={containers.singleIdentifierInputContainer}>
        <TextInput
          placeholder={placeholderText}
          placeholderTextColor="grey"
          style={{ backgroundColor: "lightblue" }}
          onChangeText={(text) => {
            if (id === "name" || id === "birthday") {
              update(text);
            } else {
              update(parseInt(text));
            }
          }}
        ></TextInput>
      </View>
    </View>
  );
}

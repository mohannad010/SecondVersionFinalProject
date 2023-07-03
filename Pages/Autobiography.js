import React from "react";
/** Components */
import { View, Text, TextInput } from "react-native";
/** Styles */
import containers from "../Styles/Containers";
/** Hooks */
import { useState } from "react";

export default function Autobiography() {
  const [count, setCount] = useState(0);
  // header from the tab navigator
  return (
    <View style={[containers.pageContainer, { marginLeft: 10 }]}>
      <Text>This page will allow your to write your Autobiograph</Text>
      <TextInput
        placeholder="Write your autoBiography here"
        placeholderTextColor="grey"
        style={{ backgroundColor: "lightblue" }}
        onChangeText={(text) => {
          let cnt = 0;
          for (let i = 0; i < text.length; i++) {
            if (text[i] != " ") {
              cnt++;
            }
          }
          setCount(cnt);
        }}
      ></TextInput>
      <Text>Number of words Characters: {count}</Text>
    </View>
  );
  // bottom menu from the tab navigator
}

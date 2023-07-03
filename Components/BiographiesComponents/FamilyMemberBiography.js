import React from "react";
/** Styles */
import containers from "../../Styles/Containers";
import texts from "../../Styles/Texts";
/** Components */
import { View, Text, TextInput } from "react-native";
/** Hooks */
import { useState } from "react";
import { useFamilyValue } from "../../Contexts/FamilyContext";

export default function FamilyMemberBiography({ id }) {
  const { currentFamilyValue } = useFamilyValue();
  const [count, setCount] = useState(0);
  let name = "";
  if (id === "father") {
    name = currentFamilyValue.fatherName;
  } else if (id === "mother") {
    name = currentFamilyValue.motherName;
  } else if (id === "firstSibling") {
    name = currentFamilyValue.firstSiblingName;
  } else if (id === "secondSibling") {
    name = currentFamilyValue.secondSiblingName;
  }
  return (
    <View style={containers.familyMemberContainer}>
      <View style={containers.familyMemberTitleContainer}>
        <Text style={texts.familyMemberTitleText}> {name} </Text>
      </View>
      <View style={containers.familyMemberBiographyContainer}>
        <TextInput
          placeholder="Write the Biography here"
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
        <Text>Number of Characters: {count}</Text>
      </View>
    </View>
  );
}

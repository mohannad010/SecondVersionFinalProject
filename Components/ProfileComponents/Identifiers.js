import React from "react";
/** React Components */
import { View, Text, Button } from "react-native";
import SingleIdentifier from "./SingleIdentifier";
/** Styles */
import containers from "../../Styles/Containers";
import texts from "../../Styles/Texts";
/** Hooks */
import { useValue } from "../../Contexts/ValueContext"; // Global
import { useState } from "react"; // Local

export default function Identifiers({ storeData }) {
  // this will be set after you change the text in the TextInput component in SingleIdentifier.js
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [age, setAge] = useState(0);
  const [numberOfSiblings, setNumberOfSiblings] = useState(0);
  const { setCurrentValue } = useValue();
  const updateName = (text) => {
    setName(text);
  };
  const updateAge = (text) => {
    setAge(text);
  };
  const updateBirthday = (text) => {
    setBirthday(text);
  };
  const updateNumberOfSiblings = (text) => {
    setNumberOfSiblings(text);
  };

  return (
    <View style={containers.identifiersContainer}>
      <View style={containers.identifiersHeaderContainer}>
        <Text style={texts.identifiersHeaderText}>Personal Information</Text>
      </View>
      <SingleIdentifier
        title="Name"
        placeholderText={"Enter name here"}
        id="name"
        update={updateName}
      />
      <SingleIdentifier
        title="Birthday"
        placeholderText={"Enter birthday here"}
        id="birthday"
        update={updateBirthday}
      />
      <SingleIdentifier
        title="Age"
        placeholderText={"Enter age here"}
        id="age"
        update={updateAge}
      />
      <SingleIdentifier
        title="Number of siblings you want to write about (for now only up to two siblings is available)"
        placeholderText={"Enter number here"}
        id="number of siblings"
        update={updateNumberOfSiblings}
        flexHeader={2}
      />
      <Button
        onPress={() => {
          setCurrentValue({
            name: name,
            birthday: birthday,
            age: age,
            numberOfSiblings: numberOfSiblings,
          });
          storeData({
            name: name,
            birthday: birthday,
            age: age,
            numberOfSiblings: numberOfSiblings,
          }); // you have to press twice for this to work
        }}
        title="save changes"
        color="#841584"
      ></Button>
    </View>
  );
}

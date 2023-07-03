import React from "react";
/** Hooks */
import { useState } from "react";
import { useValue } from "../../Contexts/ValueContext"; // Global
import { useFamilyValue } from "../../Contexts/FamilyContext"; // Global
/** Components */
import { View, Text, TextInput, Button } from "react-native";
/** Styles */
import containers from "../../Styles/Containers";
import texts from "../../Styles/Texts";

export default function FamilyTree({ numberOfSiblings, storeFamilyData }) {
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [firstSiblingName, setFisrtSiblingName] = useState("");
  const [secondSiblingName, setSecondSiblingName] = useState("");
  //const [SiblingsNames, setSiblingsNames] = useState([]);
  const { setCurrentFamilyValue } = useFamilyValue();
  const SiblingIdentifierItem = numberOfSiblings.map((number) => {
    return (
      <View style={containers.singleIdentifierContainer} key={number}>
        <Text style={containers.singleIdentifierTitleContainer}>
          Sibling {number + 1} Name:
        </Text>
        <View style={containers.singleIdentifierInputContainer}>
          <TextInput
            placeholder="Enter Sibling's name"
            placeholderTextColor="grey"
            style={{ backgroundColor: "lightblue" }}
            onChangeText={(text) => {
              if (number === 0) {
                setFisrtSiblingName(text);
              } else if (number === 1) {
                setSecondSiblingName(text);
              }
              //setSiblingsNames(SiblingsNames.concat([text]));
            }}
          ></TextInput>
        </View>
      </View>
    );
  });

  return (
    <View style={containers.familyTreeContainer}>
      <View style={containers.familyTreeHeaderContainer}>
        <Text style={texts.familyTreeHeaderText}>
          Nuclear Family Tree Information
        </Text>
      </View>
      <View style={containers.familyTreeBodyContainer}>
        <View style={containers.familyTreeFirstLevelContainer}>
          <View style={containers.singleIdentifierContainer}>
            <Text style={containers.singleIdentifierTitleContainer}>
              Father Name:
            </Text>
            <View style={containers.singleIdentifierInputContainer}>
              <TextInput
                placeholder="Enter Father's name"
                placeholderTextColor="grey"
                style={{ backgroundColor: "lightblue" }}
                onChangeText={(text) => {
                  setFatherName(text);
                }}
              ></TextInput>
            </View>
          </View>
          <View style={containers.singleIdentifierContainer}>
            <Text style={containers.singleIdentifierTitleContainer}>
              Mother Name:
            </Text>
            <View style={containers.singleIdentifierInputContainer}>
              <TextInput
                placeholder="Enter Mother's name"
                placeholderTextColor="grey"
                style={{ backgroundColor: "lightblue" }}
                onChangeText={(text) => {
                  setMotherName(text);
                }}
              ></TextInput>
            </View>
          </View>
        </View>
        <View style={containers.familyTreeSecondLevelContainer}>
          {SiblingIdentifierItem}
        </View>
        <Button
          onPress={() => {
            setCurrentFamilyValue({
              fatherName: fatherName,
              motherName: motherName,
              firstSiblingName: firstSiblingName,
              secondSiblingName: secondSiblingName,
            });
            storeFamilyData({
              fatherName: fatherName,
              motherName: motherName,
              firstSiblingName: firstSiblingName,
              secondSiblingName: secondSiblingName,
            });
          }}
          title="save changes"
          color="#a881af"
        ></Button>
      </View>
    </View>
  );
}

import React from "react";
/** Styles */
import containers from "../../Styles/Containers";
import texts from "../../Styles/Texts";
/** Components */
import { View, Text } from "react-native";
import SinglePrivateInfo from "./SinglePrivateInfo";
/** Hooks */
import { useValue } from "../../Contexts/ValueContext";

export default function PrivateInfo() {
  const { currentValue } = useValue();
  return (
    <View style={containers.privateInfoContainer}>
      <View style={containers.privateInfoBodyContainer}>
        <SinglePrivateInfo title="Name" info={"" + currentValue.name} />
        <SinglePrivateInfo title="Birthday" info={currentValue.birthday} />
        <SinglePrivateInfo title="Age" info={currentValue.age} />
        <SinglePrivateInfo
          title="Number of Siblings"
          info={currentValue.numberOfSiblings}
        />
      </View>
    </View>
  );
}

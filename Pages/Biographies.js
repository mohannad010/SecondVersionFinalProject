import React from "react";
/** Components */
import { View, Text } from "react-native";
import FamilyMemberBiography from "../Components/BiographiesComponents/FamilyMemberBiography";
/** Styles */
import containers from "../Styles/Containers";
/** Styles */
import texts from "../Styles/Texts";

export default function Biographies() {
  // header from the tab navigator
  return (
    <View style={containers.pageContainer}>
      <View style={containers.BiographiesTitleContainer}>
        <Text style={texts.BiographiesTitleText}>
          This page will allow your to write Biographies
        </Text>
      </View>
      <View style={containers.BiographiesBodyContainer}>
        <FamilyMemberBiography id="father" />
        <FamilyMemberBiography id="mother" />
        <FamilyMemberBiography id="firstSibling" />
        <FamilyMemberBiography id="secondSibling" />
      </View>
    </View>
  );
  // bottom menu from the tab navigator
}

import React from "react";
/** Pages */
import Profile from "./Pages/Profile";
import AutoBiography from "./Pages/AutoBiography";
import Biographies from "./Pages/Biographies";
/** Navigation */
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
/** Contexts */
import ValueProvider from "./Contexts/ValueContext";
import FamilyProvider from "./Contexts/FamilyContext";

const Tab = createBottomTabNavigator();

export default function App() {
  const personalData = { name: "", birthday: "", age: 0, numberOfSiblings: 0 };
  const familyData = {
    fatherName: "",
    motherName: "",
    firstSiblingName: "",
    secondSiblingName: "",
  };
  return (
    <FamilyProvider value={familyData}>
      <ValueProvider value={personalData}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="profile" component={Profile} />
            <Tab.Screen name="Autobiography" component={AutoBiography} />
            <Tab.Screen name="Biographies" component={Biographies} />
          </Tab.Navigator>
        </NavigationContainer>
      </ValueProvider>
    </FamilyProvider>
  );
}

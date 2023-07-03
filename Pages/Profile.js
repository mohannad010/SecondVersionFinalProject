import React from "react";
/** Hooks */
import { useState } from "react"; // Local
import { useValue } from "../Contexts/ValueContext"; // Global
import { useFamilyValue } from "../Contexts/FamilyContext";
import { useEffect } from "react";
/** Components */
import { View } from "react-native";
/** Styles */
import containers from "../Styles/Containers";
import Identifiers from "../Components/ProfileComponents/Identifiers";
import PrivateInfo from "../Components/ProfileComponents/PrivateInfo";
import FamilyTree from "../Components/ProfileComponents/FamilyTree";
/** Asynchronous Storage (Persistent Storage) */
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = () => {
  const { currentFamilyValue, setCurrentFamilyValue } = useFamilyValue();
  const { currentValue, setCurrentValue } = useValue();
  const [numberOfSiblings, setNumberOfSiblings] = useState([]);
  useEffect(() => {
    getData();
    getFamilyData();
  }, []);
  const getData = async () => {
    try {
      // The '@privateInfo' can be any string
      const jsonValue = await AsyncStorage.getItem("@privateInfo");
      let data = null;
      if (jsonValue != null) {
        data = JSON.parse(jsonValue);
        setCurrentValue(data);
        let temp = [];
        for (let i = 0; i < data.numberOfSiblings; i++) {
          temp.push(i);
          setNumberOfSiblings(temp);
        }
        console.log("just set Private Info");
      } else {
        console.log("just read a null value from Storage");
        // this happens the first time the app is loaded
        // as there is nothing in storage...
        setCurrentValue({});
      }
    } catch (e) {
      console.log("error in getData ");
      // this shouldn't happen, but its good practice
      // to check for errors!
      console.dir(e);
      // error reading value
    }
  };
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@privateInfo", jsonValue);
      console.log("just stored " + jsonValue);
    } catch (e) {
      console.log("error in storeData ");
      console.dir(e);
      // saving error
    }
  };
  const getFamilyData = async () => {
    try {
      // The '@familyInfo' can be any string
      const jsonValue = await AsyncStorage.getItem("@familyInfo");
      let data = null;
      if (jsonValue != null) {
        data = JSON.parse(jsonValue);
        setCurrentFamilyValue(data);
        console.log("just set family Info");
      } else {
        console.log("just read a null value from Storage");
        // this happens the first time the app is loaded
        // as there is nothing in storage...
        setCurrentFamilyValue({});
      }
    } catch (e) {
      console.log("error in getData ");
      // this shouldn't happen, but its good practice
      // to check for errors!
      console.dir(e);
      // error reading value
    }
  };

  const storeFamilyData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@familyInfo", jsonValue);
      console.log("just stored " + jsonValue);
    } catch (e) {
      console.log("error in storeData ");
      console.dir(e);
      // saving error
    }
  };
  // header from the tab navigator
  return (
    <View style={containers.pageContainer}>
      <PrivateInfo />
      <View style={containers.bodyContainer}>
        <Identifiers storeData={storeData} />
        <FamilyTree
          numberOfSiblings={numberOfSiblings}
          storeFamilyData={storeFamilyData}
        />
      </View>
    </View>
  );
  // bottom menu from the tab navigator
};

export default Profile;

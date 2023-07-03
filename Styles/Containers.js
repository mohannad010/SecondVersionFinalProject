import { StyleSheet } from "react-native";

const containers = StyleSheet.create({
  pageContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  privateInfoContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "bisque",
  },
  privateInfoBodyContainer: {
    flex: 10,
    flexDirection: "row",
  },
  singlePrivateInfoContainer: {
    flex: 1,
    flexDirection: "column",
    textAlign: "center",
  },
  singlePrivateInfoHeaderContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  singlePrivateInfoBodyContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  bodyContainer: {
    flex: 5,
    flexDirection: "row",
    backgroundColor: "aliceblue",
  },
  identifiersContainer: {
    flex: 1,
    flexDirection: "column",
  },
  identifiersHeaderContainer: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  singleIdentifierContainer: {
    flex: 1,
    flexDirection: "row",
  },
  singleIdentifierTitleContainer: {
    flex: 1,
    flexDirection: "column",
    //textAlign: "left",
    //justifyContent: "flex-start",
    marginLeft: 30,
  },
  singleIdentifierInputContainer: {
    flex: 3,
  },
  familyTreeContainer: {
    flex: 1,
    flexDirection: "column",
  },
  familyTreeHeaderContainer: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  familyTreeBodyContainer: {
    flex: 3.6,
    flexDirection: "column",
  },
  familyTreeFirstLevelContainer: {
    flex: 1,
  },
  familyTreeSecondLevelContainer: {
    flex: 1,
  },
  BiographiesTitleContainer: { margin: 10 },
  BiographiesBodyContainer: {
    marginLeft: 10,
    flex: 1,
    flexDirection: "column",
  },
  familyMemberContainer: {
    flex: 1,
    flexDirection: "column",
  },
  familyMemberTitleContainer: {
    flex: 0.6,
  },
  familyMemberBiographyContainer: {
    flex: 3,
  },
});

export default containers;

import React from "react";
/** Hooks */
import { useState, useContext, createContext } from "react";

const FamilyContext = createContext(null);

const FamilyProvider = ({ value, children }) => {
  const [currentFamilyValue, setCurrentFamilyValue] = useState(value);

  return (
    <FamilyContext.Provider
      value={{ currentFamilyValue, setCurrentFamilyValue }}
    >
      {children}
    </FamilyContext.Provider>
  );
};

export default FamilyProvider;
export const useFamilyValue = () => useContext(FamilyContext);

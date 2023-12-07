import { createContext, useState, useContext } from "react";
const DatabaseContext = createContext();

export const DatabaseProvider = ({ children }) => {
  const [selectedDatabase, setSelectedDatabase] = useState(""); // Initialize with an empty string or default database

  return (
    <DatabaseContext.Provider value={{ selectedDatabase, setSelectedDatabase }}>
      {children}
    </DatabaseContext.Provider>
  );
};

export const useDatabase = () => {
  const context = useContext(DatabaseContext);
  if (!context) {
    throw new Error("useDatabase must be used within a DatabaseProvider");
  }
  return context;
};

import { createContext, useState, useContext, useEffect } from "react";
const DatabaseContext = createContext();

export const DatabaseProvider = ({ children }) => {
  const [selectedDatabase, setSelectedDatabase] = useState("mongodb"); // Initialize with an empty string or default database

  useEffect(() => {
    // Save selectedDatabase to localStorage whenever it changes
    localStorage.setItem("selectedDatabase", selectedDatabase);
  }, [selectedDatabase]);

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

import { useDatabase } from "../context/DatabaseContext";

export default function DatabaseToggle() {
  const { selectedDatabase, setSelectedDatabase } = useDatabase();

  const handleDatabaseChange = (database: any) => {
    setSelectedDatabase(database);
  };

  return (
    <div
      className="inline-flex rounded-md z-50 shadow-sm fixed bottom-10 left-5 p-4"
      role="group"
    >
      <button
        type="button"
        className={`px-4 py-2 text-sm font-medium ${
          selectedDatabase === "mongodb"
            ? "bg-blue-500 text-white"
            : "bg-white text-gray-900"
        } border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white`}
        onClick={() => handleDatabaseChange("mongodb")}
      >
        MongoDB
      </button>
      <button
        type="button"
        className={`px-4 py-2 text-sm font-medium ${
          selectedDatabase === "sequelize"
            ? "bg-blue-500 text-white"
            : "bg-white text-gray-900"
        } border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white`}
        onClick={() => handleDatabaseChange("sequelize")}
      >
        MySQL
      </button>
      <button
        type="button"
        className={`px-4 py-2 text-sm font-medium ${
          selectedDatabase === "neo4j"
            ? "bg-blue-500 text-white"
            : "bg-white text-gray-900"
        } border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white`}
        onClick={() => handleDatabaseChange("neo4j")}
      >
        Neo4J
      </button>
    </div>
  );
}

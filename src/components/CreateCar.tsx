import React from "react";
import axiosInstance from "../utils/axiosInstance";

export default function CreateCar({ closeModal, addCar }: any) {
  const [name, setName] = React.useState("");
  const [model, setModel] = React.useState("");
  const [year, setYear] = React.useState("");
  const [price, setPrice] = React.useState("");

  const handleCreateCar = () => {
    const newCar = {
      Make: name, // Mapping 'name' to 'Make'
      Model: model, // Mapping 'model' to 'Model'
      Year: year, // Mapping 'year' to 'Year'
      RentalRate: price, // Mapping 'price' to 'RentalRate'
    };
    console.log(newCar);
    axiosInstance.post("/api/cars/", newCar).then((res) => {
      console.log(res);
      addCar(newCar);
      closeModal();
    });
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-75">
      <div className="bg-white w-1/2 p-6 rounded-lg">
        <h2 className="text-lg font-bold mb-4">Opret ny bil</h2>
        {/* Your form for creating a new car */}
        {/* Example form inputs */}
        <input
          type="text"
          placeholder="Car Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded-md px-3 py-2 mb-3"
        />
        <input
          type="text"
          placeholder="Bil model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="w-full border rounded-md px-3 py-2 mb-3"
        />

        <input
          type="text"
          placeholder="Bil Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="w-full border rounded-md px-3 py-2 mb-3"
        />

        <input
          type="text"
          placeholder="Bil Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border rounded-md px-3 py-2 mb-3"
        />

        {/* Add more inputs as needed */}
        <div className="flex justify-end">
          <button
            onClick={closeModal}
            className="px-4 py-2 mr-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
          >
            Cancel
          </button>
          <button
            onClick={handleCreateCar}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Create Car
          </button>
        </div>
      </div>
    </div>
  );
}

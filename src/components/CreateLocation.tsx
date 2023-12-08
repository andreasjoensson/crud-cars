import React from "react";
import axiosInstance from "../utils/axiosInstance";

export default function CreateLocation({ closeModal, addLocation }: any) {
  const [locationName, setLocationName] = React.useState("");
  const [locationAddress, setLocationAddress] = React.useState("");

  const handleCreateLocation = () => {
    const newLocation = {
      Name: locationName,
      Address: locationAddress,
    };

    console.log(newLocation);
    axiosInstance.post("/api/location/", newLocation).then((res) => {
      console.log(res);
      addLocation(newLocation);
      closeModal();
    });
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-75">
      <div className="bg-white w-1/2 p-6 rounded-lg">
        <h2 className="text-lg font-bold mb-4">Create New Location</h2>
        <input
          type="text"
          placeholder="Location Name"
          value={locationName}
          onChange={(e) => setLocationName(e.target.value)}
          className="w-full border rounded-md px-3 py-2 mb-3"
        />
        <input
          type="text"
          placeholder="Location Address"
          value={locationAddress}
          onChange={(e) => setLocationAddress(e.target.value)}
          className="w-full border rounded-md px-3 py-2 mb-3"
        />
        <div className="flex justify-end">
          <button
            onClick={closeModal}
            className="px-4 py-2 mr-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
          >
            Cancel
          </button>
          <button
            onClick={handleCreateLocation}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Create Location
          </button>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import axiosInstance from "../utils/axiosInstance";

export default function CreateRental({ closeModal }: any) {
  const [rentalDate, setRentalDate] = React.useState("");
  const [returnDate, setReturnDate] = React.useState("");
  const [carID, setCarID] = React.useState("");
  const [customerID, setCustomerID] = React.useState("");
  const [locationID, setLocationID] = React.useState("");

  const handleCreateRental = () => {
    // Format dates using Date object
    const formattedRentalDate = new Date(rentalDate)
      .toISOString()
      .split("T")[0];
    const formattedReturnDate = new Date(returnDate)
      .toISOString()
      .split("T")[0];

    const newRental = {
      RentalDate: formattedRentalDate,
      ReturnDate: formattedReturnDate,
      CarID: carID,
      CustomerID: customerID,
      LocationID: locationID,
    };

    console.log(newRental);
    axiosInstance.post("/api/rentals/", newRental).then((res) => {
      console.log(res);
      closeModal();
    });
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-75">
      <div className="bg-white w-1/2 p-6 rounded-lg">
        <h2 className="text-lg font-bold mb-4">Create New Rental</h2>
        <input
          type="date" // Change input type to 'date' for better date handling
          placeholder="Rental Date"
          value={rentalDate}
          onChange={(e) => setRentalDate(e.target.value)}
          className="w-full border rounded-md px-3 py-2 mb-3"
        />
        <input
          type="date" // Change input type to 'date' for better date handling
          placeholder="Return Date"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
          className="w-full border rounded-md px-3 py-2 mb-3"
        />
        <input
          type="text"
          placeholder="Car ID"
          value={carID}
          onChange={(e) => setCarID(e.target.value)}
          className="w-full border rounded-md px-3 py-2 mb-3"
        />
        <input
          type="text"
          placeholder="Customer ID"
          value={customerID}
          onChange={(e) => setCustomerID(e.target.value)}
          className="w-full border rounded-md px-3 py-2 mb-3"
        />
        <input
          type="text"
          placeholder="Location ID"
          value={locationID}
          onChange={(e) => setLocationID(e.target.value)}
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
            onClick={handleCreateRental}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Create Rental
          </button>
        </div>
      </div>
    </div>
  );
}

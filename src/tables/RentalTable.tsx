import { useState } from "react";
import DeleteRental from "../components/DeleteRental";
import { Rental } from "../types/Rental";
import UpdateRental from "../components/UpdateRental";

export default function RentalTable({ rentals }: { rentals: Rental[] }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [rental, setRental] = useState<Rental>({
    RentalID: 0,
    RentalDate: "",
    ReturnDate: "",
    CarID: 0,
    CustomerID: 0,
    LocationID: 0,
  });

  const openDeleteModal = (rental: Rental) => {
    setRental(rental);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const openUpdateModal = (rental: Rental) => {
    setRental(rental);
    setShowUpdateModal(true);
  };

  const closeUpdateModal = () => {
    setShowUpdateModal(false);
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      {showDeleteModal && (
        <DeleteRental id={rental.RentalID} closeModal={closeDeleteModal} />
      )}
      {showUpdateModal && (
        <UpdateRental rental={rental} closeModal={closeUpdateModal} />
      )}
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Udlejnings dato afhentning
            </th>
            <th scope="col" className="px-6 py-3">
              Udlejnings dato retur
            </th>
            <th scope="col" className="px-6 py-3">
              Bil ID
            </th>
            <th scope="col" className="px-6 py-3">
              Kunde ID
            </th>
            <th scope="col" className="px-6 py-3">
              Lokation
            </th>
            <th scope="col" className="px-6 py-3">
              Aktioner
            </th>
          </tr>
        </thead>
        <tbody>
          {rentals.map((rental: Rental) => (
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {rental.RentalDate}
              </th>
              <td className="px-6 py-4">{rental.ReturnDate}</td>
              <td className="px-6 py-4">{rental.RentalID}</td>
              <td className="px-6 py-4">{rental.CustomerID} </td>
              <td className="px-6 py-4">{rental.LocationID} </td>

              <td className="px-6 py-4">
                <a
                  href="#"
                  onClick={() => openUpdateModal(rental)}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Rediger
                </a>
                <a
                  href="#"
                  onClick={() => openDeleteModal(rental)}
                  className="font-medium ml-3 text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Slet
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

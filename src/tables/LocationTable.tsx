import DeleteLocation from "../components/DeleteLocation";
import { useState } from "react";
import { Location } from "../types/Location";
import UpdateLocation from "../components/UpdateLocation";

export default function LocationTable({
  locations,
}: {
  locations: Location[];
}) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [location, setLocation] = useState<Location>({
    LocationID: 0,
    Name: "",
    Address: "",
  });

  const openDeleteModal = (location: Location) => {
    setLocation(location);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const openUpdateModal = (location: Location) => {
    setLocation(location);
    setShowUpdateModal(true);
  };

  const closeUpdateModal = () => {
    setShowUpdateModal(false);
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      {showDeleteModal && (
        <DeleteLocation
          id={location.LocationID}
          closeModal={closeDeleteModal}
        />
      )}
      {showUpdateModal && (
        <UpdateLocation location={location} closeModal={closeUpdateModal} />
      )}
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Navn
            </th>
            <th scope="col" className="px-6 py-3">
              Addresse
            </th>
            <th scope="col" className="px-6 py-3">
              Aktioner
            </th>
          </tr>
        </thead>
        <tbody>
          {locations.map((location: Location) => (
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {location.LocationID}
              </th>
              <td className="px-6 py-4">{location.Name}</td>
              <td className="px-6 py-4">{location.Address}</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  onClick={() => openUpdateModal(location)}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Rediger
                </a>
                <a
                  href="#"
                  onClick={() => openDeleteModal(location)}
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

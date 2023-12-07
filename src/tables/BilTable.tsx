import { useState } from "react";
import DeleteCar from "../components/DeleteCar";
import { Car } from "../types/Car";
import UpdateCar from "../components/UpdateCar";

export default function BilTable({ cars }: { cars: Car[] }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [car, setCar] = useState<Car>({
    CarID: 0,
    Make: "",
    Model: "",
    Year: "2022",
    RentalRate: "0",
  });

  const openDeleteModal = (car: Car) => {
    setCar(car);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const openUpdateModal = (car: Car) => {
    setCar(car);
    setShowUpdateModal(true);
  };

  const closeUpdateModal = () => {
    setShowUpdateModal(false);
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      {showDeleteModal && (
        <DeleteCar id={car.CarID} closeModal={closeDeleteModal} />
      )}

      {showUpdateModal && <UpdateCar car={car} closeModal={closeUpdateModal} />}
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Bil mærke
            </th>
            <th scope="col" className="px-6 py-3">
              Bil model
            </th>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Pris
            </th>
            <th scope="col" className="px-6 py-3">
              Aktioner
            </th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car: Car) => (
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {car.Make}
              </th>
              <td className="px-6 py-4">{car.Model}</td>
              <td className="px-6 py-4">{car.CarID}</td>
              <td className="px-6 py-4">{car.RentalRate} kr</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  onClick={() => openUpdateModal(car)}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Rediger
                </a>
                <a
                  href="#"
                  onClick={() => openDeleteModal(car)}
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

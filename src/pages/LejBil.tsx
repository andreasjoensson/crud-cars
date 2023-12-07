import AdminLayout from "../layouts/AdminLayout";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import RentalTable from "../tables/RentalTable";
import CreateRental from "../components/CreateRental";

export default function LejBil() {
  const [showModal, setShowModal] = useState(false);
  const [cars, setCars] = useState([]) as any[];

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const data = await axiosInstance.get("/api/rentals/");
        setCars(data.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchCars();
  }, []);

  return (
    <div>
      <AdminLayout>
        <div className="flex justify-between">
          <h1 className="text-xl font-bold">
            Her er en oversigt over alle lejede biler.
          </h1>
          <button
            onClick={openModal}
            className="px-4 py-2 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
          >
            Opret ny leje
          </button>
        </div>

        {showModal && <CreateRental closeModal={closeModal} />}

        <div className="mt-4">
          <RentalTable cars={cars} />
        </div>
      </AdminLayout>
    </div>
  );
}

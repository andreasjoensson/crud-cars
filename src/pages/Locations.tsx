import AdminLayout from "../layouts/AdminLayout";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import RentalTable from "../tables/RentalTable";
import CreateRental from "../components/CreateRental";
import CreateLocation from "../components/CreateLocation";
import LocationTable from "../tables/LocationTable";

export default function Locations() {
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
        const data = await axiosInstance.get("/api/location/");
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
            Her er en oversigt over alle udlejnings lokationer.
          </h1>
          <button
            onClick={openModal}
            className="px-4 py-2 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
          >
            Opret ny lokation
          </button>
        </div>

        {showModal && <CreateLocation closeModal={closeModal} />}

        <div className="mt-4">
          <LocationTable cars={cars} />
        </div>
      </AdminLayout>
    </div>
  );
}

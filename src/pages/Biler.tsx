import AdminLayout from "../layouts/AdminLayout";
import { useEffect, useState } from "react";
import BilTable from "../tables/BilTable";
import axiosInstance from "../utils/axiosInstance";
import CreateCar from "../components/CreateCar";
import { Car } from "../types/Car";

export default function Biler() {
  const [showModal, setShowModal] = useState(false);
  const [cars, setCars] = useState<Car[]>([]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const addCar = (car: any) => {
    setCars([...cars, car]);
  };

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const data = await axiosInstance.get("/api/cars/");
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
            Her er en oversigt over alle biler.
          </h1>
          <button
            onClick={openModal}
            className="px-4 py-2 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
          >
            Opret ny bil
          </button>
        </div>

        {showModal && <CreateCar closeModal={closeModal} addCar={addCar} />}

        <div className="mt-4">
          <BilTable cars={cars} />
        </div>
      </AdminLayout>
    </div>
  );
}

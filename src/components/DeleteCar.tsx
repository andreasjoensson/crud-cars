import axiosInstance from "../utils/axiosInstance";

export default function DeleteCar({ id, closeModal }: any) {
  const handleDeleteCar = () => {
    console.log(id);
    axiosInstance.delete(`/api/cars/${id}`).then((res) => {
      console.log(res);
      closeModal();
    });
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-75">
      <div className="bg-white w-1/2 p-6 rounded-lg">
        <div className="flex justify-between">
          <h2 className="text-lg font-bold mb-4">
            Er du sikker på du vil slette bilen med id: {id}?
          </h2>

          <button onClick={() => closeModal()}>Luk</button>
        </div>

        <button
          onClick={() => handleDeleteCar()}
          className="px-4 py-2 mr-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
        >
          Slet bil
        </button>
      </div>
    </div>
  );
}

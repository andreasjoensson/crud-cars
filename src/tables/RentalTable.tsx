export default function RentalTable({ cars }: any) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
          {cars.map((car: any) => (
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {car.RentalDate}
              </th>
              <td className="px-6 py-4">{car.ReturnDate}</td>
              <td className="px-6 py-4">{car.CarID}</td>
              <td className="px-6 py-4">{car.CustomerID} </td>
              <td className="px-6 py-4">{car.LocationID} </td>

              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Rediger
                </a>
                <a
                  href="#"
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

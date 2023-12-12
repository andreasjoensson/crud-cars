import {useState} from "react";
import axiosInstance from "../utils/axiosInstance";

export default function CreateCar({ closeModal, addCar }: any) {
  const [name, setName] =useState("");
  const [model, setModel] =useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");

  // States for multiple Accessories, a single Insurance Policy, Maintenance Records, and Traffic Violations
  const [accessories, setAccessories] = useState([{ Name: "", Description: "" }]);
  const [insuranceProvider, setInsuranceProvider] = useState("");
  const [policyNumber, setPolicyNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [maintenanceRecords, setMaintenanceRecords] = useState([{ ServiceDate: "", Description: "", Cost: "" }]);
  const [trafficViolations, setTrafficViolations] = useState([{ DateOfViolation: "", Description: "", FineAmount: "" }]);

  // Functions to handle changes in dynamic inputs
  const handleAccessoryChange = (index:number, field:any, value:any) => {
    const newAccessories = accessories.map((acc, i) => {
      if (i === index) {
        return { ...acc, [field]: value };
      }
      return acc;
    });
    setAccessories(newAccessories);
  };

  const addAccessory = () => {
    setAccessories([...accessories, { Name: "", Description: "" }]);
  };

  const handleMaintenanceRecordChange = (index:number, field:any, value:any) => {
    const newMaintenanceRecords = maintenanceRecords.map((record, i) => {
      if (i === index) {
        return { ...record, [field]: value };
      }
      return record;
    });
    setMaintenanceRecords(newMaintenanceRecords);
  };

  const addMaintenanceRecord = () => {
    setMaintenanceRecords([...maintenanceRecords, { ServiceDate: "", Description: "", Cost: "" }]);
  };

  const handleTrafficViolationChange = (index:number, field:any, value:any) => {
    const newTrafficViolations = trafficViolations.map((violation, i) => {
      if (i === index) {
        return { ...violation, [field]: value };
      }
      return violation;
    });
    setTrafficViolations(newTrafficViolations);
  };

  const addTrafficViolation = () => {
    setTrafficViolations([...trafficViolations, { DateOfViolation: "", Description: "", FineAmount: "" }]);
  };


  const handleCreateCar = () => {
    const newCar = {
      Make: name,
      Model: model,
      Year: year,
      RentalRate: price,
      Accessories: accessories,
      InsurancePolicy: {
        Provider: insuranceProvider,
        PolicyNumber: policyNumber,
        ExpirationDate: expirationDate,
      },
      MaintenanceRecords: maintenanceRecords,
      TrafficViolations: trafficViolations,
    };
    console.log(newCar);

    axiosInstance.post("/api/cars/", newCar).then((res) => {
      console.log(res);
      addCar(newCar);
      closeModal();
    });
  };


  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-75">
      <div className="bg-white w-1/2 p-6 rounded-lg">
        <h2 className="text-lg font-bold mb-4">Opret ny bil</h2>
        {/* Your form for creating a new car */}
        {/* Example form inputs */}
        <div className="grid gap-x-12 grid-cols-2">
          <div className="info">
            <h6>Bil detaljer</h6>
          <input
          type="text"
          placeholder="Car Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded-md px-3 py-2 mb-3"
        />
        <input
          type="text"
          placeholder="Bil model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="w-full border rounded-md px-3 py-2 mb-3"
        />

        <input
          type="text"
          placeholder="Bil Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="w-full border rounded-md px-3 py-2 mb-3"
        />

        <input
          type="text"
          placeholder="Bil Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border rounded-md px-3 py-2 mb-3"
        />
          </div>

          <div className="small-details">
            <h6>Tilbehør til bil</h6>
{/* Dynamic Accessories Inputs */}
{accessories.map((accessory, index) => (
  <div key={index}>
    <input type="text" className="w-full border rounded-md px-3 py-2 mb-3" placeholder="Accessory Name" value={accessory.Name} onChange={(e) => handleAccessoryChange(index, 'Name', e.target.value)} />
    <input type="text" className="w-full border rounded-md px-3 py-2 mb-3" placeholder="Accessory Description" value={accessory.Description} onChange={(e) => handleAccessoryChange(index, 'Description', e.target.value)} />
  </div>
))}
<button  className="px-4 py-2 bg-blue-600 text-white rounded-md mb-6 hover:bg-blue-700"  onClick={addAccessory}>Add Another Accessory</button>

{/* Insurance Policy Inputs */}
<h6>
  Forsikring
</h6>
<input type="text" className="w-full border rounded-md px-3 py-2 mb-3" placeholder="Insurance Provider" value={insuranceProvider} onChange={(e) => setInsuranceProvider(e.target.value)} />
<input type="text" className="w-full border rounded-md px-3 py-2 mb-3" placeholder="Policy Number" value={policyNumber} onChange={(e) => setPolicyNumber(e.target.value)} />
<input type="date" className="w-full border rounded-md px-3 py-2 mb-3" placeholder="Expiration Date" value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)} />

          </div>
      

      <div className="maintenance">
        <h6>Vedligeholdelse</h6>
{/* Dynamic Maintenance Records Inputs */}
{maintenanceRecords.map((record, index) => (
  <div key={index}>
    <input type="date" className="w-full border rounded-md px-3 py-2 mb-3" placeholder="Service Date" value={record.ServiceDate} onChange={(e) => handleMaintenanceRecordChange(index, 'ServiceDate', e.target.value)} />
    <input type="text" className="w-full border rounded-md px-3 py-2 mb-3" placeholder="Description" value={record.Description} onChange={(e) => handleMaintenanceRecordChange(index, 'Description', e.target.value)} />
    <input type="text" className="w-full border rounded-md px-3 py-2 mb-3" placeholder="Cost" value={record.Cost} onChange={(e) => handleMaintenanceRecordChange(index, 'Cost', e.target.value)} />
  </div>
))}
<button  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" onClick={addMaintenanceRecord}>Add Another Maintenance Record</button>

      </div>


      <div className="traffic mt-6">
        <h6>Traffik problemer</h6>
{/* Dynamic Traffic Violations Inputs */}
{trafficViolations.map((violation, index) => (
  <div key={index}>
    <input type="date" placeholder="Date of Violation" className="w-full border rounded-md px-3 py-2 mb-3" value={violation.DateOfViolation} onChange={(e) => handleTrafficViolationChange(index, 'DateOfViolation', e.target.value)} />
    <input type="text" placeholder="Description" className="w-full border rounded-md px-3 py-2 mb-3" value={violation.Description} onChange={(e) => handleTrafficViolationChange(index, 'Description', e.target.value)} />
    <input type="text" placeholder="Fine Amount" className="w-full border rounded-md px-3 py-2 mb-3" value={violation.FineAmount} onChange={(e) => handleTrafficViolationChange(index, 'FineAmount', e.target.value)} />
  </div>
))}
<button  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" onClick={addTrafficViolation}>Add Another Traffic Violation</button>

      </div>

        </div>



        {/* Add more inputs as needed */}
        <div className="flex justify-end">
          <button
            onClick={closeModal}
            className="px-4 py-2 mr-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
          >
            Cancel
          </button>
          <button
            onClick={handleCreateCar}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Create Car
          </button>
        </div>
      </div>
    </div>
  );
}

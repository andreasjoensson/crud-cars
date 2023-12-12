import AdminLayout from "../layouts/AdminLayout";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";

// Define an interface for your data structure
interface Stats {
  Address: string | null;
  CarID: number;
  CustomerID: number;
  Email: string;
  FirstName: string;
  LastName: string;
  Make: string;
  Model: string;
  Password: string;
  Phone: string | null;
  RentalDate: string;
  RentalID: number;
  RentalRate: string;
  ReturnDate: string;
  Year: number;
}


export default function Dashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axiosInstance.get<any>('/api/stats/');
        console.log('response', response.data)
        setStats(response.data); // Accessing the nested data
      } catch (error) {
        console.error('error', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // Or any other loading indicator
  }



  return (
    <div>
      <AdminLayout>
       {stats && (
        <div className="grid grid-cols-4">

<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="flex flex-col items-center py-10">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvectorified.com%2Fimages%2Fno-profile-picture-icon-8.jpg&f=1&nofb=1&ipt=8fb1c508c1792031be64ef7976942140aa03f0326c394e346587775cd95f4c32&ipo=images" alt="Profil billede"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{stats.FirstName} {stats.LastName}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{stats.Email}</span>
    </div>
</div>


<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="flex flex-col items-center py-10">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F426%2F079%2Foriginal%2Fvector-car-icon.jpg&f=1&nofb=1&ipt=4ac2da2b8bea54fd316fe00c847b0c6a7ecba7a5a4fcd064424cfc383dee0722&ipo=images" alt="Profil billede"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{stats.Make}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{stats.Model}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{stats.Year}</span>
    </div>
</div>


<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="flex flex-col items-center py-10">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn1.iconfinder.com%2Fdata%2Ficons%2Fflat-transport-icons-1%2F48%2FCar_Rental-1024.png&f=1&nofb=1&ipt=bbb7cdee55ed8f003673fb69b19495d1048b990cff1dbebdc8bfd03a0ae3eed8&ipo=images" alt="Profil billede"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{stats.RentalID}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{stats.RentalDate}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{stats.ReturnDate}</span>
    </div>
</div>

</div>
       )}


      </AdminLayout>
    </div>
  );
}

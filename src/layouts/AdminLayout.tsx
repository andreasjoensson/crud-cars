import DatabaseToggle from "../components/DatabaseToggle";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function AdminLayout({ children }: any) {
  return (
    <div>
      <Navbar />
      <div className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
        <Sidebar />
        <div
          id="main-content"
          className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900"
        >
          <main>
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
              {children}
            </div>
          </main>
        </div>
      </div>
      <DatabaseToggle />
    </div>
  );
}

import "./App.css";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import Form from "./pages/Form";
import EditForm from "./pages/EditForm";
import LandingPage from "./pages/LandingPage";
import DashboardFetch from "./pages/DashboardFetch";

function App() {
  return (
    <div className="flex  items-center h-full justify-center ">
      <div className="border-2 border-gray-600   p-10">
        <h1 className="font-bold"> Dashboard</h1>
        <div className="border-2 border-gray-500 ">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="home" element={<Dashboard />} />
            <Route path="Dashbouard" element={<DashboardFetch />} />
            <Route path="form" element={<Form />} />
            <Route path="edit/:id" element={<EditForm />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

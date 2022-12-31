import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { AddUser } from "./pages/AddUser";
import { AddVehicle } from "./pages/AddVehicle";
import { Bookings } from "./pages/Bookings";
import { Dashboard } from "./pages/Dashboard";
import { EditUser } from "./pages/EditUser";
import { EditVehicle } from "./pages/EditVehicle";
import { Users } from "./pages/Users";
import { Vehicles } from "./pages/Vehicles";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/vehicles/add" element={<AddVehicle />} />
          <Route path="/vehicles/edit/:id" element={<EditVehicle />} />
          <Route path="/bookings" element={<Bookings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
//import Dashboard from "./pages/Dashboard";
//import EmployeeList from "./pages/EmployeeList";
//import Chat from "./pages/Chat";
//import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;

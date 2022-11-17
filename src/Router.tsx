import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Layouts
import Dash from "./layouts/Dashboard";
import Main from "./layouts/Main";

// Main pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/not-found" />} />
        <Route path="/"  element={<Navigate to="/home" />} />
        <Route path="/home" element={<Main><Home /></Main>} />
        <Route path="/not-found" element={<Main><NotFound /></Main>} />

        {/* Dahsboard */}

        <Route path="/dashboard" element={<Dash><Home/></Dash>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

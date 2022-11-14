import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function Router(){
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="*" element={<Navigate to="/not-found" />} />
        <Route path="/"  element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

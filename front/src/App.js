import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Registrar from "./pages/Registrar";
import Logado from "./pages/Logado";
import PaginaPrivada from "./pages/PaginaPrivada";
import ProtectedRoute from "./services/ProtectedRoute";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registrar" element={<Registrar />} />
        <Route path="/logado" element={<Logado />} />
        <Route
          path="/private"
          element={
            <ProtectedRoute>
              <PaginaPrivada />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

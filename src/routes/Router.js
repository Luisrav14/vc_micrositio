import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../pages/App";
import { InicioPage } from "../pages/InicioPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<InicioPage />} />
      </Routes>
    </BrowserRouter>
  );
};

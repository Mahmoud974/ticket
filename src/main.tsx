import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Importation de BrowserRouter
import "./index.css";
import App from "./Ticket.tsx";
import RoutesConfig from "./RoutesConfig.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <RoutesConfig />
    </BrowserRouter>
  </StrictMode>
);

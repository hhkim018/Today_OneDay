import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./config/firebaseConfig";
import Histtory from "./content/Histtory";

createRoot(document.getElementById("root")).render(
  <>
    <Histtory />
    <App />
  </>
);

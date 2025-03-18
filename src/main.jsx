import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./config/firebaseConfig";
import History from "./content/History";

createRoot(document.getElementById("root")).render(
  <>
    <History />
    <App />
  </>
);

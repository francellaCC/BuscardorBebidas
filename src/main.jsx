import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { CategoriaProvider } from "./context/CategoriaProvider";
import { BebidasProvider } from "./context/BebidasProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CategoriaProvider>
      <BebidasProvider>
        <App />
      </BebidasProvider>
    </CategoriaProvider>
  </React.StrictMode>
);

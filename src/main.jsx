import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/index.css";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root")).render(
     <BrowserRouter>
     <React.StrictMode>
      <ErrorBoundary fallback={<div>Oops! Something went wrong</div>}>
        <App />
      </ErrorBoundary>
     </React.StrictMode>
     </BrowserRouter>,
);

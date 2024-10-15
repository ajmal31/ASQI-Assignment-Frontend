import { createRoot } from "react-dom/client";
import EmployeeManagement from "./pages/EmployeeManageMent";
import React from "react";

const root = createRoot(document.getElementById("root"));
// root.render(</>)
root.render(
  <React.StrictMode>
    <EmployeeManagement />
  </React.StrictMode>
);

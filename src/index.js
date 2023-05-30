import React from 'react'
import  {createRoot} from 'react-dom/client';
import App from './App';
import EmployeeProvider from './ContexrApi/EmployeeContext';
import "./Global.css";
createRoot(document.getElementById("root")).render(
    <EmployeeProvider>
        <App/>
    </EmployeeProvider>
)

// src/App.tsx
import React from "react";
import Header from "./components/Header";
import AppRoutes from "./components/Routes";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Sidebar from "./components/Sidebar";

// Main App component that renders the Header and Routes
const App: React.FC = () => {
  return (
    <div>
      <Header />
      <AppRoutes />
      <Home />
      <Sidebar />
    

    </div>
  );
};

export default App;

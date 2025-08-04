// src/App.tsx
import React from "react";
import Header from "./components/Header";
import AppRoutes from "./components/Routes";

// Main App component that renders the Header and Routes
const App: React.FC = () => {
  return (
    <div>
      <Header />
      <AppRoutes />
      
    </div>
  );
};

export default App;

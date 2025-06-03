import React, { useState } from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./pages/Login";
import Vault from "./pages/vault";
import Generator from "./pages/Generator";
import Notification from "./pages/notification";
import Settings from "./pages/settings";
import Navbar from "./component/Navbar";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return isAuthenticated ? 
    (
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Navigate to="/vault" />} />
          <Route path="/vault" element={<Vault />} />
          <Route path="/generator" element={<Generator />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        <div className="nav"><Navbar /></div>
      </div>
  ) : (
    <LoginPage onLoginSuccess={() => setIsAuthenticated(true)} />
  );
}

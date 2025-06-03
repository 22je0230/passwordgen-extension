import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import VaultIcon from "@/assets/vault-icon.svg";
import Generatoricon from "@/assets/generator-icon.svg";
import settingicon from "@/assets/Settings.svg";
import notificationicon from "@/assets/notification-icon.svg"

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (route: string) => location.pathname === route;

  return (
    <div className="navbar">
      {/* Vault */}
      <button className="nav-button" onClick={() => navigate("/vault")}>
        <img
          className={`nav-icon ${isActive("/vault") ? "active-icon" : ""}`}
          src={VaultIcon}
          alt="Vault"
        />
        <p className={`nav-label ${isActive("/vault") ? "active-text" : ""}`}>Vault</p>
      </button>

      {/* Generator */}
      <button className="nav-button" onClick={() => navigate("/generator")}>
        <img
          className={`nav-icon ${isActive("/generator") ? "active-icon" : ""}`}
          src={Generatoricon}
          alt="Generator"
        />
        <p className={`nav-label ${isActive("/generator") ? "active-text" : ""}`}>Generator</p>
      </button>

      {/* Notifications */}
      <button className="nav-button" onClick={() => navigate("/notification")}>
        <img
          className={`nav-icon ${isActive("/notification") ? "active-icon" : ""}`}
          src={notificationicon}
          alt="Notifications"
        />
        <p className={`nav-label ${isActive("/notification") ? "active-text" : ""}`}>Notifications</p>
      </button>

      {/* Settings */}
      <button className="nav-button" onClick={() => navigate("/settings")}>
        <img
          className={`nav-icon ${isActive("/settings") ? "active-icon" : ""}`}
          src={settingicon}
          alt="Settings"
        />
        <p className={`nav-label ${isActive("/settings") ? "active-text" : ""}`}>Settings</p>
      </button>
    </div>
  );
}

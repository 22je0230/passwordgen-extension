import React from "react";
import Navbar from "@/entrypoints/popup/component/Navbar";
import "./vault.css";
import solarlock from "@/assets/solar_lock-password-broken.png";
import scircle from "@/assets/Squircle.png";
import dropdown from "@/assets/dropdown.png";

export default function Vault() {
  return (
    <div className="vault-container">
      {/* Search Box */}
      <div className="search-box">
        <svg
          className="search-icon"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0z"
          ></path>
        </svg>
        <input
          type="text"
          placeholder="Search Securepasswords (⌘K)"
          className="search-input"
        />
      </div>

      {/* Category Header */}
      <div className="category">
        <p className="category-text">All items</p>
        <img src={dropdown} alt="Dropdown" />
      </div>

      {/* Empty State */}
      <div className="empty-state">
        <div className="empty-icon-wrapper">
          <img className="empty-icon" src={solarlock} alt="Lock icon" />
          <img className="squircle" src={scircle} alt="Background shape" />
        </div>
        <h2 className="empty-message">
          Search your vault for anything <br />
          you need
        </h2>
      </div>
    </div>
  );
}



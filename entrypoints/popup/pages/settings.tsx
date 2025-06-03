"use client";

import React from "react";
import userIcon from "@/assets/settingssvg/user.svg";
import exportIcon from "@/assets/settingssvg/exportvault.svg";
import webvaultIcon from "@/assets/settingssvg/securelogo.svg";
import settingsIcon from "@/assets/settingssvg/Settings.svg";
import aboutIcon from "@/assets/settingssvg/notify.svg";
import bugIcon from "@/assets/settingssvg/bug.svg";
import arrowIcon from "@/assets/settingssvg/arrow.svg";
import logoutIcon from "@/assets/settingssvg/logout.svg";
import "./settings.css";

export default function AccountPage(): JSX.Element {
  return (
    <div className="settings-container">
      <div className="profile-section">
        <img src={userIcon} alt="User" className="profile-icon" />
        <div className="profile-text">
          <span className="profile-email">johndoe@gmail.com</span>
          <span className="profile-plan">Standard plan</span>
        </div>
      </div>

      <div className="actions-section">
        <Action icon={exportIcon} label="Export vault" />
        <Action icon={webvaultIcon} label="Securepasswords Web Vault" />

        <Divider />

        <Action icon={settingsIcon} label="Account Settings" />
        <Action icon={aboutIcon} label="About Securepassword (version 1.0.1)" />
        <Action icon={bugIcon} label="Report a bug" />

        <Divider />

        <Logout icon={logoutIcon} label="Log out" />
      </div>

      {/* Optional Footer */}
      {/* <div className="settings-footer">
        <span>© 2025 Securepassword</span>
      </div> */}
    </div>
  );
}

const Action = ({
  icon,
  label,
}: {
  icon: string;
  label: string;
}) => (
  <div className="action-row">
    <div className="action-left">
      <img src={icon} alt="" className="row-icon" />
      <span className="action-label">{label}</span>
    </div>
    <img src={arrowIcon} alt="" className="row-arrow" />
  </div>
);

const Logout = ({
  icon,
  label,
}: {
  icon: string;
  label: string;
}) => (
  <div className="logout-row">
    <img src={icon} alt="Logout" className="row-icon" />
    <span className="logout-label">{label}</span>
  </div>
);

const Divider = () => <div className="divider" />;


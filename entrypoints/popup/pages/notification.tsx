"use client";

import React from "react";
import Navbar from "@/entrypoints/popup/component/Navbar";
import icon from "@/assets/Icon.svg";
import "./notification.css";

export default function NotificationsPage(): JSX.Element {
  const notifications = [
    {
      id: 1,
      text: "Get up to 3 Months of Premium by inviting friends to Secure Passwords",
      time: "1 hour ago",
    },
    {
      id: 2,
      text: "Get up to 3 Months of Premium by inviting friends to Secure Passwords",
      time: "1 hour ago",
    },
  ];

  return (
    <div className="notification-container">
      <div className="notification-header">
        <h2 className="notification-title">Notifications</h2>
      </div>

      <div className="notification-list">
        {notifications.map((n) => (
          <div key={n.id} className="notification-item">
            <img src={icon} alt="Notification Icon" className="notification-icon" />
            <div className="notification-content">
              <p className="notification-message">{n.text}</p>
              <p className="notification-time">{n.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import React, { useState, ChangeEvent } from "react";
import { ClipboardCopy, RefreshCw } from "lucide-react";
import Navbar from "@/entrypoints/popup/component/Navbar";
import "./Generator.css";

const generatePassword = (
  length: number,
  useUpper: boolean,
  useLower: boolean,
  useNumbers: boolean,
  useSymbols: boolean
): string => {
  const upper   = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower   = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+{}[]";

  let chars = "";
  if (useUpper)   chars += upper;
  if (useLower)   chars += lower;
  if (useNumbers) chars += numbers;
  if (useSymbols) chars += symbols;
  if (!chars) return "Select at least one option";

  // Ensure we have at least one number if numbers are enabled
  let pw = "";
  const numGroups = Math.floor(length / 4); // Create groups of 4 characters
  const remaining = length % 4;

  for (let i = 0; i < numGroups; i++) {
    // Add 3 letters
    for (let j = 0; j < 3; j++) {
      const letterChars = (useUpper ? upper : "") + (useLower ? lower : "");
      pw += letterChars[Math.floor(Math.random() * letterChars.length)];
    }
    // Add 1 number
    if (useNumbers) {
      pw += numbers[Math.floor(Math.random() * numbers.length)];
    }
  }

  // Add remaining characters
  for (let i = 0; i < remaining; i++) {
    pw += chars[Math.floor(Math.random() * chars.length)];
  }

  return pw;
};

export default function PasswordGenerator(): JSX.Element {
  const [length, setLength]         = useState(12);
  const [useUpper, setUseUpper]     = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useLower, setUseLower]     = useState(true);
  const [useSymbols, setUseSymbols] = useState(false);
  const [password, setPassword]     = useState(
    generatePassword(12, true, true, true, false)
  );

  const refreshPassword = (): void =>
    setPassword(generatePassword(length, useUpper, useLower, useNumbers, useSymbols));

  const copyToClipboard = (): void => {
    void navigator.clipboard.writeText(password);
  };

  // percentage for slider fill
  const pct = ((length - 6) / (32 - 6)) * 100;

  return (
    <div className="generator-container">
      <div className="generator-header">
        <div className="password-display">
          {password.split("").map((ch, i) => (
            <span
              key={i}
              className={/\d/.test(ch) ? "password-number" : "password-char"}
            >
              {ch}
            </span>
          ))}
        </div>

        <div className="header-controls">
          <div className="password-strength">
            MODERATE
          </div>

          <div className="control-buttons">
            <button onClick={refreshPassword} className="icon-button">
              <RefreshCw size={16} />
            </button>
            <button onClick={copyToClipboard} className="icon-button">
              <ClipboardCopy size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="generator-body">
        <select className="password-type-select">
          <option>Random Password</option>
        </select>

        <div className="length-control">
          <div className="length-label">
            Password Length :
          </div>
          <div className="slider-container">
            <input
              type="range"
              min={6}
              max={32}
              value={length}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setLength(Number(e.target.value))
              }
              className="length-slider"
              style={{
                background: `linear-gradient(to right, #10B981 0%, #10B981 ${pct}%, #E5E7EB ${pct}%, #E5E7EB 100%)`
              }}
            />
            <div
              className="length-value"
              style={{ left: `${pct}%` }}
            >
              {length}
            </div>
          </div>
        </div>

        <div className="toggle-options">
          {[
            ["Use uppercase", useUpper, () => setUseUpper(!useUpper)],
            ["Use numbers", useNumbers, () => setUseNumbers(!useNumbers)],
            ["Use lowercase", useLower, () => setUseLower(!useLower)],
            ["Use symbols", useSymbols, () => setUseSymbols(!useSymbols)],
          ].map(([label, enabled, toggle]) => (
            <label
              key={label as string}
              className="toggle-option"
            >
              <span className="toggle-label">{label}</span>
              <button
                onClick={toggle as () => void}
                className={`toggle-switch ${enabled ? 'active' : ''}`}
              >
                <div className="toggle-handle" />
              </button>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

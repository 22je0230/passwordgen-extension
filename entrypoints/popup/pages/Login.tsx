import React, { useState } from "react";
import img from "@/assets/imgone.svg";
import { Eye, EyeOff } from "lucide-react";
import "./login.css";

type LoginPageProps = {
  onLoginSuccess: () => void;
};

export default function LoginPage({ onLoginSuccess }: LoginPageProps) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = () => {
    console.log("Login successful");
    onLoginSuccess(); // Navigate to Vault
  };

  return (
    <div className="vault-container">
      {/* Beautiful circular icon container */}
      <div className="vault-image-container">
        <div className="vault-image-wrapper">
          <img src={img} alt="Login Icon" />
        </div>
      </div>

      {/* Sign In Heading */}
      <h3 className="vault-title">Sign in</h3>

      {/* Username Input */}
      <div className="vault-input-wrapper">
        <input
          className="vault-input"
          id="id"
          type="text"
          placeholder="Username or Email"
        />
      </div>

      {/* Password Input */}
      <div className="vault-password-wrapper">
        <input
          className="vault-input"
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="Master Password"
        />
        <span className="vault-eye-icon" onClick={togglePasswordVisibility}>
          {showPassword ? (
            <EyeOff className="vault-eye-svg" />
          ) : (
            <Eye className="vault-eye-svg" />
          )}
        </span>
      </div>

      {/* Remember Me */}
      <div className="vault-remember-wrapper">
        <input id="remember" type="checkbox" className="vault-checkbox" />
        <label htmlFor="remember" className="vault-remember-label">
          Remember me
        </label>
      </div>

      {/* Continue Button */}
      <div className="vault-button-wrapper">
        <button className="vault-button" onClick={handleLogin}>
          Continue
        </button>
      </div>

      {/* Forgot Password */}
      <div className="vault-forgot-password">
        <p>Forgot your password?</p>
      </div>
    </div>
  );
}


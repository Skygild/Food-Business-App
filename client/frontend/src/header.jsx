import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <header>
      <div className="buttons">
        <button onClick={handleSignup}>Sign up</button>
        <button onClick={handleLogin}>Log in</button>
      </div>
    </header>
  );
};

export default Header;

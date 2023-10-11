import React, { useState } from "react";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email: ", email);
    console.log("Password: ", password);
  };

  return (
    <div className="center-card">
      <form method="POST" className="account-container">
        <h2>Sign Up</h2>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Sign up</button>
      </form>
    </div>
  );
};

export default SignupPage;

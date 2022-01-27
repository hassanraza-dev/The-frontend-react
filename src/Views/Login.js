import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'

const Login = function () {
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(false)

  const onLogin = function () {

    if(email == 'admin' && password == 'admin'){
       localStorage.setItem("login", true);
        alert("Welcome to the my App")    
        navigate('/postlist')
        setUser(true)    
       }
    
    else{
        alert("Invalid Credentials")
    }
  };

  return (
    <>
      <div className="main">
        <p className="sign" align="center">
          LOGIN
        </p>
        <div className="form1">
          <input
            className="un"
            type="email"
            required
            align="center"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="pass"
            type="password"
            required
            align="center"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button type="submit" className="submit" align="center"
             onClick={onLogin}
             >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

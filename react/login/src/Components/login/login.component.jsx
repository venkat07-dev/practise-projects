import React from "react";

import "./login.css";

function Login() {
  
  const container = document.getElementById("container");
  function signup() {
    container.classList.add("right-panel-active");
    
  }
  function signin() {
    container.classList.remove("right-panel-active");
  }

  return (
    <div className="container" id="container">
      <div className="form-container sign-up-container">
        <form action="">
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="#" className="social">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#" className="social">
              <i className="fa fa-google"></i>
            </a>
            <a href="#" className="social">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button>SignUp</button>
        </form>
      </div>

      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Sign In</h1>
          <div className="social-container">
            <a href="#" className="social">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#" className="social">
              <i className="fa fa-google"></i>
            </a>
            <a href="#" className="social">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
          <span>or use your account</span>
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <a href="#">Forgot Your Password</a>

          <button>Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button className="ghost" id="signIn" onClick={signin}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your details and start journey with us</p>
            <button className="ghost" id="signUp" onClick={signup}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style/sign.css"; 

const LoginPage = () => {
  return (
    <div className="main">
      <section className="signup">
        <div className="container rounded-4 shadow">
          <div className="signup-content">
            <form method="POST" id="signup-form" className="signup-form" action="/login">
              <h1 className="form-title">Login Here</h1>
              <div className="form-group">
                <input
                  type="email"
                  className="form-input"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-input"
                  name="password"
                  id="password"
                  placeholder="Password"
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  name="submit"
                  id="submit"
                  className="form-submit"
                  value="Login"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;

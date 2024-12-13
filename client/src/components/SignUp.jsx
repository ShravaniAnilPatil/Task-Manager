import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    // Implement form submission logic here
  };

  return (
    <div className="main">
      <section className="signup">
        <div className="container rounded-4 shadow">
          <div className="signup-content">
            <form
              method="POST"
              id="signup-form"
              className="signup-form"
              action="/sign"
              onSubmit={handleSubmit}
            >
              <h1 className="form-title">Create account</h1>
              <div className="form-group">
                <input
                  type="text"
                  className="form-input"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-input"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-input"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="off"
                />
                <span toggle="#password" className="zmdi zmdi-eye field-icon toggle-password"></span>
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  name="submit"
                  id="submit"
                  className="form-submit"
                  value="Sign up"
                />
              </div>
              <div>
                <p className="loginhere">
                  Have already an account?{' '}
                  <a href="login.html" className="loginhere-link">
                    Login here
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;

import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      console.log("Passwords do not match");
    } else {
      console.log("Success");
    }
  };

  return (
    <Fragment>
      <section className="container">
        <h1 className="large text-primary">Sign Up</h1>
        <p className="lead">
          <i className="fas fa-user" /> Create Your Account
        </p>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              value={name}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
              value={password}
              onChange={e => onChange(e)}
              minLength="6"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              name="password2"
              value={password2}
              onChange={e => onChange(e)}
              minLength="6"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
        <p className="my-1">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </section>
    </Fragment>
  );
};

export default Register;

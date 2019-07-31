import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Fragment>
      <main role="main" className="container">
        <div className="starter-template">
          <h1>Bootstrap starter template</h1>
          <p className="lead">
            Use this document as a way to quickly start any new project.
            <br /> All you get is this text and a mostly barebones HTML
            document.
          </p>
          <Link className="btn btn-light m-3" to="/register">
            Sign Up
          </Link>
          <Link className="btn btn-dark m-3" to="/login">
            Login
          </Link>
        </div>
      </main>
    </Fragment>
  );
};

export default Landing;

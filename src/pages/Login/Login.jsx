import React, { useState, useEffect } from 'react';
import './Login.css';
import FormFun from './FormFun';
import validate from './Validation';


const Login = () => {
  const [redirect, setRedirect] = useState('false');

  function login() {
    console.log('No errors, submit callback called!');
  }

  const { handleSubmit, handleChange, values, errors } = FormFun(
    login,
    validate
  );

  // const handleClick = () => {
  //   history.push('/profile');
  // };

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,700"
        rel="stylesheet"
        type="text/css"
      />
      <div className="container">
        <div className="frame">
          <div className="nav">
            <ul className="links">
              <li className="signin-active">
                <a className="btn">Sign in</a>
              </li>
            </ul>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="form-signin" name="form">
              <label htmlFor="username">Username</label>
              <input
                className="form-styling"
                type="text"
                name="username"
                placeholder
                value={values.username}
                onChange={handleChange}
              />
              {errors.username && <p>{errors.username}</p>}
              <label htmlFor="password">Email</label>
              <input
                className="form-styling"
                type="text"
                name="email"
                placeholder
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <p>{errors.email}</p>}
              <label htmlFor="password">Password</label>
              <input
                className="form-styling"
                type="text"
                name="password"
                placeholder
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && <p>{errors.password}</p>}
              
              <div className="">
                <button
                  type="submit"
                  // onClick={handleClick}
                  className="btn btn-primary"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

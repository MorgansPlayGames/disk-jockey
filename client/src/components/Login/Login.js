import React from 'react';

export function Login(props) {
  return (
    <>
          <div>Login</div>
          
          <form className="mt-6 login-form" onSubmit={props._handleSubmit}>
            <label
              for="username"
            >
              username
                </label>
            <input
              id="username"
              type="text"
              name="username"
              placeholder="username"
              required
              value={props.user.username}
              onChange={props._handleChange}
            />
            <label
              for="password"
            >
              Password
                </label>
            <input
              id="password-login"
              type="password"
              name="password"
              placeholder="********"
              required
              value={props.user.password}
              onChange={props._handleChange}
            />
            <button
              type="submit"
            >
              Sign in
                </button>
            <p>
            <a id="signup" onClick={props.togglePage}>
                Not a Member? Click here
                </a>
            </p>
          </form>
          </>
  );
};

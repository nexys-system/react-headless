import React from "react";

import * as Credentials from "../../lib/auth/credentials";
import * as Logout from "../../lib/auth/logout";

import { Routes, Route, Navigate } from "react-router-dom";

import AuthWrapper from "../../lib/auth/Wrapper";

const App = () => {
  // const [isLoggedIn, setLoggedIn] = React.useState<boolean>(false);

  return (
    <>
      <h2>Auth</h2>

      <button
        className="btn btn-primary btn-sm"
        onClick={() => {
          Credentials.set({ firstName: "John" }, [], "en-US");
          //   setLoggedIn(true);
        }}
      >
        Login
      </button>

      <button
        className="btn btn-secondary btn-sm"
        onClick={() => {
          Logout.user();
          //  setLoggedIn(false);
        }}
      >
        Logout
      </button>

      <ul>
        <li>{JSON.stringify(Credentials.isDefined())}</li>
      </ul>
    </>
  );
};

export default AuthWrapper({
  App,
  permission: "app",
  options: {
    timeout: 2000,
    unauthorizedRedirectUrl: "/login",
    redirectUrl: "/login",
    logoutUrl: "/login",
  },
});

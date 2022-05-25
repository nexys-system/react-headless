import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

import * as Credentials from "./credentials";
import * as Store from "../store";
import { useIdleTimer } from "react-idle-timer";
import { REDIRECT_URI } from "./conf";

import * as Logout from "./logout";

const optionsDefault = {
  timeout: 60000, // 60 s
  redirectUrl: "/login",
  unauthorizedRedirectUrl: "/unauthorized",
  logoutUrl: "/logout",
};

export interface Options {
  timeout: number;
  redirectUrl: string;
  unauthorizedRedirectUrl: string;
  logoutUrl: string;
  onLogout?: () => void;
}

const Wrapper =
  ({
    App,
    permission,
    options = optionsDefault,
  }: {
    App: () => JSX.Element;
    permission?: string;
    options?: Options;
  }) =>
  (): JSX.Element => {
    const navigate = useNavigate();
    const permissions = Credentials.getPermissions();
    const { pathname } = window.location;
    const { redirectUrl, unauthorizedRedirectUrl } = options;

    // user not authenticated
    if (!permissions) {
      Store.set(REDIRECT_URI, pathname);
      return <Navigate to={redirectUrl} />;
    }

    // user unauthorized
    if (permission && !permissions.includes(permission)) {
      Store.set(REDIRECT_URI, pathname);
      return <Navigate to={unauthorizedRedirectUrl} />;
    }

    // user authorized and REDIRCT_URI flag set => user is redirected
    const redirectUri = Store.get(REDIRECT_URI);
    if (redirectUri) {
      Store.remove(REDIRECT_URI);
      return <Navigate to={redirectUri} />;
    }

    useIdleTimer({
      timeout: options.timeout,
      crossTab: true,
      onIdle: () => {
        // logs user out
        Logout.user(options.logoutUrl);
        Store.set(REDIRECT_URI, pathname);

        // run custom function, if defined
        options.onLogout && options.onLogout();
        // redirects to different page
        //setRedirect(redirectUrl);

        navigate(redirectUrl);
      },
    });

    return <App />;
  };

export default Wrapper;

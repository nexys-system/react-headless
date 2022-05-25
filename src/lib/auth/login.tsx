import { Navigate } from "react-router-dom";
import * as Credentials from "./credentials";
import { REDIRECT_URI } from "./conf";
import * as Store from "../store";
import LoadDataAsync from "../../components/load-data-async";

const defaultAppUrl = "/app";

interface OnSuccessProps<Profile> {
  profile: Profile;
  permissions: string[];
  locale: string;
  redirectUrl?: string;
}

/**
 * after call to backend, login user on the client side
 */
export const RedirectSuccess = <Profile,>({
  profile,
  permissions,
  locale,
  redirectUrl,
}: OnSuccessProps<Profile>): JSX.Element => {
  console.info("User logged in [client]");
  Credentials.set(profile, permissions, locale);

  // if locale different from currently loaded locale, get new one
  // todo

  // get redirect url
  const redirectUrlFinal: string =
    redirectUrl || Store.get(REDIRECT_URI) || defaultAppUrl;

  return <Navigate to={redirectUrlFinal} />;
};

export const Login = <Profile, LoginPayload = any>({
  loginPayload,
  apiCall,
}: {
  loginPayload: LoginPayload;
  apiCall: (payload: LoginPayload) => Promise<OnSuccessProps<Profile>>;
}) => (
  <LoadDataAsync
    getData={() => apiCall(loginPayload)}
    Component={({ data }) => <RedirectSuccess {...data} />}
  />
);

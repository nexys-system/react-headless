import { useNavigate } from "react-router-dom";
import * as Credentials from "./credentials";
import { REDIRECT_URI } from "./conf";
import * as Store from "../store";

const defaultAppUrl = "/app";

/**
 * after call to backend, login user on the client side
 */
export const onSuccess = <Profile>({
  profile,
  permissions,
  locale,
  redirectUrl,
}: {
  profile: Profile;
  permissions: string[];
  locale: string;
  redirectUrl?: string;
}): void => {
  console.info("User logged in [client]");
  Credentials.set(profile, permissions, locale);

  // if locale different from currently loaded locale, get new one
  // todo

  // get redirect url
  const redirectUrlFinal: string =
    redirectUrl || Store.get(REDIRECT_URI) || defaultAppUrl;

  const navigate = useNavigate();
  navigate(redirectUrlFinal);
};

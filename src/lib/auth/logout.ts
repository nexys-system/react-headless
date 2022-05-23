import * as Credentials from "./credentials";

const urlLogoutDefault = "/api/logout";

/**
 * backend logout
 * @returns
 */
export const backend = async (
  url: string = urlLogoutDefault
): Promise<number> => {
  const r = await fetch(url);

  if (r.status === 200) {
    console.info("User logged out [server]");
    return r.status;
  }

  const err = "User logout: something went wrong while logging out user";
  console.error(err);
  return Promise.reject({ err, status: r.status, text: await r.text() });
};

/**
 * logs user out
 * client (local storage) + server (clean tokens)
 */
export const user = (backendUrl: string = urlLogoutDefault): void => {
  backend(backendUrl);

  Credentials.remove();
  console.info("User logged out [client]");
};

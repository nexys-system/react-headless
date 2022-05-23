export enum AuthError {
  explicitLogout = "explicit_logout", // user clicks on logout => generic message, e.g. "you were successfully logged out"
  timeout = "timeout", // idle timer
  timeoutServer = "timeout_server", // access token expired and could not be renewed
  userNotActive = "user_not_active", // upon login/signup, user already in the database but with the wrong status
  wrongCredentials = "wrong_credentials", // upon login, credentials wrong
}

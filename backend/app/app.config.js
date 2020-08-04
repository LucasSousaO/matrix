import environment from "./helpers/environment";

export function getRoomsSource() {
  const roomsSource = process.env.ROOMS_SOURCE;
  return roomsSource
}

export function shouldEnforceSSL() {
  const enforceSSL = process.env.ENFORCE_SSL || "false";

  return enforceSSL === "true";
}

export function getEnvironment() {
  return process.env.NODE_ENV;
}

export function getSessionConfig() {
  const cookieSessionKey =
    process.env.COOKIE_SESSION_SECRET || "matrix-session";
  const maxAge =
    environment.parseVariable(process.env.COOKIE_SESSION_MAX_AGE) ||
    30 * 24 * 60 * 60 * 1000; // 30 days

  return {
    name: "matrix-session",
    keys: [cookieSessionKey],
    maxAge
  };
}

export function getAuthConfig() {
  const defaultAuthStrategy = "google";
  const clientID = process.env.GOOGLE_CLIENT_ID || "782881680719-6ngc89825c8ot3ocoo0k8veir0jbsdk3.apps.googleusercontent.com";
  const clientSecret = process.env.GOOGLE_SECRET || "VrL2BD5DVEfCoROVsEW53s4G";
  const callbackURL =
    process.env.GOOGLE_CALLBACK_URL ||
    "http://localhost:8080/auth/google/callback";

  return {
    authStrategy: defaultAuthStrategy,
    clientID,
    clientSecret,
    callbackURL
  };
}

export function getAllowedDomains() {
  const allowedDomains =
    environment.parseVariable(process.env.WHITELIST_DOMAINS) || [];

  return allowedDomains;
}

export function getServerConfig() {
  const host = "0.0.0.0"
  const port = process.env.PORT || 8080

  return { host, port }
}

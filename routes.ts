/**
 * An array of routes that are accesssible to the public
 * These routes are not protected by the auth guard
 * @type {string[]}
 */
export const publicRoutes: string[] = ["/home", "/auth/new-verification"];

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes: string[] = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/forgot-password",
  "/auth/new-password"
];

/**
 * The prefix for the api routes
 * Routes that start with this prefix are considered api routes
 * @type {string}
 */

export const apiAuthPrefix: string = "/api/auth";

/**
 * The default redirect paht after loggin in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT: string = "/settings";

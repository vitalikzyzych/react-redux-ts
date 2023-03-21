import Keycloak from 'keycloak-js';
import jwtDecode from 'jwt-decode';

interface IDecodedToken {
  exp: number;
  customer_id: string;
  email: string;
  preferred_username: string;
}

type IDecodedTokenProp = 'exp' | 'customer_id' | 'email' | 'preferred_username';

const keycloak = new Keycloak({
  url: process.env.REACT_APP_KEYCLOAK_URL,
  realm: process.env.REACT_APP_KEYCLOAK_REALM as string,
  clientId: process.env.REACT_APP_KEYCLOAK_CLIENT_ID as string,
});

/**
 * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
 *
 * param onAuthenticatedCallback
 */

const initKeycloak = async (onAuthenticatedCallback: () => void) => {
  if (isValidLocalToken()) {
    onAuthenticatedCallback();
  } else {
    const res = await keycloak.init({ onLoad: 'login-required' });
    if (res) {
      localStorage.setItem('keycloak-token', keycloak.token as string);
      onAuthenticatedCallback();
    }
    //
  }
};

const doLogin = keycloak.login;

const doLogout = async () => {
  // eslint-disable-next-line no-unused-vars
  const res = await keycloak.init({});
  keycloak.logout();
  localStorage.removeItem('keycloak-token');
};

const getToken = () => localStorage.getItem('keycloak-token') || keycloak.token;

const isLoggedIn = () => !!localStorage.getItem('keycloak-token');

const updateToken = (successCallback: () => void) =>
  keycloak.updateToken(5).then(successCallback).catch(doLogin);

const getUsername = () => keycloak.tokenParsed?.preferred_username;

const hasRole = (roles: any) => roles.some((role: any) => keycloak.hasRealmRole(role));

const isTokenValid = () => {
  const token = localStorage.getItem('keycloak-token');
  if (!token) {
    return false;
  }
  const decodedToken = jwtDecode(token) as IDecodedToken;
  const utcSeconds = decodedToken.exp;
  const expiredDate = new Date(0);
  expiredDate.setUTCSeconds(utcSeconds);
  const today = new Date();
  return today < expiredDate;
};

const isValidLocalToken = () => {
  const token = localStorage.getItem('keycloak-token');
  if (!token) return false;
  const decodedToken = jwtDecode(token) as IDecodedToken;
  const utcSeconds = decodedToken.exp;
  const expiredDate = new Date(0);
  expiredDate.setUTCSeconds(utcSeconds);
  const today = new Date();
  return today < expiredDate;
};

const getDecodedItem = (prop: IDecodedTokenProp) => {
  const token = localStorage.getItem('keycloak-token');
  if (!token) {
    // doLogout();
    return '';
  }
  const decodedToken = jwtDecode(token) as IDecodedToken;
  return decodedToken[prop];
};

export {
  initKeycloak,
  doLogin,
  doLogout,
  isLoggedIn,
  isTokenValid,
  getToken,
  getDecodedItem,
  updateToken,
  getUsername,
  hasRole,
  keycloak,
};

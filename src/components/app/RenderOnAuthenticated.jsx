import { isLoggedIn, isTokenValid } from 'source/AuthSource';

const RenderOnAuthenticated = ({ children }) => {
  return isLoggedIn() && isTokenValid() ? children : null;
};
export default RenderOnAuthenticated;

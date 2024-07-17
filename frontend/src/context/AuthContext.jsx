import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState();

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.any,
};
export { AuthContext, AuthContextProvider };

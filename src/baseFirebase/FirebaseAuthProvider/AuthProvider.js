import React, { createContext } from 'react';

export const Context = createContext()
const AuthProvider = ({children}) => {

    const authInfo = {

    }
    return (
        <Context.Provider value={authInfo}>
            {children}
        </Context.Provider>
    );
};

export default AuthProvider;
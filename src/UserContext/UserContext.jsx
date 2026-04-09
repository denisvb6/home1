import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext({
    username: '',
    isLogined: Boolean
});

export const UserProvider = ({ children }) => {
    const [userValue, setUserValue] = useState(null);

    useEffect(() => {
        const storedValue = localStorage.getItem('profiles');
        if (storedValue) {
            setUserValue(JSON.parse(storedValue));
        }
    }, []);

    return (
        <UserContext.Provider value={{userValue, setUserValue}}>
            {children}
        </UserContext.Provider>
    );
};
import { useState, useEffect } from 'react';
import { UserContext } from '../UserContext/UserContext';

export const UserProvider = ({ children }) => {
    const [userValue, setUserValue] = useState(UserContext);
    
    useEffect(() => {
        const storedValue = localStorage.getItem('profiles');

        if (storedValue) {
            const parsedValue = JSON.parse(storedValue);
            const user = parsedValue.find((profile) => profile.isLogined);

            if (user) {
                setUserValue(user);
            } 
        }
    }, []);

    return (
        <UserContext.Provider value={{ userValue, setUserValue }}>
            {children}
        </UserContext.Provider>
    );
};
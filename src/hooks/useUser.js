import {createContext, useContext, useState, useEffect} from 'react'; 

export const UserContext = createContext(null);

export const UserProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null);


    return (
    <UserContext.Provider value={{currentUser, setCurrentUser}}>
        {children}
    </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)
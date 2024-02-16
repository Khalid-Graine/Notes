import { createContext, useState } from "react";
export const ProfileContext = createContext(null)


export const ProfileProvider = ({children}) => {
    const [value, setValue] = useState('new name')
   return (
    <ProfileContext.Provider value={{value, setValue}} >
    {children}
    </ProfileContext.Provider>
   
   )
}
import { useState } from "react";
import { UserContext } from "./UserContext";

 const UserProvider = ({children}) => {
    const [name, setName] = useState("khalid xxx");
  return (
    <UserContext.Provider value={{name,setName}}>
       {children}
      </UserContext.Provider>
  )
}
export default UserProvider;


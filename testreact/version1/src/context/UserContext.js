/*#############################################
                Importaciones
###############################################*/


import { createContext } from "react";


/*#############################################
                Logica
###############################################*/

const UserContext = createContext();

const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider>
            {children}
        </UserContext.Provider>
    )
}



/*#############################################
                Exportacion
###############################################*/
export default UserContext;
export { UserProvider }
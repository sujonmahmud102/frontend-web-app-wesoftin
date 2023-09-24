import { createContext, useState } from "react";


export const ContextUser = createContext(null);

const ProviderContext = ({ children }) => {
    const [sharedUsers, setShareUsers] = useState([]);

    return (
        <ContextUser.Provider value={{ sharedUsers, setShareUsers }}>
            {children}
        </ContextUser.Provider>
    );
};

export default ProviderContext;
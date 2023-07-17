import React, {createContext, useContext} from "react";

const UserContext = createContext({
    username: "",
    sessionId: "",
});

export default UserContext;
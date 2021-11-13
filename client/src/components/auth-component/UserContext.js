import React from 'react'

const defaultVal = {
    user:{},
    token:"",
    setUserContext:()=>{}
};
export const UserContext = React.createContext(defaultVal);
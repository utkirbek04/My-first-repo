import { createContext , useEffect, useState} from "react";


const initialState = {
    authenticated: false,
    userData:null
};

function authReduser (state = initialState, action){
    switch (action.type){
        case "login" : {
            return {
                authenticated : true,
                userData : action.payload
            };
        }
        case "logout" : {
            return {
                authenticated:false,
                userData : null
            }
        }

        default:
            return state;
    }
}

const AuthContext = createContext();
export {
    AuthContext,
    authReduser, 
    initialState
}
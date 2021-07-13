import {createContext, useContext, useReducer} from 'react';

// Prepare the Data Layer
export const StateContext = createContext();

// Wrap our app and provide the Data Layer
export const StateProvider = ({ reducer, initialState, children}) => {
    return(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
       {children} 
    </StateContext.Provider>
    )
};


export const useStateValue = () => useContext(StateContext);
/* useContext way 
--------------------*/

// import { createContext, useState } from "react";

// const AgeContext = createContext();

// const AgeContextProvider = (props) => {
//     const[age, setAge] = useState(20);

//     const addOneToAge = () => setAge(age + 1);
//     const addFiveToAge = () => setAge(age + 5);
//     const addNumToAge = (num) => setAge(age + num);

//     return (
//         <AgeContext.Provider value={ age, addOneToAge, addFiveToAge, addNumToAge}>
//             {props.children}
//         </AgeContext.Provider>
//     )

// }

/* useReducer way: one 
--> advantage: use one 'dispatch' to underline all the other functions
--------------------------------------------------------------------------*/

import { createContext, useState, useReducer } from "react";

const AgeContext = createContext();

const ageReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_ONE': 
        return {
            state : state + 1
        };
        case 'ADD_FIVE': 
        return {
            state : state + 5
        };
        case 'ADD_NUM': 
        return {
            state : state + action.payload
        };
        default:
            return state;

    }
}


const AgeContextProvider = (props) => {
    const[age, dispatch] = useReducer(ageReducer, 20);

    dispatch({ type: 'ADD_ONE'});
    dispatch({ type: 'ADD_FIVE'});
    dispatch({ type: 'ADD_NUM', payload: 7 })

    return (
        <AgeContext.Provider value={ age, dispatch}>
            {props.children}
        </AgeContext.Provider>
    )

}
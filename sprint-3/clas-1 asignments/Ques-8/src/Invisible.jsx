import React from 'react';
import { useReducer } from 'react';

// Setting initial value 
const initialState = {
    type: true,
};

// Reducer function
const Reducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE':
            return { ...state, type: !state.type };
        default:
            return state;
    }
};

// Action creator for toggling visibility
const toggle = () => {
    return {
        type: 'TOGGLE' // Correctly returning an object with type
    };
}

const Invisible = () => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    const { type } = state;

    return (
        <>
             <h1>
              Visibility: {type ? 'True' : 'False' }
        </h1>
        <div>
          
            <button onClick={() => dispatch(toggle())}>Change Visibility</button>
        </div>
        
        </>
   
    );
}

export default Invisible;

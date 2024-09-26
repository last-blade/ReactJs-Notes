/*
Step:4 Slice ke andar "initialState and reducers hote hain", see below:- 

import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },

    reducers: {
        
    }
});

Reducers ke andar hum apne Actons(i.e. functions) likhte hain, like peechhe se mere paas increment wala action aayega toh main +1
value increment kar dunga, toh aise humnein logic likhna hota hai
*/



import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },

    reducers: {
        increment: state => { // yeh ek action hai
            state.value += 1 // and mein kya perform karna hai yeh logic likha hai
        },

        decrement: state => { // yeh ek action hai 
            state.value -= 1 
        },

        incrementByAmount: (state, action) => { // yeh ek reducer function
            state.value += Number(action.payload);
        },

        resetValue: state => {
            state.value = 0
        }
    }
});


export const {increment, decrement, incrementByAmount, resetValue} = counterSlice.actions;

export default counterSlice.reducer;